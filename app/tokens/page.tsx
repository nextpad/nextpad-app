import React from "react";
import TokenTable from "./TokenTable";
import FilterBar from "./FilterBar";

function page({
   searchParams,
}: {
   searchParams?: { query?: string; chain?: string };
}) {
   return (
      <div className="min-h-screen">
         <h1 className="text-3xl font-bold">Tokens</h1>
         <div className="flex justify-between items-center mt-5">
            <FilterBar />
         </div>
         <div className="overflow-x-auto mt-6 border-2 border-base-300">
            <TokenTable
               query={searchParams?.query}
               chain={searchParams?.chain}
            />
         </div>
      </div>
   );
}

export default page;
