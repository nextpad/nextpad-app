import React from "react";
import LockForm from "./LockForm";
import { PrismaClient, Token, TokenLocked } from "@prisma/client";
import { Contract, ethers } from "ethers";
import { lockerAddress } from "@/app/components/constants";

function page() {
   async function saveToDatabase({
      address,
      name,
      symbol,
      blockchain,
   }: {
      address: string;
      name: string;
      symbol: string;
      blockchain: number;
   }) {
      "use server";

      async function getTotalAmount(ca: string): Promise<string> {
         const provider = new ethers.JsonRpcProvider(
            "https://rpc.open-campus-codex.gelato.digital"
         );

         const ERCAbi = ["function decimals() view returns (uint)"];
         const lockerJson = require("./Locker.json");
         const contract = new Contract(lockerAddress, lockerJson.abi, provider);
         const tokenContract = new Contract(ca, ERCAbi, provider);

         const decimals = await tokenContract.decimals();
         const ids: bigint[] = await contract.getLockUpIdsByToken(ca, 0, 9999);

         let result = 0;
         for (let id of ids) {
            let locks = await contract.lockUps(id);

            if (locks[2]) continue;
            result += parseInt(
               ethers.formatUnits(locks[3].toString(), decimals)
            );
         }

         return result.toString();
      }

      const prisma = new PrismaClient();

      const tokenLocked: TokenLocked[] = await prisma.$queryRaw`
        SELECT * FROM public."TokenLocked"
        WHERE to_tsvector('english', "address") @@ to_tsquery('english', ${address})
      `;
      const totalAmount = await getTotalAmount(address);

      if (tokenLocked.length === 0) {
         const token: Token[] = await prisma.$queryRaw`
         SELECT * FROM public."Token"
         WHERE to_tsvector('english', "address") @@ to_tsquery('english', ${address})
       `;
         const logo = !token[0]?.id
            ? "https://i.ibb.co.com/TByjbdx/Unknown.png"
            : token[0].logo;

         const result = await prisma.tokenLocked.create({
            data: {
               address,
               totalAmount,
               logo,
               symbol,
               name,
               blockchain,
            },
         });

         return;
      }

      await prisma.tokenLocked.update({
         where: {
            id: tokenLocked[0].id,
         },
         data: {
            totalAmount,
         },
      });
   }
   return (
      <div className="min-h-screen flex justify-center">
         <div className="card bg-base-100 border-2 border-base-300 mt-10 min-w-[40rem]">
            <div className="card-body p-0">
               <div className="card-title border-b-2 border-base-300">
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
