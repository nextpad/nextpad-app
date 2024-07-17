import ProgressGoals from "@/app/components/ProgressGoals";
import React from "react";
import TimeCard from "./TimeCard";

function ContributionCard() {
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
                           400.18 ETH
                        </span>
                     </div>
                     <div className="flex justify-end p-0">
                        <div
                           className="bg-gray-700 rounded-lg text-slate-300 py-4 px-10"
                           title="Price per token"
                        >
                           0.0005 ETH
                        </div>
                     </div>
                  </div>
               </div>
               <div className="px-9">
                  <div className="flex justify-center mt-5 mb-7">
                     <div className="flex flex-row">
                        <TimeCard time={12} label="Day" />
                        <TimeCard time={23} label="Hour" />
                        <TimeCard time={43} label="Mins" />
                        <TimeCard time={11} label="Secs" />
                     </div>
                  </div>
                  <ProgressGoals goals={1000} raised={400} />
                  <div className="mt-2 float-end">
                     Participants: <span className="text-slate-300">280</span>
                  </div>
                  <div className="clear-both"></div>
                  <div className="flex flex-row justify-between text-lg">
                     <div className="my-5">
                        <p className="mb-1">Total Allocation</p>
                        <p>Remaining Allocation</p>
                     </div>
                     <div className="my-5">
                        <p className="text-slate-300 mb-1">900,000,000 TRUF</p>
                        <p className="text-slate-300">10,000,000 TRUF</p>
                     </div>
                  </div>
                  <span className="text-lg mb-2 block">Amount ETH</span>
                  <input
                     type="number"
                     step={0.001}
                     className="input input-bordered w-full"
                  />
                  <button className="btn btn-normal mt-4">
                     Connect Wallet
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default ContributionCard;
