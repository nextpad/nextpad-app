import Image from "next/image";
import React from "react";

function LatestToken() {
   return (
      <>
         <h1 className="text-2xl font-bold">Latest Token</h1>
         <div className="overflow-x-auto mt-6 border border-teal-800">
            <table className="table">
               {/* head */}
               <thead className="bg-base-200">
                  <tr className="text-base">
                     <th>Token</th>
                     <th>Total Supply</th>
                     <th>Created At</th>
                  </tr>
               </thead>
               <tbody className="text-base bg-base-300">
                  {/* row 1 */}
                  <tr className="border-t-2 border-base-100">
                     <td className="py-4">
                        <div className="flex items-center gap-3">
                           <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                 <Image
                                    width={64}
                                    height={64}
                                    src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fgreen_fa98ca7406%2Fgreen_fa98ca7406.png&w=96&q=70"
                                    alt="Logo"
                                 />
                              </div>
                           </div>
                           <div>
                              <div className="font-bold">Cookie</div>
                              <div className="text-sm opacity-50">$COOKIE</div>
                           </div>
                        </div>
                     </td>
                     <td className="py-4">10,000,000,000</td>
                     <td className="py-4">5 minutes ago</td>
                  </tr>
                  <tr className="border-t-2 border-base-100">
                     <td className="py-4">
                        <div className="flex items-center gap-3">
                           <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                 <Image
                                    width={64}
                                    height={64}
                                    src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fgreen_fa98ca7406%2Fgreen_fa98ca7406.png&w=96&q=70"
                                    alt="Logo"
                                 />
                              </div>
                           </div>
                           <div>
                              <div className="font-bold">Cookie</div>
                              <div className="text-sm opacity-50">$COOKIE</div>
                           </div>
                        </div>
                     </td>
                     <td className="py-4">10,000,000,000</td>
                     <td className="py-4">5 minutes ago</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}

export default LatestToken;
