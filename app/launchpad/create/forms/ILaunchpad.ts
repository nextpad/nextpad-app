type Tokenomics = {
   name: string;
   amount: string;
};

export interface LaunchpadData {
   address: string;
   symbol: string;
   allocation: string;
   maxAllocation: string;
   minBuy: string;
   maxBuy: string;
   priceNative: string;
   rewardTol: string;
   startDate: string;
   endDate: string;
   // Information
   projectName: string;
   shortDesc: string;
   banners: string[];
   description: string;
   tokenomics: Tokenomics[];
}

export type Props = {
   network: number;
   step: number;
   launchpadData: LaunchpadData;
   setNetwork: (id: number) => void;
   setStep: (id: number) => void;
   setLaunchpadData: (data: any) => void;
};
