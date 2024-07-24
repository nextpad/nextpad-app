"use client";
import { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import { LaunchpadData } from "./forms/ILaunchpad";
import BasicForm from "./forms/BasicForm";
import SaleForm from "./forms/SaleForm";
import ReviewForm from "./forms/ReviewForm";
import moment from "moment";

const DetailForm = dynamic(() => import("./forms/DetailForm"), {
   ssr: false,
});

function Page() {
   const [step, setStep] = useState(1);
   const [network, setNetwork] = useState(1);
   const [launchpadData, setLaunchpadData] = useState<LaunchpadData>({
      // basic
      address: "",
      symbol: "TEST",
      allocation: "0",
      rewardTol: "0",
      // sales
      minBuy: "0",
      maxBuy: "0",
      maxAllocation: "0",
      priceNative: "0",
      startDate: moment(Date.now()).format("yyyy-MM-DD"),
      endDate: moment(Date.now()).format("yyyy-MM-DD"),
      // detailed info
      projectName: "",
      shortDesc: "",
      banners: [],
      description: "",
      tokenomics: [
         {
            name: "",
            amount: "0",
         },
      ],
   });
   const [logo, setLogo] = useState("");

   const props = {
      network: network,
      setNetwork: setNetwork,
      step: step,
      setStep: setStep,
      launchpadData: launchpadData,
      setLaunchpadData: setLaunchpadData,
      setLogo: setLogo,
      logo,
   };

   const forms: ReactElement[] = [
      <BasicForm key={0} {...props} />,
      <SaleForm key={1} {...props} />,
      <DetailForm key={2} {...props} />,
      <ReviewForm key={3} {...props} />,
   ];

   return (
      <div className="min-h-screen flex justify-center mt-3">
         <div className="flex flex-col">
            <div className="mb-10 text-center">
               <ul className="steps steps-vertical lg:steps-horizontal w-2/3">
                  <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
                     Token
                  </li>
                  <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
                     Sales
                  </li>
                  <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
                     Details
                  </li>
                  <li className={`step ${step >= 4 ? "step-primary" : ""}`}>
                     Review
                  </li>
               </ul>
            </div>
            <div
               className="card bg-base-300 border border-teal-800"
               style={{ minWidth: "47.5rem", maxWidth: "47rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b border-teal-900">
                     <h2 className="px-9 py-4 text-xl">Create Launchpad</h2>
                  </div>
                  <div className="mt-6 px-9">{forms[step - 1]}</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Page;
