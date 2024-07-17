import React from "react";

function PoolCard() {
   return (
      <div className="mt-7">
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ maxHeight: "26rem" }}
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
                        <p className="mb-4">Max Buy</p>
                        <p className="mb-4">Price</p>
                        <p className="mb-4">Total Participants</p>
                        <p className="mb-4">Reward Vote</p>
                     </div>
                     <div className="my-5">
                        <span className="badge bg-teal-700 text-white p-3 mb-4">
                           Active
                        </span>
                        <span className="text-primary block mb-4">Public</span>
                        <p className="mb-4 text-lg text-slate-300">1 ETH</p>
                        <p className="mb-4 text-lg text-slate-300">
                           1 ETH = 60,000 TRUF
                        </p>
                        <p className="mb-4 text-lg text-slate-300">40</p>
                        <p className="mb-4 text-lg text-slate-300">
                           1 TOL = 100 TRUF
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
