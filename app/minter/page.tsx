import { PrismaClient } from "@prisma/client";
import FormWrapper from "./FormWrapper";
import { ethers } from "ethers";
import { TransactionReceipt } from "ethers";
import { tokenFactoryAddress } from "../components/constants";
import { uploadImage } from "../components/helper";

export type MetaToken = {
   name: string;
   logo: string;
   symbol: string;
   supply: string;
   address: string;
   description: string;
   blockchain: number;
   web: string | null;
   twitter: string | null;
   telegram: string | null;
};

async function saveToDatabase(
   data: MetaToken,
   hash: string
): Promise<{ id: number } | null> {
   "use server";

   const provider = new ethers.JsonRpcProvider(
      "https://rpc.open-campus-codex.gelato.digital"
   );
   const tx: TransactionReceipt | null = await provider.getTransactionReceipt(
      hash
   );

   if (!tx) {
      return null;
   }

   if (tx.to?.toLowerCase() !== tokenFactoryAddress.toLowerCase()) {
      return null;
   }

   data["logo"] = await uploadImage(data.logo, data.name);

   const prisma = new PrismaClient();
   const result = await prisma.token.create({
      data: data,
   });

   return {
      id: result.id,
   };
}

function Page() {
   return (
      <div className="min-h-screen flex justify-center mt-3">
         <FormWrapper onSaveDatabase={saveToDatabase} />
      </div>
   );
}

export default Page;
