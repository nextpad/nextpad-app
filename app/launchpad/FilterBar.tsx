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
            <select
               defaultValue="default"
               className="select select-bordered w-full max-w-xs"
            >
               <option value="default" disabled>
                  Blockchain
               </option>
               <option value="core">Core</option>
               <option value="sepolia">Sepolia</option>
            </select>
         </div>
         <div className="flex w-1/6 mr-6">
            <select
               className="select select-bordered w-full max-w-xs"
               defaultValue="default"
            >
               <option disabled value="default">
                  Status
               </option>
               <option>All</option>
               <option value={1}>Active</option>
               <option value={0}>Pending</option>
               <option value={2}>Canceled</option>
               <option value={3}>Failed</option>
               <option value={4}>Ended</option>
            </select>
         </div>
         <div className="flex w-1/6 mr-6">
            <select
               className="select select-bordered w-full max-w-xs"
               defaultValue="default"
            >
               <option disabled value="default">
                  Short
               </option>
               <option value="start">Start time</option>
               <option value="end">End time</option>
            </select>
         </div>
         <div className="flex w-1/6">
            <select
               defaultValue="default"
               className="select select-bordered w-full max-w-xs"
            >
               <option disabled value="default">
                  Types
               </option>
               <option value="public">Public Sale</option>
               <option value="private">Private Sale</option>
            </select>
         </div>
      </>
   );
}

export default FilterBar;
