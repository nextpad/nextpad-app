import React, { ChangeEvent, useRef } from "react";
import { LockData } from "../LockForm";

type Props = {
   address: `0x${string}` | undefined;
   lockData: LockData;
   setLockData: (data: any) => void;
};

function ReceiverAddress(props: Props) {
   let same = useRef<boolean>(false);
   function onSameWallet(event: ChangeEvent<HTMLInputElement>) {
      if (event.target.checked) {
         props.setLockData((prev: LockData) => ({
            ...prev,
            receiver: props.address,
         }));
         same.current = true;
      } else {
         props.setLockData((prev: LockData) => ({
            ...prev,
            receiver: "",
         }));
         same.current = false;
      }
   }

   return (
      <>
         <label className="text-lg font-semibold block mt-5">
            Receiver Address
         </label>
         <p className="text-sm">The wallet who received back the token</p>
         <input
            type="text"
            value={props.lockData.receiver}
            onChange={(e) =>
               props.setLockData((prev: LockData) => ({
                  ...prev,
                  receiver: e.target.value,
               }))
            }
            readOnly={same.current}
            className="input input-bordered w-full block my-3"
         />
         <div className="mt-3 mb-4">
            <div className="flex items-center">
               <input
                  onChange={onSameWallet}
                  type="checkbox"
                  className="checkbox checkbox-accent checkbox-xs"
               />
               <span className="label-text ml-2">Use current wallet</span>
            </div>
         </div>
      </>
   );
}

export default ReceiverAddress;
