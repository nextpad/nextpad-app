"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function FilterBar() {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();
   const params = new URLSearchParams(searchParams);

   const [chain, setChain] = useState(0);

   function handleChain(code: number) {
      if (code) {
         params.set("chain", code.toString());
      } else {
         params.delete("chain");
      }

      setChain(code);
      replace(`${pathname}?${params.toString()}`);
   }

   function handleSearch(term: string) {
      if (term) {
         params.set("query", term);
      } else {
         params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
   }

   return (
      <>
         <div className="flex-1 max-w-xs">
            <div role="tablist" className="tabs tabs-boxed p-0 bg-base-300">
               <a
                  role="tab"
                  className={`tab ${chain == 0 ? "bg-primary text-white" : ""}`}
                  onClick={() => {
                     handleChain(0);
                  }}
               >
                  All
               </a>
               <a
                  role="tab"
                  className={`tab ${chain == 1 ? "bg-primary text-white" : ""}`}
                  onClick={() => {
                     handleChain(1);
                  }}
               >
                  Educhain
               </a>
               <a
                  role="tab"
                  className={`tab ${chain == 2 ? "bg-primary text-white" : ""}`}
                  onClick={() => {
                     handleChain(2);
                  }}
               >
                  Sepolia
               </a>
            </div>
         </div>
         <div className="flex-1 max-w-2xl">
            <input
               type="text"
               placeholder="Search by token name, contract address or symbol"
               className="input input-bordered w-full"
               onChange={(e) => {
                  handleSearch(e.target.value);
               }}
            />
         </div>
      </>
   );
}

export default FilterBar;
