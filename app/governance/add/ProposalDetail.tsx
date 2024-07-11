import React from "react";

function ProposalDetail() {
   return (
      <>
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ maxHeight: "32rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Details</h2>
               </div>
               <div className="flex flex-row px-9 mt-5">
                  <div className="flex flex-col mr-6">
                     <label className="font-semibold block">Start date</label>
                     <input
                        type="date"
                        className="input input-bordered w-full block my-4 bg-base-300"
                     />
                  </div>
                  <div className="flex flex-col">
                     <label className="font-semibold block">Start time</label>
                     <input
                        type="time"
                        style={{ minWidth: "10rem" }}
                        className="input input-bordered w-full block my-4 bg-base-300"
                     />
                  </div>
               </div>

               <div className="flex flex-row px-9">
                  <div className="flex flex-col mr-6">
                     <label className="font-semibold block">End date</label>
                     <input
                        type="date"
                        className="input input-bordered w-full block my-4 bg-base-300"
                     />
                  </div>
                  <div className="flex flex-col">
                     <label className="font-semibold block">End time</label>
                     <input
                        type="time"
                        style={{ minWidth: "10rem" }}
                        className="input input-bordered block my-4 bg-base-300"
                     />
                  </div>
               </div>

               <div className="px-9">
                  <label className="font-semibold block mb-3">Snapshot</label>
                  <div className="card bg-base-100">
                     <div className="card-body p-3">
                        <a href="" className="text-teal-600">
                           1313123
                        </a>
                     </div>
                  </div>
               </div>

               <button className="btn btn-normal mt-5 mx-9">Publish</button>
            </div>
         </div>
      </>
   );
}

export default ProposalDetail;
