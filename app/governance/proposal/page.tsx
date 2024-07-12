import ChevronLeftIcon from "@/app/components/icons/ChevronLeftIcon";
import Link from "next/link";
import React from "react";
import ProposalDetail from "./ProposalDetail";
import ProposalContent from "./ProposalContent";
import ProposalResult from "./ProposalResult";
import ProposalVote from "./ProposalVote";
import Votes from "./Votes";

function page() {
   return (
      <div className="min-h-screen">
         <Link href="/governance" className="text-xl">
            <ChevronLeftIcon classList="size-5 inline" /> Back to Governance
         </Link>
         <div className="flex mt-8 flex-row">
            <div className="flex flex-col w-2/3 mr-8">
               <ProposalContent />
               <ProposalVote />
               <Votes />
            </div>
            <div className="flex flex-col w-1/3">
               <ProposalDetail />
               <ProposalResult />
            </div>
         </div>
      </div>
   );
}

export default page;
