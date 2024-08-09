import { createContext } from "react";
import { Props } from "./forms/ILaunchpad";

const Context = createContext<Props>({
   network: 0,
   step: 0,
   launchpadData: {
      // basic
      address: "",
      symbol: "TEST",
      allocation: "0",
      rewardTol: "0",
      // sales
      minBuy: "0",
      maxBuy: "0",
      maxAllocation: "0",
      priceNative: "0",
      startDate: "",
      endDate: "",
   },
   metadata: {
      // detailed info
      projectName: "",
      shortDesc: "",
      description: "",
      tokenomics: [
         {
            name: "unknown",
            amount: "0",
         },
      ],
      website: "",
      twitter: "",
      telegram: "",
      docs: "",
   },
   banners: ["", "", "", ""],
   tokenInfo: [""],
   logo: "",
   balance: "",
   supply: "",
   setNetwork: () => {},
   setStep: () => {},
   setLaunchpadData: () => {},
   setMetadata: () => {},
   setBanners: () => {},
   setSupply: () => {},
   setBalance: () => {},
   setTokenInfo: () => {},
   setLogo: function (data: any): void {},
});

export default Context;
