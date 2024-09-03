/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { LockData } from "../LockForm";
import { BrowserProvider, Contract, Eip1193Provider } from "ethers";
import ViewFinderIcon from "@/app/components/icons/ViewFinderIcon";

type Props = {
   lockData: LockData;
   address: `0x${string}` | undefined;
   setLockData: (data: any) => void;
   setBalance: (data: any) => void;
   isConnected: boolean;
   walletProvider: Eip1193Provider | undefined;
   abi: string[];
   setTokenContract: React.Dispatch<Contract | undefined>;
   token: string[];
   setToken: React.Dispatch<string[]>;
};

function TokenAddress(props: Props) {
   const [address, setAddress] = useState("");

   React.useEffect(() => {
      async function checkTokenInfo() {
         if (!props.isConnected || !props.walletProvider) return;

         try {
            const ethersProvider = new BrowserProvider(props.walletProvider);
            const signer = await ethersProvider.getSigner();

            const contract = new Contract(address, props.abi, signer);
            const name = await contract.name();
            const symbol = await contract.symbol();
            const balance = await contract.balanceOf(props.address);

            props.setToken([name, symbol]);
            props.setBalance(balance.toString());
            props.setTokenContract(contract);
         } catch (err) {
            props.setToken(["", ""]);
            // console.log(err?.message);
         }
      }

      const timeoutId = setTimeout(() => {
         props.setLockData((prev: any) => ({
            ...prev,
            address: address,
         }));
      }, 500);

      checkTokenInfo();

      return () => {
         clearTimeout(timeoutId);
      };
   }, [address, 500]);

   return (
      <>
         <label className="text-lg font-semibold block mt-5">
            Token Address
         </label>
         <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input input-bordered w-full block my-3"
         />
         {props.token[0] && props.token[1] && (
            <div className="card border-4 border-base-300 rounded-md mt-4">
               <div className="card-body p-5">
                  <div className="flex justify-between">
                     <div>
                        {props.token[1]} / {props.token[0]}
                     </div>
                     <span className="block">
                        <a
                           href={`https://opencampus-codex.blockscout.com/token/${address}`}
                           className="text-purple-600"
                           target="_blank"
                        >
                           Explorer{" "}
                           <ViewFinderIcon classList="size-5 inline ml-1" />
                        </a>
                     </span>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default TokenAddress;
