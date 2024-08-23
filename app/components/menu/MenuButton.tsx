"use client";
import React, { useEffect, useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import RocketIcon from "../icons/RocketIcon";
import ScaleIcon from "../icons/ScaleIcon";
import PlusIcon from "../icons/PlusIcon";
import Link from "next/link";
import ShieldIcon from "../icons/ShieldIcon";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";
import XMarkIcon from "../icons/XMarkIcon";
import SquaresIcon from "../icons/SquaresIcon";

function MenuButton() {
   const pathName = usePathname();
   const [closed, setClosed] = useState(false);

   useEffect(() => {
      const locClose = localStorage.getItem("closedMenu");
      if (locClose === null) {
         localStorage.setItem("closedMenu", "0");

         setClosed(false);
      } else {
         setClosed(locClose == "1" ? true : false);
      }
      console.log(locClose);
   }, []);

   const toggleMenu = (e: any) => {
      e.preventDefault();
      setClosed((prev) => !prev);
      localStorage.setItem("closedMenu", closed ? "0" : "1");
   };

   let elMenu = (
      <div className="flex justify-center p-4 mt-auto z-50 sticky bottom-0">
         <ul className="menu bg-base-100 border-base-300 border-2 lg:menu-horizontal rounded-md shadow-md shadow-base-300">
            <li>
               <MenuLink icon={HomeIcon} href="/" active={pathName == "/"}>
                  Home
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={RocketIcon}
                  href="/launchpad"
                  active={pathName == "/launchpad"}
               >
                  Launchpad
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={PlusIcon}
                  href="/minter"
                  active={pathName == "/minter"}
               >
                  New Token
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={ScaleIcon}
                  href="/governance"
                  active={pathName == "/governance"}
               >
                  Governance
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={ShieldIcon}
                  href="/locker/token"
                  active={
                     pathName == "/locker/token" ||
                     pathName == "/locker/liquidity"
                  }
               >
                  Locker
               </MenuLink>
            </li>
            <li>
               <a href="#" onClick={toggleMenu}>
                  <XMarkIcon classList="size-6 text-rose-500" />
               </a>
            </li>
         </ul>
      </div>
   );

   if (closed) {
      elMenu = (
         <div className="flex justify-center p-4 mt-auto z-50 sticky bottom-0">
            <button
               onClick={toggleMenu}
               className="btn bg-base-100 border-base-300 border rounded-md shadow-md shadow-base-300 px-5"
            >
               <SquaresIcon classList="size-7 text-purple-600" />
            </button>
         </div>
      );
   }

   return <>{elMenu}</>;
}

export default MenuButton;
