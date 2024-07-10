import Image from "next/image";
import React from "react";
import ChevronRightIcon from "../components/icons/ChevronRightIcon";

function FundedProject() {
   return (
      <>
         <h1 className="text-2xl font-bold">Funded Projects</h1>

         <div className="flex justify-between mt-2">
            <div className="text-xl">Successfully projects is here</div>

            <div className="text-teal-600 text-base mt-1">
               <a href="#">
                  Explore More <ChevronRightIcon classList="size-4 inline" />
               </a>
            </div>
         </div>
         <div className="overflow-x-auto mt-6 border border-teal-800">
            <table className="table">
               {/* head */}
               <thead className="bg-base-200">
                  <tr className="text-base">
                     <th>Project Name</th>
                     <th>Participants</th>
                     <th>Total Raised</th>
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
                     <td className="py-4">4,120</td>
                     <td className="py-4">$250,000</td>
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
                     <td className="py-4">4,120</td>
                     <td className="py-4">$250,000</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}

export default FundedProject;
