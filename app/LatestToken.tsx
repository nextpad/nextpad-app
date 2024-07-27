import Image from "next/image";
import React from "react";
import ChevronRightIcon from "./components/icons/ChevronRightIcon";
import { PrismaClient } from "@prisma/client";
import moment from "moment";

async function LatestToken() {
   const prisma = new PrismaClient();
   const tokens = await prisma.token.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
   });

   return (
      <>
         <h1 className="text-2xl font-bold">Latest Token</h1>
         <div className="flex justify-between mt-2">
            <div className="text-xl">List of all created token here</div>

            <div className="text-teal-600 text-base mt-1">
               <a href="/tokens">
                  Explore More <ChevronRightIcon classList="size-4 inline" />
               </a>
            </div>
         </div>
         <div className="overflow-x-auto mt-4 border border-teal-800">
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
                  {tokens.map((val, i) => (
                     <tr key={i} className="border-t-2 border-base-100">
                        <td className="py-4">
                           <div className="flex items-center gap-3">
                              <div
                                 className="avatar tooltip tooltip-right"
                                 data-tip="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro."
                              >
                                 <div className="mask mask-squircle h-12 w-12">
                                    <Image
                                       width={64}
                                       height={64}
                                       src={val.logo}
                                       alt="Logo"
                                    />
                                 </div>
                              </div>
                              <div>
                                 <div
                                    className="tooltip tooltip-right"
                                    data-tip={val.description}
                                 >
                                    <span className="font-bold">
                                       {val.name.slice(0, 20)}
                                       {val.name.length >= 20 && ".."}
                                    </span>
                                 </div>
                                 <div className="text-sm opacity-50">
                                    ${val.symbol}
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td className="py-4">
                           {parseInt(val.supply).toLocaleString()}
                        </td>
                        <td className="py-4">
                           {moment(val.createdAt).fromNow()}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
}

export default LatestToken;
