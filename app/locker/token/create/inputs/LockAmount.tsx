import React from "react";
import { LockData } from "../LockForm";
import { ethers } from "ethers";

type Props = {
   lockData: LockData;
   setLockData: (data: any) => void;
   balance: string;
};

function LockAmount(props: Props) {
   return (
      <>
         <label className="text-lg font-semibold block mt-5">Amount</label>
         <input
            type="number"
            value={props.lockData.amount}
            onChange={(e) =>
               props.setLockData((prev: LockData) => ({
                  ...prev,
                  amount: e.target.value,
               }))
            }
            className="input input-bordered w-full block my-3"
         />
         <div className="flex justify-between">
            <div className="text-sm">
               Balance:{" "}
               <b>{props.balance ? ethers.formatEther(props.balance) : "-"}</b>
            </div>
            {props.lockData.amount != "" &&
               parseInt(props.lockData.amount) >
                  parseInt(ethers.formatEther(props.balance)) && (
                  <div className="text-sm text-warning">
                     Your balance is not enough
                  </div>
               )}
         </div>
      </>
   );
}

export default LockAmount;
