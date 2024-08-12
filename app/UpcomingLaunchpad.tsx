"use server";
import React from "react";
import CardProject from "./components/CardProject";
import { PrismaClient } from "@prisma/client";

async function UpcomingLaunchpad() {
   const prisma = new PrismaClient();
   const launchpads = await prisma.launchpad.findMany({
      where: {
         status: 1,
      },
      take: 3,
      orderBy: { id: "desc" },
   });
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
