"use client";
import React from "react";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import Link from "next/link";
import CheckBadgeIcon from "../components/icons/CheckBadgeIcon";

function ProposalCard() {
   return (
      <>
         <div className="card border-2 shadow-sm border-base-300 bg-base-100 mb-4 cursor-pointer hover:bg-base-300">
            <div className="card-body">
               <Link href="/governance/proposal">
                  <div className="flex justify-between mb-1">
                     <div className="flex flex-col">
                        <h3 className="text-2xl font-bold block">
                           Launch Airdrop
                        </h3>
                        <div className="flex justify-between">
                           {/* <div className="flex mr-10">
                                 <div className="text-lg block mt-2">
                                    Agree - 99%
                                 </div>
                              </div> */}
                           <div className="flex">
                              <div className="text-lg block mt-2">
                                 Ended at 01 Jan 2024
                              </div>
                           </div>
                        </div>
                        <div className="flex mt-3">
                           <div className="badge badge-outline badge-success p-3 mr-3">
                              Active
                           </div>
                           <div className="badge badge-outline badge-primary p-3">
                              <CheckBadgeIcon classList="size-4 mr-1" /> Core
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <ArrowRightIcon classList="size-8" />
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}

export default ProposalCard;
