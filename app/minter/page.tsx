"use client";
import { useState } from "react";
import BasicForm from "./steps/BasicForm";
import { TokenData } from "./steps/ITokenData";
import InfoForm from "./steps/InfoForm";
import DeployForm from "./steps/DeployForm";

function Page() {
   const [step, setStep] = useState(1);
   const [network, setNetwork] = useState(1);
   const [logo, setLogo] = useState(null);
   const [tokenData, setTokenData] = useState<TokenData>({
      // basic
      name: "",
      symbol: "",
      supply: 0,
      decimals: "18",
      // detailed info
      description: "",
      website: "",
      twitter: "",
      telegram: "",
   });

   let currentForm = (
      <BasicForm
         step={step}
         setStep={setStep}
         network={network}
         setNetwork={setNetwork}
         tokenData={tokenData}
         setTokenData={setTokenData}
      />
   );

   if (step === 2) {
      currentForm = (
         <InfoForm
            step={step}
            setStep={setStep}
            tokenData={tokenData}
            setLogo={setLogo}
            setTokenData={setTokenData}
         />
      );
   }

   if (step === 3) {
      currentForm = (
         <DeployForm
            step={step}
            setStep={setStep}
            logo={logo}
            network={network}
            tokenData={tokenData}
            setTokenData={setTokenData}
         />
      );
   }

   return (
      <div className="min-h-screen flex justify-center mt-3">
         <div className="flex flex-col">
            <div className="mb-10 text-center">
               <ul className="steps steps-vertical lg:steps-horizontal w-1/2">
                  <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
                     Basic
                  </li>
                  <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
                     Information
                  </li>
                  <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
                     Deploy
                  </li>
               </ul>
            </div>
            <div
               className="card bg-base-300 border border-teal-800"
               style={{ minWidth: "47rem", maxWidth: "47rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b border-teal-900">
                     <h2 className="px-9 py-4 text-xl">Create Token</h2>
                  </div>
                  <div className="mt-6 px-9">{currentForm}</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Page;
