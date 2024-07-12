import React from "react";
import ProgressResult from "./ProgressResult";

function ProposalResult() {
   return (
      <div className="flex mt-6">
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ maxHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Current Result</h2>
               </div>
               <div className="px-9 mt-2">
                  <ProgressResult option="Yes" value={92.2} vote="960" />
                  <ProgressResult option="No" value={7.8} vote="40" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProposalResult;
