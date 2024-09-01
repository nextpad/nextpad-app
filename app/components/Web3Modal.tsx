"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = "6a0623b331d6813cd59fe1d77a91c68f";

const opencampus = {
   name: "Open Campus Codex",
   rpcUrl: "https://rpc.open-campus-codex.gelato.digital",
   chainId: 656476,
   currency: "EDU",
   explorerUrl: "https://opencampus-codex.blockscout.com",
};
const sepolia = {
   name: "Ethereum Sepolia",
   rpcUrl: "https://sepolia.infura.io/v3/5b87e120e3264a40b14859d74ddd330b",
   chainId: 11155111,
   currency: "ETH",
   explorerUrl: "https://sepolia.etherscan.io",
};
const hardhat = {
   name: "Hardhat",
   rpcUrl: "http://127.0.0.1:8545/",
   chainId: 31337,
   currency: "ETH",
   explorerUrl: "",
};

const metadata = {
   name: "Nextpad",
   description: "A decentralized community-driven launchpad protocol",
   url: "https://app.nextpad.org/", // origin must match your domain & subdomain
   icons: [
      "https://app.nextpad.org/_next/image?url=/images/nextpad.png&w=48&q=75",
   ],
};
const ethersConfig = defaultConfig({
   /*Required*/
   metadata,
});

createWeb3Modal({
   ethersConfig,
   chains: [opencampus, sepolia, hardhat],
   projectId,
   enableAnalytics: true, // Optional - defaults to your Cloud configuration
   enableOnramp: true, // Optional - false as default
   themeMode: "light",
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
   return children;
}
