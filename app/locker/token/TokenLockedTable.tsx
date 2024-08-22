import { Launchpad, Prisma, PrismaClient, TokenLocked } from "@prisma/client";
import Image from "next/image";
import React, { cache } from "react";

async function TokenLockedTable(params: {
   query?: string;
   sort?: string;
   chain?: string;
   page?: number;
   limit?: number;
}) {
   const prisma = new PrismaClient();

   let tokens: TokenLocked[];

   if (params.query || params.sort || params.chain) {
      const { query, sort, chain, page = 1, limit = 12 } = params;
      const offset = (page - 1) * limit;

      let whereClause = "";
      let ordered = `ORDER BY "id" DESC`;
      const conditions = [];

      if (query) {
         conditions.push(
            `to_tsvector('english', "address" || ' ' || "name" || ' ' || "symbol") @@ to_tsquery('english', '${query}')`
         );
      }

      if (sort) {
         ordered = `ORDER BY "${sort}" DESC`;
      }

      if (chain) {
         conditions.push(`"blockchain" = ${chain}`);
      }

      if (conditions.length > 0) {
         whereClause = "WHERE " + conditions.join(" AND ");
      }

      tokens = await prisma.$queryRaw`
         ${Prisma.raw(`SELECT * FROM public."TokenLocked"
         ${whereClause}
         ${ordered}
         LIMIT ${limit} OFFSET ${offset}`)}
      `;
   } else {
      tokens = await prisma.tokenLocked.findMany({
         take: 12,
         orderBy: { id: "desc" },
      });
   }

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
                                 <a href={`/locker/token/${val.address}`}>
                                    {val.name}
                                 </a>
                              </div>
                           </div>
                        </td>
                        <td className="py-5">
                           {parseInt(val.totalAmount).toLocaleString()}{" "}
                           {val.symbol}
                        </td>
                        <td className="py-5">
                           <span className="text-teal-600">$0</span>
                        </td>
                        <td className="py-4">
                           <Image
                              width={29}
                              height={29}
                              src={
                                 val.blockchain == 1
                                    ? "/images/core-dao.png"
                                    : "/images/eth.png"
                              }
                              alt="Logo"
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
