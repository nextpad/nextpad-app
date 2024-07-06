import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";

function Navbar() {
   return (
      <>
         <div className="navbar bg-base-200 rounded-md border-gray-300 py-3 border px-10">
            <div className="navbar-start">
               <div className="items-center">
                  <a href="/" className="btn btn-ghost text-xl">
                     <Image src="/logo.png" alt="" width={48} height={48} />
                  </a>
               </div>
            </div>
            <div className="navbar-end">
               <NavLink />
               <button className="ml-10 btn bg-teal-600 text-white rounded-md hover:bg-teal-700">
                  Connect Wallet
               </button>
            </div>
         </div>
      </>
   );
}

export default Navbar;
