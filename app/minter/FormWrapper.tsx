"use client";
import { useState } from "react";
import BasicForm from "./steps/BasicForm";
import { TokenData } from "./steps/ITokenData";
import DeployForm from "./steps/DeployForm";
import ChevronDownIcon from "../components/icons/ChevronDownIcon";
import dynamic from "next/dynamic";
import { MetaToken } from "./page";

const InfoForm = dynamic(() => import("./steps/InfoForm"), {
   ssr: false,
});

type Props = {
   onSaveDatabase: (
      data: MetaToken,
      hash: string
   ) => Promise<{ id: number } | null>;
};

function FormWrapper(props: Props) {
   const [step, setStep] = useState(1);
   const [network, setNetwork] = useState(656476);
   const [logo, setLogo] = useState("");
   const [tokenData, setTokenData] = useState<TokenData>({
      // basic
      name: "",
      symbol: "",
      supply: 0,
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
            logo={logo}
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
            onSaveDatabase={props.onSaveDatabase}
         />
      );
   }
   return (
      <>
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
               className="card bg-base-100 border-base-300 border-2 shadow-lg"
               style={{ minWidth: "47rem", maxWidth: "47rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b-2 border-base-300">
                     <h2 className="px-9 py-4 text-xl">Create Token</h2>
                  </div>
                  <div className="mt-6 px-9">{currentForm}</div>
               </div>
            </div>
            <div className="text-center mt-6">
               <a href="/tokens" className="btn btn-normal">
                  <ChevronDownIcon classList="size-5" /> Explore Tokens
               </a>
            </div>
         </div>
      </>
   );
}

export default FormWrapper;
