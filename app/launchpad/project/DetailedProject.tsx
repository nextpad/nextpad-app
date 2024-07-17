"use client";
import React from "react";
import dynamic from "next/dynamic";
import Description from "./content/Description";
import TokenInfo from "./content/TokenInfo";
const Tokenomics = dynamic(() => import("./content/Tokenomics"), {
   ssr: false,
});

function DetailedProject() {
   const [menu, setMenu] = React.useState(1);

   let content = <Description />;

   if (menu === 2) {
      content = <TokenInfo />;
   }

   if (menu === 3) {
      content = <Tokenomics />;
   }

   return (
      <>
         <div role="tablist" className="tabs tabs-bordered max-w-lg mt-12">
            <a
               role="tab"
               className={`tab text-lg ${menu == 1 ? "tab-active" : ""}`}
               onClick={() => setMenu(1)}
            >
               Description
            </a>
            <a
               role="tab"
               className={`tab text-lg ${menu == 2 ? "tab-active" : ""}`}
               onClick={() => setMenu(2)}
            >
               Token Information
            </a>
            <a
               role="tab"
               className={`tab text-lg ${menu == 3 ? "tab-active" : ""}`}
               onClick={() => setMenu(3)}
            >
               Tokenomics
            </a>
         </div>
         <div className="mt-6">{content}</div>
      </>
   );
}

export default DetailedProject;
