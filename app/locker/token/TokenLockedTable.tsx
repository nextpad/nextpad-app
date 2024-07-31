import { PrismaClient, TokenLocked } from "@prisma/client";
import Image from "next/image";
import React, { cache } from "react";

const getLockedToken = async (): Promise<TokenLocked[]> => {
   const prisma = new PrismaClient();
   const tokens = await prisma.tokenLocked.findMany({
      take: 10,
      orderBy: { id: "desc" },
   });

   return tokens;
};

async function TokenLockedTable() {
   const tokens: TokenLocked[] = await getLockedToken();
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
                  {tokens.map((val, i) => (
                     <tr key={i} className="border-t-2 border-base-100">
                        <td className="py-5">
                           <div className="flex items-center">
                              <div className="h-10 inline w-10">
                                 <Image
                                    width={40}
                                    height={40}
                                    src={val.logo}
                                    alt="Logo"
                                    className="rounded-full"
                                 />
                              </div>
                              <div className="ml-3 text-xl text-slate-300">
                                 {val.name}
                              </div>
                           </div>
                        </td>
                        <td className="py-5">
                           {parseInt(val.totalAmount).toLocaleString()}
                        </td>
                        <td className="py-5">
                           <span className="text-teal-600">$0</span>
                        </td>
                        <td className="py-4">
                           <Image
                              width={40}
                              height={40}
                              src={
                                 val.blockchain == 1
                                    ? "/images/core-dao.png"
                                    : "/images/eth.png"
                              }
                              alt="Logo"
                              className="rounded-full"
                           />
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
}

export default TokenLockedTable;
