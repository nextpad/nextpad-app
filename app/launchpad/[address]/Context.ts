import { createContext } from "react";
import { MetadataResponse } from "./page";

interface Project {
   address: string;
   data: MetadataResponse;
}

const Context = createContext<Project>({
   address: "",
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
