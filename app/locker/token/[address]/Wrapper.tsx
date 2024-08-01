"use client";
import React, { useEffect, useState } from "react";
import ListRecord from "./ListRecord";
import { TokenLocked } from "@prisma/client";
import InfoCard from "./InfoCard";
import { Contract, ethers } from "ethers";
import { lockerAddress } from "@/app/components/constants";
import dynamic from "next/dynamic";
const LockedAllocation = dynamic(() => import("./LockedAllocation"), {
   ssr: false,
});

type Props = {
   address: string;
   token: TokenLocked;
};

function Wrapper({ address, token }: Props) {
   const [records, setRecords] = useState([]);

   useEffect(() => {
      async function fetchRecords() {
         const lockerJson = require("../create/Locker.json");

         const provider = new ethers.JsonRpcProvider(
            "https://rpc.test.btcs.network"
         );
         const locker = new Contract(lockerAddress, lockerJson.abi, provider);

         const ids = await locker.getLockUpIdsByToken(address, 0, 999);
         const lockups = ids.map((val: any) => locker.lockUps(val));
         const result: any = await Promise.all(lockups);

         setRecords(result);
      }

      fetchRecords();
   }, []);

   return (
      <div>
         <div className="flex">
            <div className="flex w-3/5 mr-7">
               <InfoCard token={token} records={records.length} />
            </div>
            <div className="flex w-2/5">
               <LockedAllocation records={records} />
            </div>
         </div>
         <div className="flex flex-col mt-7">
            <div
               className="card bg-base-300 border w-full border-teal-800"
               style={{ minHeight: "24.4rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b border-teal-900">
                     <h2 className="px-9 py-4 text-xl">Records</h2>
                  </div>
                  <div className="px-8 mb-9">
                     <table className="table table-zebra">
                        <thead>
                           <tr>
                              <th>Title</th>
                              <th>Wallet</th>
                              <th>Amount</th>
                              <th>Unlock Date</th>
                           </tr>
                        </thead>
                        <tbody>
                           <ListRecord records={records} />
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Wrapper;
