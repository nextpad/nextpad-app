"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink() {
   const pathName = usePathname();
   return (
      <>
         <ul className="menu menu-horizontal px-1">
            <li>
               <Link
                  href="/faucet"
                  className={pathName == "/faucet" ? "text-purple-700" : ""}
               >
                  Faucet
               </Link>
            </li>
            <li>
               <a href="https://github.com/toldapp" target="_blank">
                  Github
               </a>
            </li>
            <li>
               <a href="https://twitter.com/tol_dapp" target="_blank">
                  Twitter
               </a>
            </li>
         </ul>
      </>
   );
}

export default NavLink;
