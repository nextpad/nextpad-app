"use server";
import { lockerAddress } from "@/app/components/constants";
import { PrismaClient } from "@prisma/client";
import { Contract, ethers } from "ethers";

async function getTotalAmount(ca: string): Promise<string> {
   const provider = new ethers.JsonRpcProvider(
      "https://rpc.open-campus-codex.gelato.digital"
   );

   const ERCAbi = ["function decimals() view returns (uint)"];
   const lockerJson = require("../create/Locker.json");
   const contract = new Contract(lockerAddress, lockerJson.abi, provider);
   const tokenContract = new Contract(ca, ERCAbi, provider);

   const decimals = await tokenContract.decimals();
   const ids: bigint[] = await contract.getLockUpIdsByToken(ca, 0, 9999);

   let result = 0;
   for (let id of ids) {
      let locks = await contract.lockUps(id);

      if (locks[2]) continue;
      result += parseInt(ethers.formatUnits(locks[3].toString(), decimals));
   }

   return result.toString();
}

export async function updateAmount(ca: string) {
   const prisma = new PrismaClient();
   const totalAmount = await getTotalAmount(ca);

   const res = await prisma.tokenLocked.update({
      where: {
         address: ca,
      },
      data: {
         totalAmount: totalAmount,
      },
   });
}
