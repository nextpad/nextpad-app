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

   function handleStatus(status: string) {
      if (status) {
         params.set("status", status);
      }

      if (status == "0") {
         params.delete("status");
      }

      replace(`${pathname}?${params.toString()}`);
   }

   function handleShort(term: string) {
      if (term) {
         params.set("short", term);
      } else {
         params.delete("short");
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
         <div className="flex w-2/6 mr-6">
            <input
               type="text"
               placeholder="Type project name, pool address to search"
               className="input input-bordered w-full"
               onChange={(e) => {
                  handleSearch(e.target.value);
               }}
            />
         </div>
         <div className="flex w-1/6 mr-6">
            <select
               defaultValue="default"
               className="select select-bordered w-full max-w-xs"
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
         <div className="flex w-1/6 mr-6">
            <select
               className="select select-bordered w-full max-w-xs"
               defaultValue="default"
               onChange={(e) => {
                  handleStatus(e.target.value);
               }}
            >
               <option disabled value="default">
                  Status
               </option>
               <option value={0}>All</option>
               <option value={2}>Active</option>
               <option value={1}>Pending</option>
               <option value={3}>Canceled</option>
               <option value={4}>Failed</option>
               <option value={5}>Ended</option>
            </select>
         </div>
         <div className="flex w-1/6 mr-6">
            <select
               className="select select-bordered w-full max-w-xs"
               defaultValue="default"
               onChange={(e) => {
                  handleShort(e.target.value);
               }}
            >
               <option disabled value="default">
                  Short
               </option>
               <option value="">Default</option>
               <option value="start">Start time</option>
               <option value="end">End time</option>
               <option value="goals">Fundraised goals</option>
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
