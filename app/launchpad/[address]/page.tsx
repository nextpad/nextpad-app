import { ethers, Contract } from "ethers";
import Wrapper from "./Wrapper";
import { createClient } from "redis";
import ABI from "./Board.json";
import { notFound } from "next/navigation";
import { Launchpad, PrismaClient } from "@prisma/client";

export interface MetadataResponse {
   metadata: {
      projectName: string;
      shortDesc: string;
      description: string;
      tokenomics: { amount: string; name: string }[];
      website: string;
      twitter: string;
      telegram: string;
      docs: string;
   };
   logo: string;
   banners: string[];
}

const REDIS_EXPIRATION = 1800; // 30 minutes
const JSON_RPC_URL = "https://rpc.test.btcs.network";

class MetadataService {
   private redisClient: ReturnType<typeof createClient>;

   constructor() {
      this.redisClient = createClient();
   }

   async getMetadata(address: string): Promise<MetadataResponse | null> {
      await this.redisClient.connect();

      try {
         const key = `${address.toLowerCase()}_metadata`;
         const cachedData = await this.redisClient.get(key);

         if (cachedData) {
            return JSON.parse(cachedData);
         }

         const cid = await this.getCID(address);
         if (!cid) {
            throw new Error("CID not found");
         }

         const data = await this.fetchFromIPFS(cid);
         await this.cacheMetadata(key, data);

         return data;
      } catch (err) {
         return null;
      }
   }

   private async getCID(address: string): Promise<string | null> {
      const provider = new ethers.JsonRpcProvider(JSON_RPC_URL);
      const contract = new Contract(address, ABI.abi, provider);
      const data = await contract.getLaunchpadDetail();
      return data[6] || null;
   }

   private async fetchFromIPFS(cid: string) {
      const response = await fetch(
         `${process.env.IPFS_GATEWAY_URL}/ipfs/${cid}`
      );
      if (!response.ok) {
         throw new Error(`Failed to fetch from IPFS: ${response.statusText}`);
      }
      return response.json();
   }

   private async cacheMetadata(
      key: string,
      metadata: MetadataResponse
   ): Promise<void> {
      await this.redisClient.setEx(
         key,
         REDIS_EXPIRATION,
         JSON.stringify(metadata)
      );
   }
}

async function page({ params }: { params: { address: string } }) {
   const address = params.address;
   const prisma = new PrismaClient();
   const launchpad: Launchpad[] = await prisma.$queryRaw`
      SELECT * FROM public."Launchpad"
      WHERE to_tsvector('english', "poolAddress") @@ to_tsquery('english', ${address});`;

   if (!launchpad) {
      return notFound();
   }

   const metadataService = new MetadataService();
   const metadata = await metadataService.getMetadata(address);

   if (!metadata) {
      return notFound();
   }

   return (
      <>
         <Wrapper
            address={params.address}
            data={metadata}
            blockchain={launchpad[0].blockchain}
         />
      </>
   );
}

export default page;
