"use client";
import React from "react";
import { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import { LaunchpadData, MetaData } from "./forms/ILaunchpad";
import BasicForm from "./forms/BasicForm";
import ReviewForm from "./forms/ReviewForm";
import moment from "moment";
import Context from "./Context";

const DetailForm = dynamic(() => import("./forms/DetailForm"), {
   ssr: false,
});
const TokenomicsForm = dynamic(() => import("./forms/TokenomicsForm"), {
   ssr: false,
});

function Wrapper() {
   const [step, setStep] = useState(1);
   const [network, setNetwork] = useState(1115);
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
   });
   const [metadata, setMetadata] = useState<MetaData>({
      // detailed info
      projectName: "",
      shortDesc: "",
      description: "",
      tokenomics: [
         {
            name: "unknown",
            amount: "0",
         },
      ],
      website: "",
      twitter: "",
      telegram: "",
      docs: "",
   });
   const [supply, setSupply] = useState("0");
   const [balance, setBalance] = useState("");
   const [tokenInfo, setTokenInfo] = useState<string[]>(["", "", ""]);

   const [logo, setLogo] = useState("");
   const [banners, setBanners] = useState<string[]>(["", "", "", ""]);

   const props = {
      network: network,
      setNetwork: setNetwork,
      step: step,
      setStep: setStep,
      launchpadData: launchpadData,
      setLaunchpadData: setLaunchpadData,
      setLogo: setLogo,
      logo,
      metadata: metadata,
      setMetadata: setMetadata,
      banners: banners,
      setBanners,
      supply,
      setSupply,
      balance,
      setBalance,
      tokenInfo,
      setTokenInfo,
   };

   const forms: ReactElement[] = [
      <BasicForm key={0} />,
      <DetailForm key={1} />,
      <TokenomicsForm key={2} />,
      <ReviewForm key={3} />,
   ];
   return (
      <Context.Provider value={props}>
         <div className="flex flex-col">
            <div className="mb-10 text-center">
               <ul className="steps steps-vertical lg:steps-horizontal w-4/5 hover:cursor-pointer">
                  <li
                     className={`step ${step >= 1 ? "step-primary" : ""}`}
                     onClick={() => setStep(1)}
                  >
                     Token & Sales
                  </li>
                  <li
                     className={`step ${step >= 2 ? "step-primary" : ""}`}
                     onClick={() => setStep(2)}
                  >
                     Details
                  </li>
                  <li
                     className={`step ${step >= 3 ? "step-primary" : ""}`}
                     onClick={() => setStep(3)}
                  >
                     Tokenomics
                  </li>
                  <li
                     className={`step ${step >= 4 ? "step-primary" : ""}`}
                     onClick={() => setStep(4)}
                  >
                     Review
                  </li>
               </ul>
            </div>
            <div
               className="card bg-base-100 border-2 border-base-300"
               style={{ minWidth: "47.5rem", maxWidth: "47rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b-2 border-base-300">
                     <h2 className="px-9 py-4 text-xl">Create Launchpad</h2>
                  </div>
                  <div className="mt-6 px-9">{forms[step - 1]}</div>
               </div>
            </div>
         </div>
      </Context.Provider>
   );
}

export default Wrapper;
