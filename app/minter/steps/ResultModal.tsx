"use client";
import DuplicateIcon from "@/app/components/icons/DuplicateIcon";
import React, { useRef, useState } from "react";

type Props = {
   address: string;
};

function ResultModal(props: Props) {
   const [alert, setAlert] = useState(false);
   let intervalId = useRef<NodeJS.Timeout>();

   function copyAddress() {
      navigator.clipboard.writeText(props.address);
      setAlert(true);
      intervalId.current = setInterval(() => {
         setAlert((prev) => false);
         clearInterval(intervalId.current);
      }, 3000);
   }
   return (
      <>
         <dialog id="token_modal" className="modal">
            {alert && (
               <div className="toast toast-top toast-center">
                  <div className="alert alert-info">
                     <span>Token address copied!</span>
                  </div>
               </div>
            )}
            <div className="modal-box">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                     ✕
                  </button>
               </form>
               <h3 className="font-bold text-lg">Congratulations!</h3>
               <p className="py-4">
                  Your token have successfully created with the contract
                  address:
                  <input
                     type="text"
                     className="input input-bordered mt-4 w-full"
                     placeholder="CA"
                     value={props.address}
                     readOnly={true}
                  />
                  <button className="btn btn-normal mt-4" onClick={copyAddress}>
                     <DuplicateIcon classList="size-4" /> Copy Address
                  </button>
               </p>
            </div>
         </dialog>
      </>
   );
}

export default ResultModal;
