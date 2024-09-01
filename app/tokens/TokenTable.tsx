import React from "react";
import Image from "next/image";
import GlobeIcon from "../components/icons/GlobeIcon";
import XIcon from "../components/icons/XIcon";
import TelegramIcon from "../components/icons/TelegramIcon";
import DuplicateIcon from "../components/icons/DuplicateIcon";
import QrCodeIcon from "../components/icons/QrCodeIcon";
import { Prisma, PrismaClient, Token } from "@prisma/client";
import moment from "moment";
import CopyAddress from "./CopyAddress";
import QrAddressModal from "./QrAddressModal";

async function TokenTable(params: {
   query?: string;
   chain?: string;
   page?: number;
   limit?: number;
}) {
   const prisma = new PrismaClient();
   let tokens: Token[];

   const { query, chain, page = 1, limit = 12 } = params;
   const offset = (page - 1) * limit;

   if (query && chain) {
      tokens = await prisma.$queryRaw`
         ${Prisma.raw(`SELECT * FROM public."Token"
         WHERE to_tsvector('english', "name" || ' ' || "symbol" || ' ' || "address") @@ to_tsquery('english', '${query}')
         ${chain ? "AND blockchain = " + chain : ""}
         ORDER BY "id" DESC
         LIMIT ${limit} OFFSET ${offset}`)}
      `;
   } else if (query) {
      tokens = await prisma.$queryRaw`
         ${Prisma.raw(`SELECT * FROM public."Token"
         WHERE to_tsvector('english', "name" || ' ' || "symbol" || ' ' || "address") @@ to_tsquery('english', '${query}')
         ORDER BY "id" DESC
         LIMIT ${limit} OFFSET ${offset}`)}
      `;
   } else if (chain) {
      tokens = await prisma.token.findMany({
         where: {
            blockchain: parseInt(chain),
         },
         take: 12,
         orderBy: { createdAt: "desc" },
      });
   } else {
      tokens = await prisma.token.findMany({
         take: 12,
         orderBy: { createdAt: "desc" },
      });
   }

   return (
      <>
         <table className="table">
            {/* head */}
            <thead className="bg-base-100">
               <tr className="text-base">
                  <th>Token</th>
                  <th>Total Supply</th>
                  <th>Contract Address</th>
                  <th>Blockchain</th>
                  <th>Social Links</th>
                  <th>Created At</th>
               </tr>
            </thead>
            <tbody className="text-base bg-base-100">
               {tokens.map((val, i) => (
                  <tr key={i} className="border-t-2 border-base-300">
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
                        <a
                           href={`https://scan.test.btcs.network/token/${val.address}`}
                           className="text-primary"
                           target="_blank"
                        >
                           {val.address}
                        </a>
                        <CopyAddress address={val.address} />
                        <QrAddressModal
                           address={val.address}
                           decimals={val.decimals}
                           symbol={val.symbol}
                           logo={val.logo}
                        />
                     </td>
                     <td className="py-4">
                        <Image
                           src="/images/open-campus.svg"
                           alt="token logo"
                           width={32}
                           height={32}
                        />
                     </td>
                     <td className="py-4">
                        {val.web && (
                           <a
                              href={val.web}
                              className="hover:text-purple-600"
                              target="_blank"
                           >
                              <GlobeIcon classList="size-6 inline mr-3" />
                           </a>
                        )}
                        {val.twitter && (
                           <a
                              href={val.twitter}
                              className="hover:text-purple-600"
                              target="_blank"
                           >
                              <XIcon classList="size-5 inline mr-3" />
                           </a>
                        )}
                        {val.telegram && (
                           <a
                              href={val.telegram}
                              className="hover:text-purple-600"
                              target="_blank"
                           >
                              <TelegramIcon classList="size-5 inline" />
                           </a>
                        )}
                     </td>
                     <td className="py-4">{moment(val.createdAt).fromNow()}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
}

export default TokenTable;
