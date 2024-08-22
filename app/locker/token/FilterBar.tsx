"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
function FilterBar() {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();
   const params = new URLSearchParams(searchParams);

   function handleSearch(term: string) {
      if (term) {
         params.set("query", term);
      } else {
         params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
   }

   function handleSort(term: string) {
      if (term) {
         params.set("sort", term);
      } else {
         params.delete("sort");
      }

      replace(`${pathname}?${params.toString()}`);
   }

   function handleChain(chain: string) {
      if (chain) {
         params.set("chain", chain);
      } else {
         params.delete("chain");
      }

      replace(`${pathname}?${params.toString()}`);
   }
   return (
      <>
         <div className="flex w-4/6 mr-4">
            <input
               type="text"
               placeholder="Search token name, address or symbol"
               className="input input-bordered w-full"
               onChange={(e) => {
                  handleSearch(e.target.value);
               }}
            />
         </div>
         <div className="flex w-1/6 mr-4">
            <select
               defaultValue="default"
               className="select select-bordered w-full"
               onChange={(e) => {
                  handleChain(e.target.value);
               }}
            >
               <option value="default" disabled>
                  Blockchain
               </option>
               <option value="1">Educhain</option>
               <option value="2">Sepolia</option>
            </select>
         </div>
         <div className="flex w-1/6">
            <select
               className="select select-bordered w-full"
               defaultValue="default"
               onChange={(e) => {
                  handleSort(e.target.value);
               }}
            >
               <option value="default" disabled>
                  Sort by
               </option>
               <option value="value">Value</option>
               <option value="totalAmount">Token Amount</option>
            </select>
         </div>
      </>
   );
}

export default FilterBar;
