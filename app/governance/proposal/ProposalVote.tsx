import React from "react";

function ProposalVote() {
   return (
      <>
         <div
            className="card bg-base-300 border w-full border-teal-800 my-5"
            style={{ maxHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Sent your vote</h2>
               </div>
               <div className="px-9 py-3">
                  <div className="card border border-gray-700 mb-4">
                     <div className="card-body p-5">
                        <div className="flex items-center">
                           <input
                              type="radio"
                              name="radio-4"
                              className="radio radio-accent radio-sm block"
                              defaultChecked
                           />
                           <div className="ml-4 font-bold">Yes</div>
                        </div>
                     </div>
                  </div>
                  <div className="card border border-gray-700 mb-4">
                     <div className="card-body p-5">
                        <div className="flex items-center">
                           <input
                              type="radio"
                              name="radio-4"
                              className="radio radio-accent radio-sm block"
                           />
                           <div className="ml-4 font-bold">No</div>
                        </div>
                     </div>
                  </div>
                  <button className="btn btn-normal mb-3">Voting</button>
               </div>
            </div>
         </div>
      </>
   );
}

export default ProposalVote;
