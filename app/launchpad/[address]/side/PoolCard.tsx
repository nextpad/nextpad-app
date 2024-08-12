import React, { useContext } from "react";
import Context from "../Context";
import { ethers } from "ethers";
import { PoolData } from "../SideCards";

function PoolCard({ pool, token }: { pool: PoolData; token: string[] }) {
   const ctx = useContext(Context);
   return (
      <div className="mt-7">
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ minHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
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
                                 ? "bg-yellow-700"
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
                        <p className="mb-4 text-lg text-slate-300">
                           {pool.minBuy &&
                              parseFloat(
                                 ethers.formatEther(pool.minBuy)
                              ).toLocaleString()}{" "}
                           {ctx.blockchain == 1 ? "CORE" : "ETH"}
                        </p>
                        <p className="mb-4 text-lg text-slate-300">
                           {pool.maxBuy &&
                              parseInt(
                                 ethers.formatEther(pool.maxBuy)
                              ).toLocaleString()}{" "}
                           {ctx.blockchain == 1 ? "CORE" : "ETH"}
                        </p>
                        <p className="mb-4 text-lg text-slate-300">
                           1 {ctx.blockchain == 1 ? "CORE" : "ETH"} ={" "}
                           {pool.rates && pool.rates} {token[1]}
                        </p>
                        <p className="mb-4 text-lg text-slate-300">
                           {pool.participants}
                        </p>
                        <p className="mb-4 text-lg text-slate-300">
                           1 TOL = {pool.rewardRate} {token[1]}
                        </p>
                        <p className="mb-4 text-lg text-teal-600">
                           <a
                              href={`https://scan.test.btcs.network/address/${ctx.address}`}
                              target="_blank"
                           >
                              {ctx.address.slice(0, 20)}...
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
