import ChevronLeftIcon from "@/app/components/icons/ChevronLeftIcon";
import Link from "next/link";
import React from "react";
import ProposalForm from "./ProposalForm";
import ProposalDetail from "./ProposalDetail";

function page() {
   return (
      <div className="min-h-screen">
         <Link href="/governance" className="text-xl">
            <ChevronLeftIcon classList="size-5 inline" /> Back to Governance
         </Link>

         <div className="flex mt-7">
            <div className="flex flex-col w-2/3">
               <ProposalForm />
            </div>
            <div className="flex w-1/3">
               <ProposalDetail />
            </div>
         </div>
      </div>
   );
}

export default page;
