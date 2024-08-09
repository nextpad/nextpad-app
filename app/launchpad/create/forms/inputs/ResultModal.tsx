"use client";
import DuplicateIcon from "@/app/components/icons/DuplicateIcon";
import React, { useRef, useState } from "react";

type Props = {
   address: string;
};

function ResultModal(props: Props) {
   const boardLink = `${process.env.NEXT_PUBLIC_BASE_URL}/launchpad/project/${props.address}`;

   const [alert, setAlert] = useState(false);
   let intervalId = useRef<NodeJS.Timeout>();

   function copyAddress() {
      navigator.clipboard.writeText(boardLink);
      setAlert(true);
      intervalId.current = setInterval(() => {
         setAlert(() => false);
         clearInterval(intervalId.current);
      }, 3000);
   }
   return (
      <>
         <dialog id="result_modal" className="modal">
            {alert && (
               <div className="toast toast-top toast-center">
                  <div className="alert alert-info">
                     <span>Link copied!</span>
                  </div>
               </div>
            )}
            <div className="modal-box" style={{ minWidth: "42rem" }}>
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                     ✕
                  </button>
               </form>
               <h3 className="font-bold text-lg">Congratulations!</h3>
               <p className="py-4">
                  Your project launchpad have successfully created:
                  <input
                     type="text"
                     className="input input-bordered mt-4 w-full"
                     placeholder="CA"
                     value={boardLink}
                     readOnly={true}
                  />
                  <button className="btn btn-normal mt-4" onClick={copyAddress}>
                     <DuplicateIcon classList="size-4" /> Copy Link
                  </button>
               </p>
            </div>
         </dialog>
      </>
   );
}

export default ResultModal;
