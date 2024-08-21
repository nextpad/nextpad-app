import React from "react";
import CardProject from "../components/CardProject";
import { Launchpad, Prisma, PrismaClient } from "@prisma/client";

async function BrowseProject(params: {
   query?: string;
   status?: string;
   short?: string;
   chain?: string;
   page?: number;
   limit?: number;
}) {
   const prisma = new PrismaClient();

   let launchpads: Launchpad[];

   if (params.query || params.status || params.short || params.chain) {
      const { query, status, short, chain, page = 1, limit = 12 } = params;
      const offset = (page - 1) * limit;

      let whereClause = "";
      let ordered = `ORDER BY "id" DESC`;
      const conditions = [];

      if (query) {
         conditions.push(
            `to_tsvector('english', "projectName" || ' ' || "poolAddress") @@ to_tsquery('english', '${query}')`
         );
      }

      if (short) {
         ordered = `ORDER BY "${short}" DESC`;
      }

      if (status) {
         conditions.push(`"status" = ${status}`);
      }

      if (chain) {
         conditions.push(`"blockchain" = ${chain}`);
      }

      if (conditions.length > 0) {
         whereClause = "WHERE " + conditions.join(" AND ");
      }

      launchpads = await prisma.$queryRaw`
         ${Prisma.raw(`SELECT * FROM public."Launchpad"
         ${whereClause}
         ${ordered}
         LIMIT ${limit} OFFSET ${offset}`)}
      `;
   } else {
      launchpads = await prisma.launchpad.findMany({
         take: 12,
         orderBy: { id: "desc" },
      });
   }

   return (
      <>
         {launchpads.map((val, i) => (
            <div
               key={i}
               className={`${i > 0 ? "ml-7" : ""} flex-1`}
               style={{ maxWidth: "33.333%" }}
            >
               <CardProject
                  address={val.poolAddress}
                  projectName={val.projectName}
                  logo={val.logo}
                  banner={val.banner}
                  intros={val.description}
                  initPrice={val.price}
                  maxAlloc={val.allocation}
                  goals={val.goals}
                  timeLeft="-"
                  status={1}
               />
            </div>
         ))}
      </>
   );
}

export default BrowseProject;
