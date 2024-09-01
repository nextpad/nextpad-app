import QuestionIcon from "@/app/components/icons/QuestionIcon";
import React, { useContext, useState } from "react";
import { LaunchpadData, Props } from "../ILaunchpad";
import { onChange } from "../helper";
import NetworkButton from "@/app/minter/NetworkButton";
import TokenAddress from "./TokenAddress";
import { BasicProps } from "../BasicForm";
import Context from "../../Context";

function TokenInputs() {
   const values = useContext(Context);
   return (
      <>
         <label className="text-lg mb-4 font-semibold block">
            Based on Network
         </label>
         <NetworkButton
            network={values.network}
            setNetwork={values.setNetwork}
         />

         <TokenAddress />

         <div className="flex mt-7">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Total Allocation
               </label>
               <input
                  type="number"
                  value={values.launchpadData.allocation}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "allocation"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
               <p className="text-sm mt-2">
                  Balance:{" "}
                  {values.balance
                     ? parseInt(values.balance).toLocaleString()
                     : "-"}
               </p>
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">
                  Reward per NXP{" "}
                  <div
                     className="inline tooltip tooltip-right"
                     data-tip="The incentive for those who vote based on the NXP tokens they stake."
                  >
                     <QuestionIcon classList="size-5 ml-1 inline" />
                  </div>
               </label>
               <input
                  type="number"
                  value={values.launchpadData.rewardTol}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "rewardTol"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>
      </>
   );
}

export default TokenInputs;
