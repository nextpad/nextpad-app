import Image from "next/image";
import React from "react";

function LiqTable() {
   return (
      <>
         <div className="overflow-x-auto mt-6 border-2 border-base-300">
            <table className="table">
               {/* head */}
               <thead className="bg-base-100">
                  <tr className="text-base">
                     <th>Pair</th>
                     <th>Total Liquidity</th>
                     <th>Value</th>
                     <th>Unlocked in</th>
                     <th>Exchange</th>
                  </tr>
               </thead>
               <tbody className="text-base bg-base-100">
                  {/* row 1 */}
                  <tr className="border-t-2 border-base-300">
                     <td className="py-5">
                        <div className="flex items-center">
                           <div className="h-10 w-10 inline -mr-2 z-10">
                              <Image
                                 width={64}
                                 height={64}
                                 src="https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fgreen_fa98ca7406%2Fgreen_fa98ca7406.png&w=96&q=70"
                                 alt="Logo"
                                 className="rounded-full"
                              />
                           </div>
                           <div className="h-10 inline w-10">
                              <Image
                                 width={64}
                                 height={64}
                                 src="/images/eth.png"
                                 alt="Logo"
                                 className="rounded-full"
                              />
                           </div>
                           <div className="ml-3 text-xl">COOKIE / ETH</div>
                        </div>
                     </td>
                     <td className="py-5">200M / 2000</td>
                     <td className="py-5">
                        <span className="text-teal-600">$9,000,000</span>
                     </td>
                     <td>12 years</td>
                     <td className="py-4">
                        <Image
                           width={48}
                           height={48}
                           src="/images/uni.png"
                           alt="Logo"
                           className="rounded-full"
                        />
                     </td>
                  </tr>
                  <tr className="border-t-2 border-base-300">
                     <td className="py-5">
                        <div className="flex items-center">
                           <div className="h-10 w-10 inline -mr-2 z-10">
                              <Image
                                 width={64}
                                 height={64}
                                 src="/images/core-dao.png"
                                 alt="Logo"
                                 className="rounded-full"
                              />
                           </div>
                           <div className="h-10 inline w-10">
                              <Image
                                 width={64}
                                 height={64}
                                 src="/images/eth.png"
                                 alt="Logo"
                                 className="rounded-full"
                              />
                           </div>
                           <div className="ml-3 text-xl">CORE / ETH</div>
                        </div>
                     </td>
                     <td className="py-5">200M / 2000</td>
                     <td className="py-5">
                        <span className="text-teal-600">$120,000</span>
                     </td>
                     <td>9 months</td>
                     <td className="py-4">
                        <Image
                           width={48}
                           height={48}
                           src="/images/uni.png"
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

export default LiqTable;
