import React from "react";
import TokenTable from "./TokenTable";

function page() {
   return (
      <div className="min-h-screen">
         <h1 className="text-3xl font-bold">Tokens</h1>
         <div className="flex justify-between items-center mt-5">
            <div className="flex-1 max-w-xs">
               <div
                  role="tablist"
                  className="tabs tabs-boxed border border-teal-800 p-0"
               >
                  <a role="tab" className="tab bg-teal-600 text-white">
                     All
                  </a>
                  <a role="tab" className="tab">
                     Core
                  </a>
                  <a role="tab" className="tab">
                     Sepolia
                  </a>
               </div>
            </div>
            <div className="flex-1 max-w-2xl">
               <input
                  type="text"
                  placeholder="Search by token name, contract address or symbol"
                  className="input input-bordered w-full"
               />
            </div>
         </div>
         <div className="overflow-x-auto mt-6 border border-teal-800">
            <TokenTable />
         </div>
      </div>
   );
}

export default page;
