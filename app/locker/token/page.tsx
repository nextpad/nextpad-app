import React from "react";
import TokenLockedTable from "./TokenLockedTable";
import FilterBar from "./FilterBar";
import LockClosedIcon from "@/app/components/icons/LockClosedIcon";
import Link from "next/link";

function page() {
   return (
      <div className="min-h-screen">
         <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-8">Token Locker</h1>
            <Link href="/locker/token/create">
               <button className="btn block btn-normal text-lg">
                  <LockClosedIcon classList="size-5 mb-1 inline mr-2" /> Lock
                  Token
               </button>
            </Link>
         </div>
         <div className="flex-1 max-w-xs">
            <div
               role="tablist"
               className="tabs tabs-boxed border border-teal-800 p-0"
            >
               <a role="tab" className="tab bg-teal-600 text-white">
                  Lock Token
               </a>
               <a href="/locker/liquidity" role="tab" className="tab">
                  Lock Liquidity
               </a>
            </div>
         </div>
         <div className="flex mt-6">
            <FilterBar />
         </div>
         <TokenLockedTable />
      </div>
   );
}

export default page;
