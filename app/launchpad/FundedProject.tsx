import Image from "next/image";
import React from "react";
import ChevronRightIcon from "../components/icons/ChevronRightIcon";
import Link from "next/link";

function FundedProject(props: any) {
   return (
      <>
         <h1 className="text-2xl font-bold">Funded Projects</h1>

         {props.extend ? (
            <div
               role="tablist"
               className="tabs tabs-boxed bg-base-300 p-0 max-w-sm mt-7"
            >
               <a role="tab" className="tab  bg-base-200 text-white">
                  All
               </a>
               <a role="tab" className="tab">
                  Educhain
               </a>
               <a role="tab" className="tab">
                  Sepolia
               </a>
            </div>
         ) : (
            <div className="flex justify-between mt-2">
               <div className="text-xl">Successfully projects is here</div>

               <div className="text-gray-600 text-base mt-1">
                  <Link href="/launchpad">
                     Explore More <ChevronRightIcon classList="size-4 inline" />
                  </Link>
               </div>
            </div>
         )}

         <div className="overflow-x-auto mt-4 border-2 border-base-300">
            <table className="table">
               {/* head */}
               <thead className="bg-base-100">
                  <tr className="text-base">
                     <th>Project Name</th>
                     {props.extend && <th>Type</th>}
                     <th>Participants</th>
                     <th>Total Raised</th>
                     {props.extend && (
                        <>
                           <th>Current Price</th>
                           <th>ATH</th>
                           <th>Ended at</th>
                           <th>Blockchain</th>
                        </>
                     )}
                  </tr>
               </thead>
               <tbody className="text-base bg-base-100">
                  {/* row 1 */}
                  <tr className="border-t-2 border-base-300">
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
                     {props.extend && (
                        <td className="py-4">
                           <span className="badge badge-outline badge-primary">
                              Token Sale
                           </span>
                        </td>
                     )}
                     <td className="py-4">4,120</td>
                     <td className="py-4 font-bold">$250,000</td>
                     {props.extend && (
                        <>
                           <td className="py-4">$0.002</td>
                           <td className="py-4">
                              <span className="bg-green-500 p-1 font-bold text-slate-100 rounded">
                                 +200%
                              </span>
                           </td>
                           <td className="py-4">Mar 13 2024</td>
                           <td className="py-4">
                              <Image
                                 src="/images/open-campus.svg"
                                 width={42}
                                 height={42}
                                 alt="logo"
                              />
                           </td>
                        </>
                     )}
                  </tr>
                  <tr className="border-t-2 border-base-300">
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
                     {props.extend && (
                        <td className="py-4">
                           <span className="badge badge-outline badge-ghost">
                              Private Sale
                           </span>
                        </td>
                     )}
                     <td className="py-4">4,120</td>
                     <td className="py-4 font-bold">$250,000</td>
                     {props.extend && (
                        <>
                           <td className="py-4">$0.002</td>
                           <td className="py-4">
                              <span className="bg-green-500 p-1 font-bold text-slate-100 rounded">
                                 +1200%
                              </span>
                           </td>
                           <td className="py-4">Mar 13 2024</td>
                           <td className="py-4">
                              <Image
                                 src="/images/eth.png"
                                 width={42}
                                 height={42}
                                 alt="logo"
                              />
                           </td>
                        </>
                     )}
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}

export default FundedProject;
