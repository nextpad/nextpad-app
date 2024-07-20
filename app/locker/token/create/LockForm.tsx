"use client";
import NetworkButton from "@/app/minter/NetworkButton";
import React, { useState } from "react";

type LockData = {
   network: number;
   title: string;
   address: string;
   amount: string;
   unlocked: string;
   receiver: string;
};

function LockForm() {
   const [lockData, setLockData] = useState<LockData>({
      network: 1,
      title: "",
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

         <label className="text-lg font-semibold block mt-5">Title</label>
         <p className="text-sm">e.g. Team, marketing</p>
         <input
            type="text"
            value={lockData.title}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="input input-bordered w-full block my-4"
         />

         <label className="text-lg font-semibold block mt-5">
            Token Address
         </label>
         <input
            type="text"
            value={lockData.address}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, address: e.target.value }))
            }
            className="input input-bordered w-full block my-4"
         />

         <label className="text-lg font-semibold block mt-5">Amount</label>
         <input
            type="number"
            value={lockData.amount}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, amount: e.target.value }))
            }
            className="input input-bordered w-full block my-4"
         />

         <label className="text-lg font-semibold block mt-5">
            Unlocking Date
         </label>
         <input
            type="date"
            value={lockData.unlocked}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, unlocked: e.target.value }))
            }
            className="input input-bordered w-full block my-4"
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
            className="input input-bordered w-full block my-4"
         />

         <button
            className="btn btn-normal mt-2"
            onClick={() => console.log(lockData)}
         >
            Lock Now
         </button>
      </>
   );
}

export default LockForm;
