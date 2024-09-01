"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
   network: number;
   setNetwork: (id: number) => void;
}

function NetworkButton(props: Props) {
   const classList =
      "btn bg-base-100 hover:border hover:border-purple-700 mr-5";

   return (
      <div>
         <button
            onClick={() => props.setNetwork(656476)}
            className={`${classList} ${
               props.network == 656476
                  ? "border-2 border-base-300 bg-base-200"
                  : ""
            }`}
         >
            <Image
               src="/images/open-campus.svg"
               width={20}
               height={20}
               alt="logo"
            />
            Educhain
         </button>
         <button
            onClick={() => props.setNetwork(11155111)}
            className={`${classList} ${
               props.network == 11155111
                  ? "border-2 border-base-300 bg-base-200"
                  : ""
            }`}
         >
            <Image src="/images/eth.png" width={20} height={20} alt="logo" />
            Sepolia
         </button>
      </div>
   );
}

export default NetworkButton;
