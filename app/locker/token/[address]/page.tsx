import { PrismaClient, TokenLocked } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import Wrapper from "./Wrapper";

async function page(props: any) {
   const address: string = props.params.address;

   const prisma = new PrismaClient();
   const tokenLocked: TokenLocked[] = await prisma.$queryRaw`
        SELECT * FROM public."TokenLocked"
        WHERE to_tsvector('english', "address") @@ to_tsquery('english', ${address})
      `;

   if (tokenLocked.length === 0) {
      return notFound();
   }

   return (
      <div className="min-h-screen">
         <Wrapper token={tokenLocked[0]} address={address} />
      </div>
   );
}

export default page;
