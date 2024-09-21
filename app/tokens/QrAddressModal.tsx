"use client";
import React from "react";
import QrCodeIcon from "../components/icons/QrCodeIcon";
import Image from "next/image";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";

function QrAddressModal({
   address,
   decimals,
   symbol,
   logo,
}: {
   address: string;
   decimals: number;
   symbol: string;
   logo: string;
}) {
   const { walletProvider } = useWeb3ModalProvider();

   function openModal() {
      const myModal: any = document.getElementById("qr_modal_" + address);

      if (myModal === null) {
         return;
      }

      myModal.showModal();
   }

   async function addToken() {
      try {
         // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
         const wasAdded = await walletProvider?.request({
            method: "wallet_watchAsset",
            params: {
               type: "ERC20",
               options: {
                  // The address of the token.
                  address,
                  // A ticker symbol or shorthand, up to 5 characters.
                  symbol,
                  // The number of decimals in the token.
                  decimals,
                  // A string URL of the token logo.
                  image: logo,
               },
            },
         });
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div className="inline">
         <dialog id={`qr_modal_${address}`} className="modal">
            <div className="modal-box">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                     ✕
                  </button>
               </form>
               <h3 className="font-bold text-lg">QR Address</h3>
               <div className="mt-5 flex flex-col items-center justify-center">
                  <Image
                     src={`https://image-charts.com/chart?chs=300x300&cht=qr&chl=${address}&choe=UTF-8`}
                     width={300}
                     height={300}
                     alt="qr"
                  />

                  <button
                     className="btn-normal mt-5 py-2 rounded-md font-semibold"
                     onClick={addToken}
                  >
                     Import ${symbol} to Wallet
                  </button>
               </div>
            </div>
         </dialog>
         <button onClick={openModal}>
            <QrCodeIcon classList="size-4 inline hover:text-gray-600 ml-3 mb-1 cursor-pointer" />
         </button>
      </div>
   );
}

export default QrAddressModal;
