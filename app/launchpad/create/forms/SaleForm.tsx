import React from "react";
import { Props } from "./ILaunchpad";
import moment from "moment";
import { onChange } from "./helper";
import QuestionIcon from "@/app/components/icons/QuestionIcon";

function SaleForm(props: Omit<Props, "setLogo" | "setNetwork">) {
   return (
      <>
         <div className="flex">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Min Buy ({props.network === 1 ? "CORE" : "ETH"})
               </label>
               <input
                  type="number"
                  value={props.launchpadData.minBuy}
                  onChange={(e) => onChange(props, e, "minBuy")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">
                  Max Buy ({props.network === 1 ? "CORE" : "ETH"})
               </label>
               <input
                  type="number"
                  value={props.launchpadData.maxBuy}
                  onChange={(e) => onChange(props, e, "maxBuy")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>

         <div className="flex my-8">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Price per {props.network === 1 ? "CORE" : "ETH"}
                  <div
                     className="inline tooltip tooltip-right"
                     data-tip="The token amount users get for every commit"
                  >
                     <QuestionIcon classList="size-5 ml-1 inline" />
                  </div>
               </label>
               <input
                  type="number"
                  value={props.launchpadData.priceNative}
                  onChange={(e) => onChange(props, e, "priceNative")}
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
                  value={props.launchpadData.maxAllocation}
                  onChange={(e) => onChange(props, e, "maxAllocation")}
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
                  value={moment(new Date(props.launchpadData.startDate)).format(
                     "yyyy-MM-DD"
                  )}
                  onChange={(e) => onChange(props, e, "startDate")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">End Date</label>
               <input
                  type="date"
                  value={moment(new Date(props.launchpadData.endDate)).format(
                     "yyyy-MM-DD"
                  )}
                  onChange={(e) => onChange(props, e, "endDate")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>

         <div className="flex mt-7 pb-10 justify-between">
            <button
               className="btn bg-base-100 border border-gray-700 px-10 hover:border-gray-700"
               onClick={() => props.setStep(1)}
            >
               Back
            </button>
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={() => props.setStep(3)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default SaleForm;
