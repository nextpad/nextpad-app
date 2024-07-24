"use client";
import NetworkButton from "@/app/minter/NetworkButton";
import React, { useState } from "react";

type LockData = {
   network: number;
   address: string;
   amount: string;
   unlocked: string;
   receiver: string;
};

function LockForm() {
   const [lockData, setLockData] = useState<LockData>({
      network: 1,
      address: "",
      amount: "0",
      unlocked: "",
      receiver: "",
   });

   function setNetwork(network: number) {
      setLockData((prev) => ({ ...prev, network: network }));
   }

   return (
      <>
         <label className="text-lg mb-4 font-semibold block">
            Based on Network
         </label>
         <NetworkButton network={lockData.network} setNetwork={setNetwork} />

         <label className="text-lg font-semibold block mt-5">
            Pair Address
         </label>
         <input
            type="text"
            value={lockData.address}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, address: e.target.value }))
            }
            className="input input-bordered w-full block my-3"
         />
         <div className="card border border-slate-700 rounded-md mt-4">
            <div className="card-body p-5">
               <div className="flex justify-between">
                  <div className="text-slate-300">OKE / ETH</div>
                  <span className="block">0x000..000</span>
               </div>
            </div>
         </div>

         <label className="text-lg font-semibold block mt-5">
            LP token amount
         </label>
         <input
            type="number"
            value={lockData.amount}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, amount: e.target.value }))
            }
            className="input input-bordered w-full block my-3"
         />
         <p className="text-sm">Balance: -</p>

         <label className="text-lg font-semibold block mt-5">
            Unlocking Date
         </label>
         <input
            type="date"
            value={lockData.unlocked}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, unlocked: e.target.value }))
            }
            className="input input-bordered w-full block my-3"
         />

         <label className="text-lg font-semibold block mt-5">
            Receiver Address
         </label>
         <p className="text-sm">The wallet who received back the token</p>
         <input
            type="text"
            value={lockData.receiver}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, receiver: e.target.value }))
            }
            className="input input-bordered w-full block my-3"
         />

         <div className="flex justify-between">
            <button
               className="btn btn-normal mt-2"
               onClick={() => console.log(lockData)}
            >
               Lock Now
            </button>
            <a
               className="btn btn-neutral mt-2 min-w-20"
               href="/locker/liquidity"
            >
               Back
            </a>
         </div>
      </>
   );
}

export default LockForm;
