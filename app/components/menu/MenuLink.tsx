import Link from "next/link";
import React from "react";

function MenuLink(props: any) {
   const corner = {
      left: "rounded-r-none",
      middle: "rounded-r-none rounded-l-none",
      right: "rounded-l-none",
   };
   const active = props.active ? "text-teal-700" : "";
   const Icon = props.icon;

   return (
      <>
         <Link href={props.href} className={`${corner} ${active}`}>
            <Icon classList="size-6" />
            {props.children}
         </Link>
      </>
   );
}

export default MenuLink;
