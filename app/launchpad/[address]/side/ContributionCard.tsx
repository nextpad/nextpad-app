"use client";
import ProgressGoals from "@/app/components/ProgressGoals";
import React, { useContext } from "react";
import TimeCard from "./TimeCard";
import { PoolData } from "../SideCards";
import { ethers } from "ethers";
import Context from "../Context";
import {
   useWeb3Modal,
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import CountDown from "./CountDown";

function ContributionCard({
   pool,
   token,
}: {
   pool: PoolData;
   token: string[];
}) {
   const ctx = useContext(Context);
   const { address, isConnected } = useWeb3ModalAccount();
   const { open } = useWeb3Modal();

   return (
      <>
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ minHeight: "36rem" }}
         >
            <div className="card-body p-0">
               <div className="border-b border-teal-900">
                  <div className="flex justify-between py-5 px-8">
                     <div className="flex flex-col">
                        <span className="block">Total Raised</span>
                        <span className="block text-2xl font-bold text-slate-200">
                           {pool.totalRaised &&
                              parseInt(
                                 ethers.formatEther(pool.totalRaised)
                              ).toLocaleString()}{" "}
                           {ctx.blockchain == 1 ? "CORE" : "ETH"}
                        </span>
                     </div>
                     <div className="flex justify-end p-0">
                        <div
                           className="bg-gray-700 rounded-lg text-slate-300 py-4 px-10"
                           title="Price per token"
                        >
                           {pool.rates && parseFloat(pool.rates) < 1
                              ? (1 / parseFloat(pool.rates)).toFixed(2)
                              : (1 / parseFloat(pool.rates)).toFixed(7)}{" "}
                           {ctx.blockchain == 1 ? "CORE" : "ETH"}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="px-9">
                  <div className="flex justify-center mt-5 mb-7">
                     <CountDown
                        targetTime={
                           pool.status == 0 ? pool.startDate : pool.deadline
                        }
                     />
                  </div>
                  {pool.targetRaised && (
                     <ProgressGoals
                        goals={ethers.formatEther(pool.targetRaised)}
                        raised={ethers.formatEther(pool.totalRaised)}
                     />
                  )}
                  <div className="mt-2 float-end">
                     Participants:{" "}
                     <span className="text-slate-300">{pool.participants}</span>
                  </div>
                  <div className="clear-both"></div>
                  <div className="flex flex-row justify-between text-lg">
                     <div className="my-5">
                        <p className="mb-1">Total Allocation</p>
                        <p>Remaining Allocation</p>
                     </div>
                     <div className="my-5">
                        <p className="text-slate-300 mb-1">
                           {pool.totalAllocation &&
                              parseInt(
                                 ethers.formatUnits(pool.totalAllocation)
                              ).toLocaleString()}{" "}
                           {token[1] && token[1]}
                        </p>
                        <p className="text-slate-300 text-right">
                           {pool.totalAllocation &&
                              (
                                 parseInt(
                                    ethers.formatUnits(pool.totalAllocation)
                                 ) -
                                 parseInt(ethers.formatUnits(pool.allocated))
                              ).toLocaleString()}{" "}
                           {token[1] && token[1]}
                        </p>
                     </div>
                  </div>
                  <span className="text-lg mb-2 block">
                     Amount {ctx.blockchain == 1 ? "CORE" : "ETH"}
                  </span>
                  <input
                     type="number"
                     step={0.001}
                     className="input input-bordered w-full"
                  />
                  {isConnected ? (
                     <button
                        className="btn btn-normal mt-4"
                        onClick={() => console.log()}
                     >
                        Commit Buy
                     </button>
                  ) : (
                     <button
                        className="btn btn-normal mt-4"
                        onClick={() => open()}
                     >
                        Connect Wallet
                     </button>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}

export default ContributionCard;
