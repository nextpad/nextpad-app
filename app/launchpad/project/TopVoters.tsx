import React from "react";

function TopVoters() {
   return (
      <div className="mt-7">
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ minHeight: "29rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Top Voters</h2>
               </div>
               <div className="px-9">
                  <table className="table table-zebra">
                     <thead>
                        <tr className="text-lg">
                           <th>Address</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>1. 0x0000000..</td>
                           <td>1000</td>
                        </tr>
                        <tr>
                           <td>2. 0x0000000..</td>
                           <td>500</td>
                        </tr>
                        <tr>
                           <td>3. 0x0000000..</td>
                           <td>400</td>
                        </tr>
                        <tr>
                           <td>4. 0x0000000..</td>
                           <td>400</td>
                        </tr>
                        <tr>
                           <td>5. 0x0000000..</td>
                           <td>400</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TopVoters;
