"use client";
import { createContext } from "react";
import { MetadataResponse } from "./page";

interface Project {
   address: string;
   blockchain: number;
   data: MetadataResponse;
}

const Context = createContext<Project>({
   address: "",
   blockchain: 0,
   data: {
      metadata: {
         description: "",
         docs: "",
         projectName: "",
         shortDesc: "",
         telegram: "",
         tokenomics: [],
         twitter: "",
         website: "",
      },
      banners: [""],
      logo: "",
   },
});

export default Context;
