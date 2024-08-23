/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
   useWeb3ModalProvider,
   useWeb3ModalAccount,
   useWeb3Modal,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract, ethers } from "ethers";
import { faucetAddress, tokenAddress } from "../components/constants";
import { JsonRpcSigner } from "ethers";
import AddTOL from "./AddTOL";

function Claim() {
   const [faucetContract, setFaucetContract] = useState<Contract>();
   const [signer, setSigner] = useState<JsonRpcSigner>();
   const [tolBalance, setTolBalance] = useState("0");
   const [timeLeft, setTimeLeft] = useState<{
      minutes: string | number;
      seconds: string | number;
   }>({
      minutes: "00",
      seconds: "00",
   });
   let intervalId = useRef<NodeJS.Timeout>();
   let intErId = useRef<NodeJS.Timeout>();
   const [errorAlert, setErrorAlert] = useState(false);
   const [loading, setLoading] = useState(false);

   const faucetABI = require("./faucetABI.json");
   const { open } = useWeb3Modal();
   const { address, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   useEffect(() => {
      async function getTimeToClaim(_signer: JsonRpcSigner) {
         if (!isConnected || !faucetContract) return;

         if (intervalId.current) clearInterval(intervalId.current);

         const delay = await faucetContract.claimInterval();
         const last = await faucetContract.lastClaimed(address);

         let diff = Date.now() - parseInt(last) * 1000;
         diff = parseInt(delay) * 1000 - diff;

         function calculateTimeLeft() {
            if (diff <= 0) {
               clearInterval(intervalId.current);
               return { minutes: "00", seconds: "00" };
            }

            const minutes = Math.floor(diff / 1000 / 60);
            const seconds = Math.floor((diff / 1000) % 60);

            return {
               minutes: minutes > 9 ? minutes : `0${minutes}`,
               seconds: seconds > 9 ? seconds : `0${seconds}`,
            };
         }

         setTimeLeft(calculateTimeLeft());

         intervalId.current = setInterval(() => {
            diff -= 1000;
            setTimeLeft(calculateTimeLeft());
         }, 1000);
      }

      async function fetchWallet() {
         if (!isConnected || !walletProvider) return;

         const provider = new BrowserProvider(walletProvider);
         const _signer = await provider.getSigner();
         setSigner(_signer);
         setFaucetContract(new Contract(faucetAddress, faucetABI.abi, _signer));

         await getTimeToClaim(_signer);
      }

      fetchWallet();
      getBalance();

      return () => {
         if (intervalId) clearInterval(intervalId.current);
      };
   }, [signer, walletProvider]);

   const claimToken = async () => {
      if (!isConnected) {
         await open();
         return;
      }
      if (!faucetContract) return;

      try {
         setLoading(true);
         const tx = await faucetContract.claimTokens();
         await tx.wait();
         await getBalance();
         setLoading(false);
      } catch (err) {
         if (err instanceof Error) {
            setErrorAlert(true);
            intErId.current = setInterval(() => {
               setErrorAlert((prev) => false);
               clearInterval(intErId.current);
            }, 3000);
         }
         setLoading(false);
      }
   };

   async function getBalance() {
      if (!isConnected || !signer) return;

      const token = new Contract(
         tokenAddress,
         ["function balanceOf(address) view returns (uint)"],
         signer
      );
      const myBalance = await token.balanceOf(address);
      setTolBalance(ethers.formatEther(myBalance.toString()).toString());
   }

   return (
      <>
         {errorAlert && (
            <div className="toast toast-top toast-end">
               <div className="alert alert-error">
                  <span>Transaction failed!</span>
               </div>
            </div>
         )}
         <AddTOL />
         <div className="text-center mt-14">
            <h3 className="text-5xl text-purple-600 mt-6">
               {timeLeft.minutes} : {timeLeft.seconds}
            </h3>
            <p className="mt-8">
               Balance: <b>{tolBalance} NXP</b>
            </p>
            <button
               className="btn disabled:bg-purple-800 disabled:text-slate-300 btn-normal mt-8"
               onClick={claimToken}
               disabled={timeLeft.minutes != "00" || loading ? true : false}
            >
               {loading && (
                  <span className="loading loading-spinner loading-sm"></span>
               )}{" "}
               {isConnected ? "Claim $NXP" : "Connect Wallet"}
            </button>
         </div>
      </>
   );
}

export default Claim;
