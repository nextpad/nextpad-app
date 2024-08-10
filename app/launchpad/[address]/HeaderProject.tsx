import Image from "next/image";
import React from "react";

function HeaderProject() {
   return (
      <>
         <div className="flex justify-between">
            <div className="flex items-center mb-8">
               <div className="flex mr-7">
                  <Image
                     src="/images/truf.webp"
                     width={85}
                     height={85}
                     alt="Logo"
                     className="rounded-full"
                  />
               </div>
               <div className="flex flex-col">
                  <h1 className="text-3xl font-bold">Truflation</h1>
                  <span className="block text-xl mt-1">
                     Oracle for RWA and decentralized infrastructure for Indexes
                     Inflation
                  </span>
               </div>
            </div>
            <div className="flex items-center">
               <Image
                  src="/images/eth.png"
                  className="w-full mb-8"
                  width={64}
                  height={64}
                  alt="Logo"
               />
            </div>
         </div>
      </>
   );
}

export default HeaderProject;
