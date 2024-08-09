import { uploadImage } from "@/app/components/helper";
import Wrapper from "./Wrapper";
import PinataClient from "@pinata/sdk";
import { MetaData } from "./forms/ILaunchpad";
import { Launchpad, PrismaClient } from "@prisma/client";

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

function Page() {
   async function imageUploader(params: ImageParams): Promise<string> {
      "use server";
      const result = await uploadImage(params.data, params.name);
      return result;
   }

   async function ipfsUpload(data: ProjectParams) {
      "use server";
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

      return res.IpfsHash;
   }

   async function saveToDatabase(data: LaunchpadParams): Promise<string> {
      "use server";

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
            return "null";
         }

         return result.id.toString();
      } catch (err: any) {
         return "null";
      }
   }

   return (
      <div className="min-h-screen flex justify-center mt-3">
         <Wrapper
            ipfsUpload={ipfsUpload}
            imageUpload={imageUploader}
            saveToDatabase={saveToDatabase}
         />
      </div>
   );
}

export default Page;
