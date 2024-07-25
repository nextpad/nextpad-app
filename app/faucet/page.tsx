import React from "react";
import InfoAlert from "./InfoAlert";
import Claim from "./Claim";

function page() {
   return (
      <div className="min-h-screen flex justify-center">
         <div className="flex w-3/4 px-10 mt-10 ">
            <div
               className="card bg-base-300 border w-full border-teal-800"
               style={{ maxHeight: "26rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b border-teal-900">
                     <h2 className="px-9 py-4 text-xl">Faucet Token</h2>
                  </div>
                  <div className="flex">
                     <div className="flex-1 pl-9 pr-4 py-5">
                        <Claim />
                     </div>
                     <div className="divider divider-horizontal"></div>
                     <div className="flex-1 pr-9 py-5 pl-4">
                        <h2 className="text-xl font-semibold mb-3">
                           Rules & Use Case
                        </h2>
                        <ul className="list-disc">
                           <li className="ml-4 mb-2">
                              Claim <b>100 $TOL</b> tokens each time.
                           </li>
                           <li className="ml-4 mb-2">
                              Claim once every 1 hours.
                           </li>
                           <li className="ml-4 mb-2">
                              Tokens are for testing only, no real value.
                           </li>
                           <li className="ml-4 mb-2">
                              Test accepting pending launchpads.
                           </li>
                           <li className="ml-4 mb-2">
                              Create new launchpad projects.
                           </li>
                           <li className="ml-4 mb-2">
                              Boost launchpad visibility.
                           </li>
                           <li className="ml-4 mb-2">
                              Participate in governance voting.
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default page;
