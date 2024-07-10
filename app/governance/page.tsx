import React from "react";
import PlusIcon from "../components/icons/PlusIcon";
import ListTab from "./ListTab";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import ProposalCard from "./ProposalCard";

function page() {
   return (
      <div className="min-h-screen">
         <div className="flex justify-between">
            <div className="flex-1">
               <h1 className="text-3xl font-bold">Governance Proposals</h1>
               <p className="text-xl mt-3">
                  Users can join to vote for particular proposals created by the
                  project developers or directly create their own proposals for
                  the ecosystem's improvement
               </p>
            </div>
            <div className="flex-1"></div>
         </div>
         <div className="mt-8">
            <h2 className="text-2xl font-bold">Proposal List</h2>
            <div className="flex justify-between mt-4">
               <div className="flex-1 max-w-xs">
                  <div role="tablist" className="tabs tabs-bordered">
                     <a role="tab" className="tab tab-active">
                        Developer
                     </a>
                     <a role="tab" className="tab">
                        Community
                     </a>
                  </div>
               </div>
               <div className="flex-1">
                  <a href="" className="btn float-end bg-teal-600 text-white">
                     <PlusIcon classList="size-5" /> Add Proposal
                  </a>
               </div>
            </div>
         </div>
         <div className="mt-6">
            <ListTab />
            <div className="mt-5">
               <ProposalCard />
               <ProposalCard />
            </div>
         </div>
      </div>
   );
}

export default page;
