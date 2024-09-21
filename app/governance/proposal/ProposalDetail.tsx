import React from "react";

function ProposalDetail() {
   return (
      <>
         <div
            className="card bg-base-100 border-2 w-full border-base-300"
            style={{ maxHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b-2 border-base-300">
                  <h2 className="px-9 py-4 text-xl">Details</h2>
               </div>
               <div className="flex flex-col justify-between px-9 mt-2">
                  <div className="flex mb-3">
                     <div className="w-1/3">Creator</div>
                     <div className="w-2/3 text-gray-600">0x00000000</div>
                  </div>
                  <div className="flex mb-3">
                     <div className="w-1/3">Identifier</div>
                     <div className="w-2/3 text-gray-600">0x00000000</div>
                  </div>
                  <div className="flex mb-6">
                     <div className="w-1/3">Snapshot</div>
                     <div className="w-2/3 text-gray-600">123456</div>
                  </div>
                  <div className="card bg-base-200 mb-7 border border-base-300">
                     <div className="card-body p-5">
                        <div className="flex justify-between flex-col">
                           <div className="flex justify-between">
                              <div>Start date</div>
                              <div className="ml-3 font-semibold">
                                 01-01-2024
                              </div>
                           </div>
                           <div className="flex mt-3 justify-between">
                              <div>Start date</div>
                              <div className="ml-3 font-semibold">
                                 01-03-2024
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ProposalDetail;
