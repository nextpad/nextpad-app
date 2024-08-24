import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context";
import { PoolData } from "../SideCards";
import { BrowserProvider, Contract, ethers } from "ethers";
import { tokenAddress } from "@/app/components/constants";
import { BigNumberish } from "ethers";

const ERCAbi = [
   "function balanceOf(address) view returns (uint)",
   "function approve(address spender, uint amount)",
   "function allowance(address owner, address spender) view returns (uint)",
];

function Commit({
   pool,
   token,
   setPool,
}: {
   pool: PoolData;
   token: string[];
   setPool: (d: any) => void;
}) {
   const ctx = useContext(Context);
   const { address, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   let intErId = useRef<NodeJS.Timeout>();
   const [errorAlert, setErrorAlert] = useState("");
   const [status, setStatus] = useState<"PENDING" | "LIVE" | "FAILED" | "DONE">(
      "PENDING"
   );
   const [textBtn, setTextBtn] = useState("Vote");
   const [amount, setAmount] = useState("");
   const [loading, setLoading] = useState(false);
   const [myNXP, setMyNXP] = useState(null);

   useEffect(() => {
      async function fetchBalance() {
         if (!walletProvider || !isConnected) return;

         const ethersProvider = new BrowserProvider(walletProvider);
         const signer = await ethersProvider.getSigner();
         const contract = new Contract(tokenAddress, ERCAbi, signer);

         const balance = await contract.balanceOf(address);
         setMyNXP(balance.toString());
      }

      if (pool.status == 1) {
         setStatus("LIVE");
         setTextBtn("Commit Buy");
      }

      fetchBalance();
   }, [pool.status]);

   async function commitClick() {
      if (!walletProvider || !isConnected) return;

      setLoading(true);
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      const BoardJSON = require("../Board.json");
      const contract = new Contract(ctx.address, BoardJSON.abi, signer);

      try {
         if (status === "PENDING") {
            // Check allowance first
            const tokenContract = new Contract(tokenAddress, ERCAbi, signer);
            const allowance = await tokenContract.allowance(
               address,
               ctx.address
            );

            if (allowance == BigInt(0)) {
               setTextBtn(() => "Approving..");
               const tx = await tokenContract.approve(
                  ctx.address,
                  ethers.MaxUint256
               );
               await tx.wait();
            }

            setTextBtn(() => "Voting..");
            const tx = await contract.voteProject(ethers.parseUnits(amount));
            await tx.wait();
            setTextBtn("Vote");
         }

         if (status === "LIVE") {
            const tx = await contract.buyPresale({
               value: ethers.parseEther(amount),
            });
            await tx.wait();
         }

         const [data, participants, voters] = await Promise.all([
            contract.getLaunchpadDetail(),
            contract.totalContributors(),
            contract.totalVoters(),
         ]);
         setPool((prev: PoolData) => ({
            ...prev,
            status: data[0].toString(),
            minBuy: data[1].toString(),
            maxBuy: data[2].toString(),
            rates: data[3].toString(),
            startDate: parseInt(data[4]),
            deadline: parseInt(data[5]),
            totalRaised: data[7].toString(),
            targetRaised: data[8].toString(),
            totalNXP: data[9].toString(),
            participants: parseInt(participants),
            voters: parseInt(voters),
         }));
         setLoading(false);
      } catch (err: any) {
         setLoading(false);
         if (err) {
            setErrorAlert(err.reason);
            intErId.current = setInterval(() => {
               setErrorAlert(() => "");
               clearInterval(intErId.current);
            }, 3000);
         }
      }
   }

   return (
      <div>
         {errorAlert && (
            <div className="toast toast-top toast-end">
               <div className="alert alert-error text-slate-100 font-semibold">
                  <span>{errorAlert}</span>
               </div>
            </div>
         )}
         {status === "LIVE" ? (
            <span className="text-lg mb-2 block">
               Amount {ctx.blockchain == 1 ? "CORE" : "ETH"}
            </span>
         ) : (
            <div className="flex justify-between">
               <span className="text-lg mb-2 block">
                  Amount {pool.status == 0 ? "NXP" : token[1]}
               </span>
               <span className="text-lg mb-2 block">
                  Balance: {myNXP && ethers.formatUnits(myNXP as never)}
               </span>
            </div>
         )}
         <input
            type="number"
            step={0.001}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input input-bordered w-full"
         />
         <button
            className="btn btn-normal mt-4 disabled:bg-purple-800 disabled:text-white"
            disabled={loading}
            onClick={commitClick}
         >
            {loading && (
               <span className="loading loading-spinner loading-md"></span>
            )}{" "}
            {textBtn}
         </button>
      </div>
   );
}

export default Commit;
