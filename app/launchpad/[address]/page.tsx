import React from "react";
import Carousel from "./Carousel";
import ContributionCard from "./ContributionCard";
import HeaderProject from "./HeaderProject";
import DetailedProject from "./DetailedProject";
import PoolCard from "./PoolCard";
import TopParticipants from "./TopVoters";

function page() {
   return (
      <div className="min-h-screen">
         <HeaderProject />
         <div className="flex flex-grow">
            <div className="flex w-3/5 flex-col mr-12">
               <Carousel />

               <DetailedProject />
            </div>
            <div className="flex flex-col w-2/5">
               <ContributionCard />
               <PoolCard />
               <TopParticipants />
            </div>
         </div>
      </div>
   );
}

export default page;
