"use server";
import React from "react";
import CardProject from "./components/CardProject";
import { Launchpad, PrismaClient } from "@prisma/client";

async function UpcomingLaunchpad({ query }: { query?: string }) {
   const prisma = new PrismaClient();

   let launchpads: Launchpad[];

   if (query) {
      launchpads = await prisma.$queryRaw`
        SELECT * FROM public."Launchpad"
        WHERE to_tsvector('english', "projectName" || ' ' || "poolAddress") @@ to_tsquery('english', ${query}) 
        AND status = 1 
        ORDER BY "id" DESC
        LIMIT 3
      `;
   } else {
      launchpads = await prisma.launchpad.findMany({
         where: {
            status: 1,
         },
         take: 3,
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

export default UpcomingLaunchpad;
