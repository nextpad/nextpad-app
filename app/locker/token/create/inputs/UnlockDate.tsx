import React, { ChangeEvent } from "react";
import { LockData } from "../LockForm";
import moment from "moment";

type Props = {
   lockData: LockData;
   setLockData: (data: any) => void;
};

function UnlockDate(props: Props) {
   function onChange(e: ChangeEvent<HTMLInputElement>) {
      const date = new Date(e.target.value);
      props.setLockData((prev: LockData) => ({
         ...prev,
         unlocked: date.getTime() / 1000,
      }));
   }
   return (
      <>
         <label className="text-lg font-semibold block mt-5">
            Unlocking Date
         </label>
         <input
            type="date"
            value={moment(props.lockData.unlocked).format("YYYY-MM-DD")}
            onChange={onChange}
            className="input input-bordered w-full block my-3"
         />
      </>
   );
}

export default UnlockDate;
