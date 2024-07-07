import Link from "next/link";
import React from "react";

function NavLink() {
   return (
      <>
         <ul className="menu menu-horizontal px-1">
            <li>
               <Link href="/faucet">Faucet</Link>
            </li>
            <li>
               <a href="https://github.com/toldapp" target="_blank">
                  Github
               </a>
            </li>
            <li>
               <a href="https://twitter.com/tol_dapp">Twitter</a>
            </li>
         </ul>
      </>
   );
}

export default NavLink;
