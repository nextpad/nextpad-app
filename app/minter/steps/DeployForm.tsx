import React, { useEffect, useRef, useState } from "react";
import { TokenData } from "./ITokenData";
import Image from "next/image";
import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";
import { Contract } from "ethers";
import { tokenFactoryAddress } from "@/app/components/constants";
import ResultModal from "./ResultModal";
import { uploadImage } from "@/app/components/helper";
import { MetaToken } from "../page";

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
   const { address, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   const [signer, setSigner] = useState<JsonRpcSigner>();
   const [factoryContract, setFactoryContract] = useState<Contract>();
   const [ca, setCa] = useState("");
   const [loading, setLoading] = useState(false);
   const [errorAlert, setErrorAlert] = useState(false);
   let intervalId = useRef<NodeJS.Timeout>();

   useEffect(() => {
      async function fetchWallet() {
         if (!isConnected || !walletProvider) return;

         const factoryJson = require("./TokenFactory.json");

         const provider = new BrowserProvider(walletProvider);
         const _signer = await provider.getSigner();
         setSigner(_signer);
         setFactoryContract(
            new Contract(tokenFactoryAddress, factoryJson.abi, _signer)
         );
      }

      fetchWallet();
   }, [signer, walletProvider, isConnected]);

   async function getTokenAddress(hash: string) {
      if (!isConnected || !walletProvider) return;

      const provider = new BrowserProvider(walletProvider);
      const tx = await provider.getTransactionReceipt(hash);

      return tx?.logs[0].address;
   }

   async function createToken() {
      if (!isConnected || !factoryContract) return;

      try {
         // Create a token
         setLoading(true);
         const data = props.tokenData;
         const result: any = await factoryContract.createToken(
            data.name,
            data.symbol,
            ethers.parseEther(data.supply.toString()),
            {
               value: ethers.parseEther("0.1"),
            }
         );
         const receipt = await result.wait();
         const tokenAddress = await getTokenAddress(receipt.hash);

         if (!tokenAddress) {
            return;
         }

         setCa(tokenAddress);
         await saveToDatabase(tokenAddress, receipt.hash);
         setLoading(false);
         openModal();
      } catch (err) {
         setLoading(false);
         setErrorAlert(true);
         intervalId.current = setInterval(() => {
            setErrorAlert((prev) => false);
            clearInterval(intervalId.current);
         }, 3000);
      }
   }

   async function saveToDatabase(address: string, hash: string) {
      const img = await uploadImage(
         props.logo.replace("data:image/jpeg;base64,", ""),
         props.tokenData.name
      );
      const saved = await props.onSaveDatabase(
         {
            name: props.tokenData.name,
            logo: img,
            symbol: props.tokenData.symbol,
            supply: props.tokenData.supply.toString(),
            blockchain: props.network === 1115 ? 1 : 2,
            address: address,
            description: props.tokenData.description,
            web: props.tokenData.website,
            twitter: props.tokenData.twitter,
            telegram: props.tokenData.telegram,
         },
         hash
      );
      console.log(saved);
   }

   function openModal() {
      const myModal: any = document.getElementById("token_modal");

      if (myModal === null) {
         return;
      }

      myModal.showModal();
   }

   return (
      <>
         <div className="flex flex-col">
            {errorAlert && (
               <div className="toast toast-top toast-end">
                  <div className="alert alert-error">
                     <span>Transaction failed!</span>
                  </div>
               </div>
            )}
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
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={createToken}
            >
               {loading && (
                  <span className="loading loading-spinner loading-md"></span>
               )}{" "}
               Create Token
            </button>
            <ResultModal address={ca} />
         </div>
      </>
   );
}

export default DeployForm;
