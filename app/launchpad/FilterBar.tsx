import React from "react";

function FilterBar() {
   return (
      <>
         <div className="flex w-2/6 mr-6">
            <input
               type="text"
               placeholder="Type token address, symbol to search"
               className="input input-bordered w-full "
            />
         </div>
         <div className="flex w-1/6 mr-6">
            <select className="select select-bordered w-full max-w-xs">
               <option disabled selected>
                  Chains
               </option>
               <option>Core</option>
               <option>Sepolia</option>
            </select>
         </div>
         <div className="flex w-1/6 mr-6">
            <select className="select select-bordered w-full max-w-xs">
               <option disabled selected>
                  Status
               </option>
               <option>All</option>
               <option>Active</option>
               <option>Pending</option>
               <option>Canceled</option>
               <option>Failed</option>
            </select>
         </div>
         <div className="flex w-1/6 mr-6">
            <select className="select select-bordered w-full max-w-xs">
               <option disabled selected>
                  Short
               </option>
               <option>Start time</option>
               <option>End time</option>
            </select>
         </div>
         <div className="flex w-1/6">
            <select className="select select-bordered w-full max-w-xs">
               <option disabled selected>
                  Types
               </option>
               <option>Token Sale</option>
               <option>Private Sale</option>
            </select>
         </div>
      </>
   );
}

export default FilterBar;
