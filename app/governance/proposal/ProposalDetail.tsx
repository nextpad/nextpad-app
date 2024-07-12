import React from "react";

function ProposalDetail() {
   return (
      <>
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ maxHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Details</h2>
               </div>
               <div className="flex flex-col justify-between px-9 mt-2">
                  <div className="flex mb-3">
                     <div className="w-1/3">Creator</div>
                     <div className="w-2/3 text-teal-600">0x00000000</div>
                  </div>
                  <div className="flex mb-3">
                     <div className="w-1/3">Identifier</div>
                     <div className="w-2/3 text-teal-600">0x00000000</div>
                  </div>
                  <div className="flex mb-6">
                     <div className="w-1/3">Snapshot</div>
                     <div className="w-2/3 text-teal-600">123456</div>
                  </div>
                  <div className="card bg-base-100 mb-7">
                     <div className="card-body p-5">
                        <div className="flex justify-between flex-col">
                           <div className="flex">
                              <div>Start date</div>
                              <div className="text-white ml-3">01-01-2024</div>
                           </div>
                           <div className="flex mt-3">
                              <div>Start date</div>
                              <div className="text-white ml-3">01-03-2024</div>
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
