import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import Wrapper from "./Wrapper";

async function page(props: any) {
   const address: string = props.params.address;

   const prisma = new PrismaClient();
   const token = await prisma.tokenLocked.findFirst({
      where: {
         address: {
            search: address,
         },
      },
   });

   if (!token) {
      return notFound();
   }

   return (
      <div className="min-h-screen">
         <Wrapper token={token} address={address} />
      </div>
   );
}

export default page;
