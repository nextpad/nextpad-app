"use server";
import React from "react";
import CardStats from "./components/CardStats";
import { PrismaClient } from "@prisma/client";

async function Overview() {
   const prisma = new PrismaClient();
   const totalLaunchpad = await prisma.launchpad.count();

   return (
      <>
         <div className="flex-1 mr-7">
            <CardStats number="$1M" title="Raised Capital" />
         </div>
         <div className="flex-1 mr-7">
            <CardStats number={totalLaunchpad} title="Total Launchpad" />
         </div>
         <div className="flex-1 mr-7">
            <CardStats number="100" title="Unique Participants" />
         </div>
         <div className="flex-1">
            <CardStats number="$0" title="Total Locked" />
         </div>
      </>
   );
}

export default Overview;
