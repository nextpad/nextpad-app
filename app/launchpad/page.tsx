import React from "react";
import CardProject from "../components/CardProject";
import UpcomingLaunchpad from "../UpcomingLaunchpad";
import FilterBar from "./FilterBar";
import BrowseProject from "./BrowseProject";
import FundedProject from "./FundedProject";

function page() {
   return (
      <div className="min-h-screen">
         <h1 className="text-3xl font-bold mb-8">Launchpad</h1>

         <h2 className="text-2xl font-bold my-6">Upcoming Launchpad</h2>
         <div className="flex mb-10">
            <UpcomingLaunchpad />
         </div>

         <h2 className="text-2xl font-bold my-6">Browse Launchpad</h2>
         <div className="flex">
            <FilterBar />
         </div>
         <div className="flex flex-wrap mt-7 mb-10">
            <BrowseProject />
         </div>

         <FundedProject extend={true} />
      </div>
   );
}

export default page;
