import Image from "next/image";
import React from "react";

function TokenLockedTable() {
   return (
      <>
         <div className="overflow-x-auto mt-6 border border-teal-800">
            <table className="table">
               {/* head */}
               <thead className="bg-base-200">
                  <tr className="text-base">
                     <th>Token</th>
                     <th>Total Amount</th>
                     <th>Value</th>
                     <th>Blockchain</th>
                  </tr>
               </thead>
               <tbody className="text-base bg-base-300">
                  {/* row 1 */}
                  <tr className="border-t-2 border-base-100">
                     <td className="py-5">
                        <div className="flex items-center">
                           <div className="h-10 inline w-10">
                              <Image
                                 width={40}
                                 height={40}
                                 src="/images/eth.png"
                                 alt="Logo"
                                 className="rounded-full"
                              />
                           </div>
                           <div className="ml-3 text-xl text-slate-300">
                              Ethereum
                           </div>
                        </div>
                     </td>
                     <td className="py-5">10,000,000</td>
                     <td className="py-5">
                        <span className="text-teal-600">$900,000,000</span>
                     </td>
                     <td className="py-4">
                        <Image
                           width={40}
                           height={40}
                           src="/images/eth.png"
                           alt="Logo"
                           className="rounded-full"
                        />
                     </td>
                  </tr>
                  <tr className="border-t-2 border-base-100">
                     <td className="py-5">
                        <div className="flex items-center">
                           <div className="h-10 inline w-10">
                              <Image
                                 width={64}
                                 height={64}
                                 src="/images/ex1.png"
                                 alt="Logo"
                                 className="rounded-full"
                              />
                           </div>
                           <div className="ml-3 text-xl text-slate-300">
                              EXP
                           </div>
                        </div>
                     </td>
                     <td className="py-5">200,000,000</td>
                     <td className="py-5">
                        <span className="text-teal-600">$120,000</span>
                     </td>
                     <td className="py-4">
                        <Image
                           width={40}
                           height={40}
                           src="/images/core-dao.png"
                           alt="Logo"
                           className="rounded-full"
                        />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}

export default TokenLockedTable;
