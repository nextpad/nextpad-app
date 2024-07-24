import React from "react";
import { Props } from "./ILaunchpad";
import NetworkButton from "@/app/minter/NetworkButton";
import { onChange } from "./helper";
import QuestionIcon from "@/app/components/icons/QuestionIcon";

function BasicForm(props: Omit<Props, "setLogo">) {
   return (
      <>
         <label className="text-lg mb-4 font-semibold block">
            Based on Network
         </label>
         <NetworkButton network={props.network} setNetwork={props.setNetwork} />
         <div className="flex mt-5">
            <div className="flex flex-col w-4/6">
               <label className="text-lg font-semibold block">
                  Token Address
               </label>
               <input
                  type="text"
                  value={props.launchpadData.address}
                  onChange={(e) => onChange(props, e, "address")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex flex-row items-end w-2/6">
               <span className="block mb-3 mx-3 font-bold">OR</span>
               <a href="/minter" className="btn btn-outline bg-gray-800 px-12">
                  Create Token
               </a>
            </div>
         </div>
         <div className="card border border-slate-700 rounded-md mt-4">
            <div className="card-body p-5">
               <div className="flex justify-between">
                  <div className="text-slate-300">OKE / Oke Token</div>
                  <span className="block">0x000..000</span>
               </div>
            </div>
         </div>
         <div className="flex mt-7">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Total Allocation
               </label>
               <input
                  type="number"
                  value={props.launchpadData.allocation}
                  onChange={(e) => onChange(props, e, "allocation")}
                  className="input input-bordered w-full block mt-3"
               />
               <p className="text-sm mt-2">Balance: -</p>
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">
                  Reward per TOL{" "}
                  <div
                     className="inline tooltip tooltip-right"
                     data-tip="The incentive for those who vote based on the TOL tokens they stake."
                  >
                     <QuestionIcon classList="size-5 ml-1 inline" />
                  </div>
               </label>
               <input
                  type="number"
                  value={props.launchpadData.rewardTol}
                  onChange={(e) => onChange(props, e, "rewardTol")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
         </div>
         <div className="flex mt-2 pb-10 justify-end">
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={() => props.setStep(2)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default BasicForm;
