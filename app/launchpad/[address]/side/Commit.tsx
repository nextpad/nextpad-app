import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import { PoolData } from "../SideCards";
import { BrowserProvider, Contract, ethers } from "ethers";
import { tokenAddress } from "@/app/components/constants";

const ERCAbi = [
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
   const [status, setStatus] = useState<"PENDING" | "LIVE" | "FAILED" | "DONE">(
      "PENDING"
   );
   const [textBtn, setTextBtn] = useState("Vote");
   const [amount, setAmount] = useState("");
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (pool.status == 1) {
         setStatus("LIVE");
         setTextBtn("Commit Buy");
      }
   }, [pool.status]);

   async function commitClick() {
      if (!walletProvider || !isConnected) return;

      try {
         setLoading(true);
         const ethersProvider = new BrowserProvider(walletProvider);
         const signer = await ethersProvider.getSigner();

         const BoardJSON = require("../Board.json");
         const contract = new Contract(ctx.address, BoardJSON.abi, signer);

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
         console.log(err.message);
      }
   }

   return (
      <div>
         {status === "LIVE" ? (
            <span className="text-lg mb-2 block">
               Amount {ctx.blockchain == 1 ? "CORE" : "ETH"}
            </span>
         ) : (
            <span className="text-lg mb-2 block">
               Amount {pool.status == 0 ? "NXP" : token[1]}
            </span>
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
