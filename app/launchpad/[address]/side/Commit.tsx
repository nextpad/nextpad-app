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

function Commit({ pool, token }: { pool: PoolData; token: string[] }) {
   const ctx = useContext(Context);
   const { address, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();
   const [status, setStatus] = useState<"PENDING" | "LIVE" | "FAILED" | "DONE">(
      "PENDING"
   );
   const [textBtn, setTextBtn] = useState("Vote");
   const [amount, setAmount] = useState("");

   useEffect(() => {
      if (pool.status == 1) {
         setStatus("LIVE");
         setTextBtn("Commit Buy");
      }
   }, [pool.status]);

   async function commitClick() {
      if (!walletProvider || !isConnected) return;

      try {
         const ethersProvider = new BrowserProvider(walletProvider);
         const signer = await ethersProvider.getSigner();

         const BoardJSON = require("../Board.json");
         const contract = new Contract(ctx.address, BoardJSON.abi, signer);
         if (status == "PENDING") {
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
            const tx = await contract.placeTOL(ethers.parseUnits(amount));
            tx.wait();
            setTextBtn("Vote");
         }
      } catch (err: any) {
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
            <span className="text-lg mb-2 block">Amount {token[1]}</span>
         )}
         <input
            type="number"
            step={0.001}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input input-bordered w-full"
         />
         {isConnected ? (
            <button className="btn btn-normal mt-4" onClick={commitClick}>
               {textBtn}
            </button>
         ) : (
            <button className="btn btn-normal mt-4" onClick={() => open()}>
               Connect Wallet
            </button>
         )}
      </div>
   );
}

export default Commit;
