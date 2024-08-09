import React, { useContext } from "react";
import Context from "../Context";
import { ImageParams, LaunchpadParams, ProjectParams } from "../page";
import CreateButton from "./inputs/CreateButton";
import { Launchpad } from "@prisma/client";

interface Props {
   ipfsUploader: (data: ProjectParams) => Promise<string>;
   imageUploader: (data: ImageParams) => Promise<string>;
   saveToDatabase: (data: LaunchpadParams) => Promise<string | "null">;
}

function ReviewForm(props: Props) {
   const values = useContext(Context);
   const NATIVE = values.network === 1115 ? "CORE" : "ETH";
   return (
      <>
         <div role="alert" className="alert alert-warning mb-6">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 shrink-0 stroke-current"
               fill="none"
               viewBox="0 0 24 24"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
               />
            </svg>
            <span>
               Make sure you had to check it all, you can modify it later but
               not for all information
            </span>
         </div>
         <h2 className="font-bold text-xl mb-4 text-teal-600">
            Project Information
         </h2>
         <div className="flex flex-row justify-start text-lg">
            <div className="w-1/2">
               <p className="mb-4">Blockchain</p>
               <p className="mb-4">Project Name</p>
               <p className="mb-4">Token Address</p>
            </div>
            <div className="w-1/2">
               <p className="mb-4 text-lg text-slate-300 font-bold">
                  <span className="mr-3">:</span>
                  {values.network == 1115 ? "Core" : "Sepolia"}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.metadata.projectName}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.address.slice(0, 28)}...
               </p>
            </div>
         </div>
         <div className="divider"></div>
         <h2 className="font-bold text-xl mb-4 text-teal-600">
            Pool Information
         </h2>
         <div className="flex flex-row justify-start text-lg">
            <div className="w-1/2">
               <p className="mb-4">Sale Type</p>
               <p className="mb-4">Total Allocation</p>
               <p className="mb-4">Max Allocation per User</p>
               <p className="mb-4">Min Buy</p>
               <p className="mb-4">Max Buy</p>
               <p className="mb-4">Price</p>
               <p className="mb-4">Reward Vote</p>
               <p className="mb-4">Start Date</p>
               <p className="mb-4">End Date</p>
            </div>
            <div className="w-1/2">
               <span className="block mb-4">
                  <span className="mr-3">:</span>
                  <b className="text-primary">Public</b>
               </span>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.allocation}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.maxAllocation}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.minBuy} {NATIVE}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.maxBuy} {NATIVE}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>1 {NATIVE} ={" "}
                  {values.launchpadData.priceNative}{" "}
                  {values.launchpadData.symbol}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>1 TOL ={" "}
                  {values.launchpadData.rewardTol} {values.launchpadData.symbol}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.startDate}
               </p>
               <p className="mb-4 text-lg text-slate-300">
                  <span className="mr-3">:</span>
                  {values.launchpadData.endDate}
               </p>
            </div>
         </div>
         <div className="flex pb-10 justify-between mt-8">
            <button
               className="btn bg-base-100 border border-gray-700 px-10 hover:border-gray-700"
               onClick={() => values.setStep(3)}
            >
               Back
            </button>
            <CreateButton
               ipfsUploader={props.ipfsUploader}
               imageUploader={props.imageUploader}
               saveToDatabase={props.saveToDatabase}
            />
         </div>
      </>
   );
}

export default ReviewForm;
