"use client";
import React, { createContext } from "react";
import Carousel from "./content/Carousel";
import HeaderProject from "./content/HeaderProject";
import DetailedProject from "./DetailedProject";
import Context from "./Context";
import { MetadataResponse } from "./page";
import SideCards from "./SideCards";

type Props = {
   address: string;
   blockchain: number;
   data: MetadataResponse;
};

function Wrapper(props: Props) {
   const contextValue: Props = {
      address: props.address,
      data: props.data,
      blockchain: props.blockchain,
   };

   return (
      <>
         <Context.Provider value={contextValue}>
            <div className="min-h-screen">
               <HeaderProject />
               <div className="flex flex-grow">
                  <div className="flex w-3/5 flex-col mr-12">
                     <Carousel />

                     <DetailedProject />
                  </div>
                  <div className="flex flex-col w-2/5">
                     <SideCards />
                  </div>
               </div>
            </div>
         </Context.Provider>
      </>
   );
}

export default Wrapper;
