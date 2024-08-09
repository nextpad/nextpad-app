"use server";

import PinataClient from "@pinata/sdk";
import { uploadImage } from "@/app/components/helper";
import { PrismaClient } from "@prisma/client";
import { MetaData } from "../ILaunchpad";

export type ProjectParams = {
   metadata: MetaData;
   logo: string;
   banners: string[];
};

export type ImageParams = {
   data: string;
   name: string;
};

export type LaunchpadParams = {
   poolAddress: string;
   projectName: string;
   description: string;
   banner: string;
   logo: string;
   price: string;
   goals: string;
   allocation: string;
};

export async function ipfsUpload(data: ProjectParams) {
   const pinata = new PinataClient({
      pinataApiKey: process.env.PINATA_API_KEY,
      pinataSecretApiKey: process.env.PINATA_SECRET_KEY,
   });
   const res = await pinata.pinJSONToIPFS(
      {
         metadata: data.metadata,
         logo: data.logo,
         banners: data.banners,
      },
      {
         pinataMetadata: {
            name: "my-json",
         },
      }
   );

   return {
      cid: res.IpfsHash,
   };
}

export async function imageUploader(params: ImageParams) {
   const result = await uploadImage(params.data, params.name);
   return { url: result };
}

export async function saveToDatabase(data: LaunchpadParams) {
   try {
      const prisma = new PrismaClient();
      const result = await prisma.launchpad.create({
         data: {
            projectName: data.projectName,
            logo: data.logo,
            description: data.description,
            allocation: data.allocation,
            banner: data.banner,
            goals: data.goals,
            poolAddress: data.poolAddress,
            price: data.price,
            boostPoint: BigInt(0),
         },
      });

      if (!result) {
         return { id: null };
      }

      return { id: result.id };
   } catch (err: any) {
      return { id: null };
   }
}
