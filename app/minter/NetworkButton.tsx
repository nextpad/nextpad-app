"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
   network: number;
   setNetwork: (id: number) => void;
}

function NetworkButton(props: Props) {
   const classList = "btn bg-base-100 hover:border hover:border-teal-700 mr-5";

   return (
      <div>
         <button
            onClick={() => props.setNetwork(1115)}
            className={`${classList} ${
               props.network == 1115 ? "border border-teal-700" : ""
            }`}
         >
            <Image
               src="/images/core-dao.png"
               width={20}
               height={20}
               alt="logo"
            />
            Core
         </button>
         <button
            onClick={() => props.setNetwork(11155111)}
            className={`${classList} ${
               props.network == 11155111 ? "border border-teal-700" : ""
            }`}
         >
            <Image src="/images/eth.png" width={20} height={20} alt="logo" />
            Sepolia
         </button>
      </div>
   );
}

export default NetworkButton;
