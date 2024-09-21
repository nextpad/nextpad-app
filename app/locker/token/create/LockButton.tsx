import React, { useEffect, useState } from "react";
import { LockData } from "./LockForm";
import { Contract, ethers } from "ethers";
import { lockerAddress } from "@/app/components/constants";

type Props = {
   address: `0x${string}` | undefined;
   lockData: LockData;
   contract: Contract | undefined;
   tokenContract: Contract | undefined;
   token: string[];
   saveToDatabase: ({
      name,
      address,
      symbol,
      blockchain,
   }: {
      address: string;
      name: string;
      symbol: string;
      blockchain: number;
   }) => Promise<void>;
};

function LockButton({
   lockData,
   contract,
   tokenContract,
   address,
   token,
   saveToDatabase,
}: Props) {
   const [loading, setLoading] = useState(false);
   const [approved, setApproved] = useState(true);

   useEffect(() => {
      async function checkAllowance() {
         if (!tokenContract) return;

         const allowance = await tokenContract.allowance(
            address,
            lockerAddress
         );

         if (allowance == BigInt(0)) {
            setApproved(false);
         } else {
            setApproved(true);
         }
      }

      checkAllowance();
   }, [tokenContract, address]);

   async function lockToken() {
      if (!tokenContract || !contract) return;

      try {
         setLoading(true);
         if (!approved) {
            const result = await tokenContract.approve(
               lockerAddress,
               ethers.MaxUint256
            );
            await result.wait();
            setApproved(true);
            setLoading(false);
            return;
         }

         const decimals = await tokenContract.decimals();
         const tx = await contract.createLockUp(
            lockData.address,
            ethers.parseUnits(lockData.amount, decimals),
            lockData.unlocked,
            lockData.receiver,
            lockData.title
         );
         await tx.wait();

         await saveToDatabase({
            address: lockData.address,
            name: token[0],
            symbol: token[1],
            blockchain: lockData.network == 656476 ? 1 : 2,
         });
         setLoading(false);
         window.location.replace("/locker/token/" + lockData.address);
      } catch (err: any) {
         setLoading(false);
         console.log(err.reason);
      }
   }

   return (
      <>
         <button
            className="btn disabled:bg-base disabled:text-slate-300 disabled:bg-gray-700 bg-gray-900 hover:bg-gray-700 text-white mt-2"
            disabled={loading}
            onClick={lockToken}
         >
            {loading && (
               <span className="loading loading-spinner loading-sm"></span>
            )}{" "}
            {approved ? "Lock Now" : "Approve " + token[1]}
         </button>
      </>
   );
}

export default LockButton;
