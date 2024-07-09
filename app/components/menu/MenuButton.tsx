"use client";
import React from "react";
import HomeIcon from "../icons/HomeIcon";
import RocketIcon from "../icons/RocketIcon";
import ScaleIcon from "../icons/ScaleIcon";
import PlusIcon from "../icons/PlusIcon";
import Link from "next/link";
import ShieldIcon from "../icons/ShieldIcon";
import { usePathname } from "next/navigation";
import MenuLink from "./MenuLink";

function MenuButton() {
   const pathName = usePathname();
   return (
      <div>
         <ul className="menu bg-base-300 border-teal-800 border lg:menu-horizontal rounded-full shadow-md">
            <li>
               <MenuLink
                  icon={HomeIcon}
                  href="/"
                  corner="left"
                  active={pathName == "/"}
               >
                  Home
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={RocketIcon}
                  href="/launchpad"
                  corner="middle"
                  active={pathName == "/launchpad"}
               >
                  Launchpad
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={PlusIcon}
                  href="/minter"
                  corner="middle"
                  active={pathName == "/minter"}
               >
                  New Token
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={ScaleIcon}
                  href="/governance"
                  corner="middle"
                  active={pathName == "/governance"}
               >
                  Governance
               </MenuLink>
            </li>
            <li>
               <MenuLink
                  icon={ShieldIcon}
                  href="/locker"
                  corner="right"
                  active={pathName == "/locker"}
               >
                  Locker
               </MenuLink>
            </li>
         </ul>
      </div>
   );
}

export default MenuButton;
