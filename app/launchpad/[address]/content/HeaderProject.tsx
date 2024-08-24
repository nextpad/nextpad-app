"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Context from "../Context";

function HeaderProject() {
   const ctx = useContext(Context);
   return (
      <>
         <div className="flex justify-between">
            <div className="flex items-center mb-8">
               <div className="flex mr-7">
                  <Image
                     src={ctx.data.logo}
                     width={85}
                     height={85}
                     alt="Logo"
                     className="rounded-full"
                  />
               </div>
               <div className="flex flex-col">
                  <h1 className="text-3xl font-bold">
                     {ctx.data.metadata.projectName}
                  </h1>
                  <span className="block text-xl mt-1">
                     {ctx.data.metadata.shortDesc}
                  </span>
               </div>
            </div>
            <div className="flex items-center">
               <Image
                  src="/images/core-dao.png"
                  className="w-full mb-8"
                  width={48}
                  height={48}
                  alt="Logo"
               />
            </div>
         </div>
      </>
   );
}

export default HeaderProject;
