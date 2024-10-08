import React, { useContext } from "react";
import Context from "../Context";
import { ethers } from "ethers";
import { PoolData } from "../SideCards";

function PoolCard({ pool, token }: { pool: PoolData; token: string[] }) {
   const ctx = useContext(Context);
   return (
      <div className="mt-7">
         <div
            className="card bg-base-100 border-2 w-full border-base-300"
            style={{ minHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b-2 border-base-300">
                  <h2 className="px-9 py-4 text-xl">Pool Information</h2>
               </div>
               <div className="px-9">
                  <div className="flex flex-row justify-between text-lg">
                     <div className="my-5">
                        <p className="mb-4">Status</p>
                        <p className="mb-4">Sale Type</p>
                        <p className="mb-4">Min. Buy</p>
                        <p className="mb-4">Max. Buy</p>
                        <p className="mb-4">Price</p>
                        <p className="mb-4">Total Participants</p>
                        <p className="mb-4">Reward Vote</p>
                        <p className="mb-4">Pool Address</p>
                     </div>
                     <div className="my-5">
                        <span
                           className={`badge ${
                              pool.status == 0
                                 ? "bg-yellow-600"
                                 : pool.status == 1 || pool.status == 4
                                 ? "bg-teal-600"
                                 : "bg-rose-700"
                           } text-white p-3 mb-4`}
                        >
                           {pool.status == 0
                              ? "Pending"
                              : pool.status == 1
                              ? "Active"
                              : pool.status == 2
                              ? "Cancelled"
                              : pool.status == 3
                              ? "Failed"
                              : "Finalized"}
                        </span>
                        <span className="text-primary block mb-4">Public</span>
                        <p className="mb-4 text-lg">
                           {pool.minBuy &&
                              parseFloat(
                                 ethers.formatEther(pool.minBuy)
                              ).toLocaleString()}{" "}
                           {ctx.blockchain == 1 ? "EDU" : "ETH"}
                        </p>
                        <p className="mb-4 text-lg">
                           {pool.maxBuy &&
                              parseInt(
                                 ethers.formatEther(pool.maxBuy)
                              ).toLocaleString()}{" "}
                           {ctx.blockchain == 1 ? "EDU" : "ETH"}
                        </p>
                        <p className="mb-4 text-lg">
                           1 {ctx.blockchain == 1 ? "EDU" : "ETH"} ={" "}
                           {pool.rates && pool.rates} {token[1]}
                        </p>
                        <p className="mb-4 text-lg">{pool.participants}</p>
                        <p className="mb-4 text-lg">
                           1 NXP = {pool.rewardRate} {token[1]}
                        </p>
                        <p className="mb-4 text-lg text-gray-600">
                           <a
                              href={`https://opencampus-codex.blockscout.com/address/${ctx.address}`}
                              target="_blank"
                           >
                              {ctx.address.slice(0, 24)}...
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PoolCard;
