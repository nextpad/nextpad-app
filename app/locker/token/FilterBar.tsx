import React from "react";

function FilterBar() {
   return (
      <>
         <div className="flex w-4/6 mr-4">
            <input
               type="text"
               placeholder="Search token name, address or symbol"
               className="input input-bordered w-full"
            />
         </div>
         <div className="flex w-1/6 mr-4">
            <select
               defaultValue="default"
               className="select select-bordered w-full"
            >
               <option value="default" disabled>
                  Blockchain
               </option>
               <option value="core">Core</option>
               <option value="sepolia">Sepolia</option>
            </select>
         </div>
         <div className="flex w-1/6">
            <select
               className="select select-bordered w-full"
               defaultValue="default"
            >
               <option value="default" disabled>
                  Short by
               </option>
               <option value="token">Token Name</option>
               <option value="value">Value</option>
               <option value="amount">Token Amount</option>
            </select>
         </div>
      </>
   );
}

export default FilterBar;
