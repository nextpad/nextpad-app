import React from "react";
import HomeIcon from "../icons/HomeIcon";
import RocketIcon from "../icons/RocketIcon";
import ScaleIcon from "../icons/ScaleIcon";
import PlusIcon from "../icons/PlusIcon";
import Link from "next/link";
import ShieldIcon from "../icons/ShieldIcon";

function MenuButton() {
   return (
      <div>
         <ul className="menu bg-base-200 border-gray-300 border lg:menu-horizontal rounded-3xl shadow-sm">
            <li>
               <Link href="/" className="hover:rounded-r-none">
                  <HomeIcon />
                  Home
               </Link>
            </li>
            <li>
               <Link
                  href="/launchpad"
                  className="hover:rounded-r-none hover:rounded-l-none"
               >
                  <RocketIcon />
                  Launchpad
               </Link>
            </li>
            <li>
               <Link
                  href="/minter"
                  className="hover:rounded-r-none hover:rounded-l-none"
               >
                  <PlusIcon classList="size-5" />
                  New Token
               </Link>
            </li>
            <li>
               <Link
                  href="/governance"
                  className="hover:rounded-r-none hover:rounded-l-none"
               >
                  <ScaleIcon classList="size-5" />
                  Governance
               </Link>
            </li>
            <li>
               <Link href="/locker" className="hover:rounded-l-none">
                  <ShieldIcon classList="size-5" />
                  Locker
               </Link>
            </li>
         </ul>
      </div>
   );
}

export default MenuButton;
