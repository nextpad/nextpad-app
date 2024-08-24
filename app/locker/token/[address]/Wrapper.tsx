"use client";
import React, { useEffect, useState } from "react";
import ListRecord from "./ListRecord";
import { TokenLocked } from "@prisma/client";
import InfoCard from "./InfoCard";
import { Contract, ethers } from "ethers";
import { lockerAddress } from "@/app/components/constants";
import dynamic from "next/dynamic";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
const LockedAllocation = dynamic(() => import("./LockedAllocation"), {
   ssr: false,
});

type Props = {
   address: string;
   token: TokenLocked;
};

function Wrapper({ address, token }: Props) {
   const [records, setRecords] = useState<any[]>([]);
   const [receivers, setReceivers] = useState<any[]>([]);

   const { address: addr } = useWeb3ModalAccount();

   useEffect(() => {
      const lockerJson = require("../create/Locker.json");

      const provider = new ethers.JsonRpcProvider(
         "https://rpc.test.btcs.network"
      );
      const locker = new Contract(lockerAddress, lockerJson.abi, provider);

      async function fetchRecords() {
         const ids = await locker.getLockUpIdsByToken(address, 0, 999);
         const lockups = ids.map((val: any) => locker.lockUps(val));
         const result: any[] = await Promise.all(lockups);

         setRecords(result);
      }

      fetchRecords();
   }, [address]);

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
            {records.map((val) => val[4]).includes(addr) && (
               <div
                  className="card bg-base-100 border-2 w-3/5 mb-7 border-base-300"
                  style={{ minHeight: "15.4rem" }}
               >
                  <div className="card-body p-0">
                     <div className="card-title border-b-2 border-base-300">
                        <h2 className="px-9 py-4 text-xl">
                           Your Locked Records
                        </h2>
                     </div>
                     <div className="px-8 mb-9">
                        <table className="table">
                           <thead>
                              <tr className="text-lg border-b-2 border-base-300">
                                 <th>Title</th>
                                 <th>Amount</th>
                                 <th>Unlock Date</th>
                              </tr>
                           </thead>
                           <tbody>
                              <ListRecord
                                 records={records.filter(
                                    (val) => val[4] == addr
                                 )}
                                 full={false}
                              />
                           </tbody>
                        </table>

                        <button
                           className="button btn btn-normal mt-5"
                           disabled={true}
                        >
                           No unlocked available
                        </button>
                     </div>
                  </div>
               </div>
            )}

            <div
               className="card bg-base-100 border-2 w-full border-base-300"
               style={{ minHeight: "24.4rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b-2 border-base-300">
                     <h2 className="px-9 py-4 text-xl">Records</h2>
                  </div>
                  <div className="px-8 mb-9">
                     <table className="table">
                        <thead>
                           <tr className="text-lg border-b-2 border-base-300">
                              <th>Title</th>
                              <th>Wallet</th>
                              <th>Amount</th>
                              <th>Unlock Date</th>
                           </tr>
                        </thead>
                        <tbody>
                           <ListRecord records={records} full={true} />
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
