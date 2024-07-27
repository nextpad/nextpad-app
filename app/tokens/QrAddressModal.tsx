"use client";
import React from "react";
import QrCodeIcon from "../components/icons/QrCodeIcon";
import Image from "next/image";

function QrAddressModal({ address }: { address: string }) {
   function openModal() {
      const myModal: any = document.getElementById("qr_modal");

      if (myModal === null) {
         return;
      }

      myModal.showModal();
   }
   return (
      <div className="inline">
         <dialog id="qr_modal" className="modal">
            <div className="modal-box">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                     ✕
                  </button>
               </form>
               <h3 className="font-bold text-lg">QR Address</h3>
               <div className="mt-5 flex justify-center">
                  <Image
                     src={`https://image-charts.com/chart?chs=300x300&cht=qr&chl=${address}&choe=UTF-8`}
                     width={300}
                     height={300}
                     alt="qr"
                  />
               </div>
            </div>
         </dialog>
         <button onClick={openModal}>
            <QrCodeIcon classList="size-4 inline hover:text-teal-600 ml-3 mb-1 cursor-pointer" />
         </button>
      </div>
   );
}

export default QrAddressModal;
