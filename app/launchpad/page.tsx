import React from "react";
import CardProject from "../components/CardProject";
import UpcomingLaunchpad from "../UpcomingLaunchpad";
import FilterBar from "./FilterBar";
import BrowseProject from "./BrowseProject";
import FundedProject from "./FundedProject";
import PlusIcon from "../components/icons/PlusIcon";
import Link from "next/link";

function page() {
   return (
      <div className="min-h-screen">
         <h1 className="text-3xl font-bold mb-6">Launchpad</h1>

         <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold mt-3">Upcoming Launchpad</h2>
            <Link href="/launchpad/create">
               <button className="btn btn-normal">
                  <PlusIcon classList="size-5" /> Create Launchpad
               </button>
            </Link>
         </div>
         <div className="flex mb-10">
            <UpcomingLaunchpad />
         </div>

         <h2 className="text-2xl font-bold my-6">Browse Launchpad</h2>
         <div className="flex">
            <FilterBar />
         </div>
         <div className="flex mt-7 mb-10">
            <BrowseProject />
         </div>

         <FundedProject extend={true} />
      </div>
   );
}

export default page;
