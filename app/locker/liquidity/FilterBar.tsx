import React from "react";

function FilterBar() {
   return (
      <>
         <div className="flex w-3/6 mr-4">
            <input
               type="text"
               placeholder="Search token name, address or symbol"
               className="input input-bordered w-full"
            />
         </div>
         <div className="flex w-1/6 mr-4">
            <select className="select select-bordered w-full">
               <option disabled selected>
                  Exchange
               </option>
               <option>Uniswap</option>
               <option>Sushiswap</option>
               <option>IcecreamSwap</option>
            </select>
         </div>
         <div className="flex w-1/6 mr-4">
            <select className="select select-bordered w-full">
               <option disabled selected>
                  Blockchain
               </option>
               <option>Core</option>
               <option>Sepolia</option>
            </select>
         </div>
         <div className="flex w-1/6">
            <select className="select select-bordered w-full">
               <option disabled selected>
                  Short by
               </option>
               <option>Token Name</option>
               <option>Value</option>
               <option>Token Amount</option>
            </select>
         </div>
      </>
   );
}

export default FilterBar;
