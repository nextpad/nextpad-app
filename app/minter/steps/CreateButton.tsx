import React, { useEffect, useRef, useState } from "react";

import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";
import { Contract } from "ethers";
import { tokenFactoryAddress } from "@/app/components/constants";
import { TokenData } from "./ITokenData";
import { MetaToken } from "../page";
import ResultModal from "./ResultModal";

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

function CreateButton(props: Props) {
   const { isConnected } = useWeb3ModalAccount();
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
         const fee = await factoryContract.baseFee();
         const result: any = await factoryContract.createToken(
            data.name,
            data.symbol,
            ethers.parseEther(data.supply.toString()),
            {
               value: fee,
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
      } catch (err: any) {
         console.log(err.message);
         setLoading(false);
         setErrorAlert(true);
         intervalId.current = setInterval(() => {
            setErrorAlert((prev) => false);
            clearInterval(intervalId.current);
         }, 3000);
      }
   }

   async function saveToDatabase(address: string, hash: string) {
      const saved = await props.onSaveDatabase(
         {
            name: props.tokenData.name,
            logo: props.logo,
            symbol: props.tokenData.symbol,
            supply: props.tokenData.supply.toString(),
            blockchain: props.network === 656476 ? 1 : 2,
            address: address,
            description: props.tokenData.description,
            web: props.tokenData.website,
            twitter: props.tokenData.twitter,
            telegram: props.tokenData.telegram,
         },
         hash
      );
   }

   function openModal() {
      const myModal: any = document.getElementById("token_modal");

      if (myModal === null) {
         return;
      }

      myModal.showModal();
   }
   return (
      <div>
         {errorAlert && (
            <div className="toast toast-top toast-end">
               <div className="alert alert-error">
                  <span>Transaction failed!</span>
               </div>
            </div>
         )}
         <button
            className="btn disabled:bg-purple-800 disabled:text-slate-300 btn-normal mt-2"
            disabled={loading}
            onClick={createToken}
         >
            {loading && (
               <span className="loading loading-spinner loading-md"></span>
            )}{" "}
            Create Token
         </button>

         <ResultModal address={ca} />
      </div>
   );
}

export default CreateButton;
