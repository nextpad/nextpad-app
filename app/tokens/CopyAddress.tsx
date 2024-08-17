"use client";
import React, { useRef, useState } from "react";
import DuplicateIcon from "../components/icons/DuplicateIcon";
import ClipCheckIcon from "../components/icons/ClipCheckIcon";

function CopyAddress({ address }: { address: string }) {
   const [checked, setChecked] = useState(false);
   let inId = useRef<NodeJS.Timeout>();

   function copyToClipboard() {
      setChecked(true);
      navigator.clipboard.writeText(address);
      inId.current = setInterval(() => {
         setChecked((prev) => false);
         clearInterval(inId.current);
      }, 1000);
   }

   return (
      <div className="inline">
         {!checked ? (
            <button onClick={copyToClipboard}>
               <DuplicateIcon classList="size-4 inline hover:text-teal-600 ml-3 mb-1 cursor-pointer" />
            </button>
         ) : (
            <ClipCheckIcon classList="size-4 inline text-teal-600 ml-3 mb-1 cursor-pointer" />
         )}
      </div>
   );
}

export default CopyAddress;
