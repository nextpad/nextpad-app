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
import Commit from "./Commit";

function ContributionCard({
   pool,
   token,
   setPool,
}: {
   pool: PoolData;
   token: string[];
   setPool: (data: any) => void;
}) {
   const ctx = useContext(Context);

   return (
      <>
         <div
            className="card bg-base-100 border-2 w-full border-base-300"
            style={{ minHeight: "36rem" }}
         >
            <div className="card-body p-0">
               <div className="border-b-2 border-base-300">
                  <div className="flex justify-between py-5 px-8">
                     <div className="flex flex-col">
                        <span className="block">Total Raised</span>
                        <span className="block text-2xl font-bold">
                           {pool.totalRaised &&
                              parseFloat(ethers.formatEther(pool.totalRaised))
                                 .toFixed(2)
                                 .toLocaleString()}{" "}
                           {ctx.blockchain == 1 ? "EDU" : "ETH"}
                        </span>
                     </div>
                     <div className="flex justify-end p-0">
                        <div
                           className="bg-base-300 rounded-lg font-semibold py-4 px-10"
                           title="Price per token"
                        >
                           {pool.rates && parseFloat(pool.rates) < 1
                              ? (1 / parseFloat(pool.rates)).toFixed(2)
                              : (1 / parseFloat(pool.rates)).toFixed(7)}{" "}
                           {ctx.blockchain == 1 ? "EDU" : "ETH"}
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
                  {pool.targetRaised &&
                     (pool.status == 0 ? (
                        <ProgressGoals
                           goals={ethers.formatEther(pool.minNXP)}
                           raised={ethers.formatEther(pool.totalNXP)}
                           symbol="NXP"
                        />
                     ) : (
                        <ProgressGoals
                           goals={ethers.formatEther(pool.targetRaised)}
                           raised={ethers.formatEther(pool.totalRaised)}
                           symbol={ctx.blockchain == 1 ? "EDU" : "ETH"}
                        />
                     ))}
                  <div className="mt-2 float-end">
                     Participants:{" "}
                     <span className="text-slate-300">
                        {pool.status == 0 ? pool.voters : pool.participants}
                     </span>
                  </div>
                  <div className="clear-both"></div>
                  <div className="flex flex-row justify-between text-lg">
                     <div className="my-5">
                        <p className="mb-1">Total Allocation</p>
                        <p>Remaining Allocation</p>
                     </div>
                     <div className="my-5">
                        <p className="font-semibold mb-1">
                           {pool.totalAllocation &&
                              parseInt(
                                 ethers.formatUnits(pool.totalAllocation)
                              ).toLocaleString()}{" "}
                           {token[1] && token[1]}
                        </p>
                        <p className="font-semibold text-right">
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
                  <Commit pool={pool} setPool={setPool} token={token} />
               </div>
            </div>
         </div>
      </>
   );
}

export default ContributionCard;
