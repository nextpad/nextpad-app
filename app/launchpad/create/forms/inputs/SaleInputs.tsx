import QuestionIcon from "@/app/components/icons/QuestionIcon";
import moment from "moment";
import React, { useContext } from "react";
import { LaunchpadData, Props } from "../ILaunchpad";
import { onChange } from "../helper";
import Context from "../../Context";

function SaleInputs() {
   const values = useContext(Context);
   return (
      <>
         <div className="flex">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Min Buy ({values.network === 656476 ? "EDU" : "ETH"})
               </label>
               <input
                  type="number"
                  value={values.launchpadData.minBuy}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "minBuy"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">
                  Max Buy ({values.network === 656476 ? "EDU" : "ETH"})
               </label>
               <input
                  type="number"
                  value={values.launchpadData.maxBuy}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "maxBuy"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>

         <div className="flex my-8">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Price per {values.network === 656476 ? "EDU" : "ETH"}
                  <div
                     className="inline tooltip tooltip-right"
                     data-tip="The token amount users get for every commit"
                  >
                     <QuestionIcon classList="size-5 ml-1 inline" />
                  </div>
               </label>
               <input
                  type="number"
                  value={values.launchpadData.priceNative}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "priceNative"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">
                  Max Allocation per Users
                  <div
                     className="inline tooltip tooltip-right"
                     data-tip="The token amount users get for every commit"
                  >
                     <QuestionIcon classList="size-5 ml-1 inline" />
                  </div>
               </label>
               <input
                  type="number"
                  value={values.launchpadData.maxAllocation}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "maxAllocation"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>

         <div className="flex">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Presale Start Date
                  <div
                     className="inline tooltip tooltip-right"
                     data-tip="Presale should ideally start 1 week from today to give you time to raise awareness"
                  >
                     <QuestionIcon classList="size-5 ml-1 inline" />
                  </div>
               </label>
               <input
                  type="date"
                  value={moment(
                     new Date(values.launchpadData.startDate)
                  ).format("yyyy-MM-DD")}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "startDate"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">End Date</label>
               <input
                  type="date"
                  value={moment(new Date(values.launchpadData.endDate)).format(
                     "yyyy-MM-DD"
                  )}
                  onChange={(e) =>
                     onChange<LaunchpadData>(
                        values.setLaunchpadData,
                        e,
                        "endDate"
                     )
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>
      </>
   );
}

export default SaleInputs;
