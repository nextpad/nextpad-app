"use client";
import React, { useEffect, useRef, useState } from "react";
import ListRecord from "./ListRecord";
import { TokenLocked } from "@prisma/client";
import InfoCard from "./InfoCard";
import { BrowserProvider, Contract, ethers } from "ethers";
import { lockerAddress } from "@/app/components/constants";
import dynamic from "next/dynamic";
import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { formatUnits } from "ethers";
const LockedAllocation = dynamic(() => import("./LockedAllocation"), {
   ssr: false,
});

type Props = {
   address: string;
   token: TokenLocked;
};

function Wrapper({ address, token }: Props) {
   let intErId = useRef<NodeJS.Timeout>();
   const [records, setRecords] = useState<any[]>([]);
   const [unlocked, setUnlocked] = useState([0, ""]);
   const [errorAlert, setErrorAlert] = useState("");
   const [loading, setLoading] = useState(false);

   const { address: addr, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   const lockerJson = require("../create/Locker.json");
   const provider = new ethers.JsonRpcProvider("https://rpc.test.btcs.network");
   const locker = new Contract(lockerAddress, lockerJson.abi, provider);

   async function fetchRecords() {
      const ids = await locker.getLockUpIdsByToken(address, 0, 999);
      const lockups = ids.map((val: any) => locker.lockUps(val));
      const result: any[] = await Promise.all(lockups);

      setRecords(result);
   }

   async function getLatestUnlocked() {
      if (!isConnected || !addr) return;

      let ids: any[] = await locker.getLockUpIdsByReceiver(addr, 0, 99);

      let resId = 0;
      for (let id of ids) {
         const data = await locker.lockUps(id);

         if (
            parseInt(data[1]) <= Math.ceil(Date.now() / 1000) &&
            data[0] == address
         ) {
            resId = id;
            break;
         }
      }

      const result = await locker.lockUps(resId);
      setUnlocked([resId, parseInt(formatUnits(result[3])).toLocaleString()]);
   }

   useEffect(() => {
      fetchRecords();
      getLatestUnlocked();
   }, [address, addr]);

   async function unlockLatest() {
      if (!unlocked[1] || !isConnected || !walletProvider) return;

      try {
         setLoading(true);
         const ethersProvider = new BrowserProvider(walletProvider);
         const signer = await ethersProvider.getSigner();

         const contract = new Contract(lockerAddress, lockerJson.abi, signer);

         const tx = await contract.unlock(unlocked[0]);
         await tx.wait();

         await fetchRecords();
         await getLatestUnlocked();
      } catch (err: any) {
         setLoading(false);
         if (err) {
            setErrorAlert(err.reason);
            intErId.current = setInterval(() => {
               setErrorAlert(() => "");
               clearInterval(intErId.current);
            }, 3000);
         }
      }
   }

   return (
      <div>
         <div className="flex">
            <div className="flex w-3/5 mr-7">
               <InfoCard token={token} records={records.length} />
            </div>
            <div className="flex w-2/5">
               <LockedAllocation records={records.filter((val) => !val[2])} />
            </div>
         </div>
         <div className="flex flex-col mt-7">
            {records.map((val) => val[4]).includes(addr) && (
               <div
                  className="card bg-base-100 border-2 w-3/5 mb-7 border-base-300"
                  style={{ minHeight: "15.4rem" }}
               >
                  <div className="card-body p-0">
                     {errorAlert && (
                        <div className="toast toast-top toast-end">
                           <div className="alert alert-error text-slate-100 font-semibold">
                              <span>{errorAlert}</span>
                           </div>
                        </div>
                     )}
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
                                 <th>Status</th>
                              </tr>
                           </thead>
                           <tbody>
                              <ListRecord
                                 records={records.filter(
                                    (val) => val[4] == addr && !val[2]
                                 )}
                                 full={false}
                              />
                           </tbody>
                        </table>

                        {records.filter(
                           (val) =>
                              parseInt(val[1]) <=
                                 Math.ceil(Date.now() / 1000) &&
                              val[4] == addr &&
                              !val[2]
                        ).length > 0 ? (
                           <button
                              className="button btn btn-normal mt-5 disabled:bg-purple-700 disabled:text-slate-100"
                              disabled={loading}
                              onClick={unlockLatest}
                           >
                              {loading && (
                                 <span className="loading loading-spinner loading-md"></span>
                              )}
                              Unlock {unlocked[1] && unlocked[1]}
                           </button>
                        ) : (
                           <button
                              className="button btn btn-normal mt-5"
                              disabled={true}
                           >
                              No unlocked available
                           </button>
                        )}
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
                           <ListRecord
                              records={records.filter((val) => !val[2])}
                              full={true}
                           />
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
