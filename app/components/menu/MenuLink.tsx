import Link from "next/link";
import React from "react";

function MenuLink(props: any) {
   const active = props.active ? "text-purple-700" : "";
   const Icon = props.icon;

   return (
      <>
         <Link href={props.href} className={`${active}`}>
            <Icon classList="size-6" />
            {props.children}
         </Link>
      </>
   );
}

export default MenuLink;
