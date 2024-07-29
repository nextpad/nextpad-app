import React from "react";
import LockForm from "./LockForm";
import { PrismaClient } from "@prisma/client";

function page() {
   async function saveToDatabase({
      address,
      name,
      blockchain,
   }: {
      address: string;
      name: string;
      blockchain: number;
   }) {
      "use server";
      const prisma = new PrismaClient();

      const tokenLocked = await prisma.tokenLocked.findFirst({
         where: {
            address: {
               search: address,
            },
         },
      });

      if (!tokenLocked) {
         const token = await prisma.token.findFirst({
            where: {
               address: {
                  search: address,
               },
            },
         });
         const logo = !token?.id
            ? "https://i.ibb.co.com/TByjbdx/Unknown.png"
            : token.logo;

         const result = await prisma.tokenLocked.create({
            data: {
               address,
               logo,
               name,
               blockchain,
            },
         });
         console.log(result);
      }
   }
   return (
      <div className="min-h-screen flex justify-center">
         <div className="card bg-base-300 border border-teal-800 mt-10 min-w-[40rem]">
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Lock Token</h2>
               </div>
               <div className="mt-6 px-9">
                  <LockForm saveToDatabase={saveToDatabase} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default page;
