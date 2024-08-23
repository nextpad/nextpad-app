import React from "react";

function Votes() {
   return (
      <>
         <div
            className="card bg-base-100 border-2 w-full border-base-300 my-5"
            style={{ maxHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b-2 border-base-300">
                  <h2 className="px-9 py-4 text-xl">Votes (120)</h2>
               </div>
               <div className="px-9 py-3">
                  <table className="table table-bordered">
                     <tr className="border-b-2 border-base-300">
                        <td>
                           <a href="#" className="text-teal-600">
                              0xd92a39156e23cD5E68522D62fF9eB137467AE1BE
                           </a>
                        </td>
                        <td className="font-bold">Yes</td>
                        <td className="text-center">5 Minutes ago</td>
                     </tr>
                     <tr className="border-b-2 border-base-300">
                        <td>
                           <a href="#" className="text-teal-600">
                              0xd92a39156e23cD5E68522D62fF9eB137467AE1BE
                           </a>
                        </td>
                        <td className="font-bold">Yes</td>
                        <td className="text-center">5 Minutes ago</td>
                     </tr>
                     <tr className="border-base-300">
                        <td>
                           <a href="#" className="text-secondary">
                              0x661987F2eF1E8A43f36f0D6acd653aaf2770bF2b
                           </a>
                        </td>
                        <td className="font-bold">No</td>
                        <td className="text-center">5 Minutes ago</td>
                     </tr>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
}

export default Votes;
