import React from "react";
import { TokenData } from "./ITokenData";
import Image from "next/image";
import { MetaToken } from "../page";
import CreateButton from "./CreateButton";

interface Props {
   step: number;
   setStep: (id: number) => void;
   tokenData: TokenData;
   network: number;
   logo: string;
   setTokenData: (data: any) => void;
   onSaveDatabase: (
      data: MetaToken,
      hash: string
   ) => Promise<{ id: number } | null>;
}

function DeployForm(props: Props) {
   return (
      <>
         <div className="flex flex-col">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Final Review
               </label>

               <div className="flex">
                  <div className="flex-2 flex-col">
                     <div className="card bg-base-100 my-5">
                        <div className="flex justify-between">
                           <div className="flex">
                              <div className="card-body p-6">
                                 <div className="card-title">Token Name</div>
                                 <p className="text-lg text-slate-200">
                                    {props.tokenData.name}
                                 </p>
                              </div>
                           </div>
                           <div className="flex p-6">
                              <Image
                                 src={props.logo}
                                 width={72}
                                 height={72}
                                 className="rounded-full"
                                 alt="logo"
                              />
                           </div>
                        </div>
                     </div>

                     <div className="card bg-base-100 my-5">
                        <div className="flex justify-between">
                           <div className="flex">
                              <div className="card-body p-6">
                                 <div className="card-title">
                                    Blockchain Network
                                 </div>
                                 <p className="text-lg text-slate-200">
                                    {props.network === 1115
                                       ? "Core"
                                       : "Sepolia"}
                                 </p>
                              </div>
                           </div>
                           <div className="flex p-6">
                              <Image
                                 src={`/images/${
                                    props.network === 1115
                                       ? "core-dao.png"
                                       : "eth.png"
                                 }`}
                                 width={72}
                                 height={72}
                                 className="rounded-md"
                                 alt="logo"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1 ml-5">
                     <div
                        className="card my-5 bg-base-100"
                        style={{ minHeight: "15.5rem", maxHeight: "15.5rem" }}
                     >
                        <div className="card-body">
                           <div className="card-title">Description</div>
                           <p className="text-lg text-slate-200">
                              {props.tokenData.description}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="card mb-5 bg-base-100 -mt-1">
                  <div className="card-body p-6">
                     <div className="card-title">Total Supply</div>
                     <p className="text-lg text-slate-200">
                        {props.tokenData.supply.toLocaleString()}{" "}
                        <b className="ml-1">{props.tokenData.symbol}</b>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex mt-2 pb-10 justify-between">
            <button
               className="btn bg-base-100 border border-gray-700 px-10 hover:border-gray-700"
               onClick={() => props.setStep(2)}
            >
               Back
            </button>
            <CreateButton {...props} />
         </div>
      </>
   );
}

export default DeployForm;
