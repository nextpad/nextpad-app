"use client";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

function Navbar() {
   const { open } = useWeb3Modal();
   const { chainId, status, isConnected } = useWeb3ModalAccount();
   return (
      <>
         <div className="navbar bg-base-300 py-3 border-b-2 border-teal-800 px-10">
            <div className="navbar-start">
               <div className="items-center">
                  <a href="/" className="btn btn-ghost text-xl">
                     <Image
                        src="/images/logo.png"
                        alt=""
                        width={48}
                        height={48}
                     />
                  </a>
               </div>
            </div>
            <div className="navbar-end">
               <NavLink />
               {isConnected ? (
                  <w3m-button />
               ) : (
                  <button
                     className="ml-10 btn bg-teal-600 text-white rounded-md hover:bg-teal-700"
                     onClick={() => open()}
                  >
                     Connect Wallet
                  </button>
               )}
            </div>
         </div>
      </>
   );
}

export default Navbar;
