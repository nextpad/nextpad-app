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
}

export interface MetaData {
   // Information
   projectName: string;
   shortDesc: string;
   description: string;
   tokenomics: Tokenomics[];
   website: string;
   twitter: string;
   telegram: string;
   docs: string;
}

export type Props = {
   network: number;
   step: number;
   launchpadData: LaunchpadData;
   metadata: MetaData;
   banners: string[];
   logo: string;
   tokenInfo: string[];
   balance: string;
   supply: string;
   setNetwork: (id: number) => void;
   setLaunchpadData: (data: any) => void;
   setMetadata: (data: any) => void;
   setLogo: (data: any) => void;
   setBanners: (data: any) => void;
   setStep: (id: number) => void;
   setSupply: (data: string) => void;
   setTokenInfo: (data: any) => void;
   setBalance: (data: string) => void;
};
