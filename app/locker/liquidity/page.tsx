import React from "react";
import LiqTable from "./LiqTable";
import FilterBar from "./FilterBar";
import LockClosedIcon from "@/app/components/icons/LockClosedIcon";
import Link from "next/link";

function page() {
   return (
      <div className="min-h-screen">
         <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-8">Liquidity Lockers</h1>
            <button className="btn block btn-normal text-lg">
               <Link href="/locker/liquidity/create">
                  <LockClosedIcon classList="size-5 mb-1 inline mr-2" /> Lock
                  Liquidity
               </Link>
            </button>
         </div>
         <div className="flex-1 max-w-xs">
            <div
               role="tablist"
               className="tabs tabs-boxed border p-0 bg-base-300"
            >
               <a href="/locker/token" role="tab" className="tab">
                  Lock Token
               </a>
               <a role="tab" className="tab bg-base-200 text-white">
                  Lock Liquidity
               </a>
            </div>
         </div>
         <div className="flex mt-5">
            <FilterBar />
         </div>
         <LiqTable />
      </div>
   );
}

export default page;
