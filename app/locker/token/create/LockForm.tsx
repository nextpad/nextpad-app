"use client";
import NetworkButton from "@/app/minter/NetworkButton";
import React, { useEffect, useState } from "react";
import TokenAddress from "./inputs/TokenAddress";
import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract, JsonRpcSigner, lock } from "ethers";
import { lockerAddress } from "@/app/components/constants";
import LockButton from "./LockButton";
import LockAmount from "./inputs/LockAmount";
import UnlockDate from "./inputs/UnlockDate";
import ReceiverAddress from "./inputs/ReceiverAddress";

export type LockData = {
   network: number;
   title: string;
   address: string;
   amount: string;
   unlocked: number;
   receiver: string;
};

const ERCAbi = [
   "function name() view returns (string)",
   "function symbol() view returns (string)",
   "function decimals() view returns (uint)",
   "function balanceOf(address) view returns (uint)",
   "function transfer(address to, uint amount)",
   "function approve(address spender, uint amount)",
   "function allowance(address owner, address spender) view returns (uint)",
   "event Transfer(address indexed from, address indexed to, uint amount)",
];

type Props = {
   saveToDatabase: ({
      address,
      name,
      symbol,
      blockchain,
   }: {
      address: string;
      name: string;
      symbol: string;
      blockchain: number;
   }) => Promise<void>;
};

function LockForm(props: Props) {
   const { address, isConnected } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   const [signer, setSigner] = useState<JsonRpcSigner>();
   const [lockerContract, setLockerContract] = useState<Contract>();
   const [tokenContract, setTokenContract] = useState<Contract>();
   const [lockData, setLockData] = useState<LockData>({
      network: 656476,
      title: "",
      address: "",
      amount: "0",
      unlocked: Math.ceil(Date.now() / 1000),
      receiver: "",
   });
   const [token, setToken] = useState(["", ""]);
   const [balance, setBalance] = useState("0");

   useEffect(() => {
      async function fetchWallet() {
         if (!isConnected || !walletProvider) return;

         const lockerJson = require("./Locker.json");

         const provider = new BrowserProvider(walletProvider);
         const _signer = await provider.getSigner();
         setSigner(_signer);
         setLockerContract(
            new Contract(lockerAddress, lockerJson.abi, _signer)
         );
      }

      fetchWallet();
   }, [signer, walletProvider, isConnected]);

   function setNetwork(network: number) {
      setLockData((prev) => ({ ...prev, network: network }));
   }

   return (
      <>
         <label className="text-lg mb-4 font-semibold block">
            Based on Network
         </label>
         <NetworkButton network={lockData.network} setNetwork={setNetwork} />

         <label className="text-lg font-semibold block mt-5">Title</label>
         <p className="text-sm">e.g. Team, marketing</p>
         <input
            type="text"
            value={lockData.title}
            onChange={(e) =>
               setLockData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="input input-bordered w-full block my-3"
         />

         <TokenAddress
            isConnected={isConnected}
            address={address}
            walletProvider={walletProvider}
            abi={ERCAbi}
            lockData={lockData}
            setLockData={setLockData}
            setBalance={setBalance}
            setTokenContract={setTokenContract}
            token={token}
            setToken={setToken}
         />

         <LockAmount
            lockData={lockData}
            setLockData={setLockData}
            balance={balance}
         />

         <UnlockDate lockData={lockData} setLockData={setLockData} />

         <ReceiverAddress
            address={address}
            lockData={lockData}
            setLockData={setLockData}
         />

         <div className="flex justify-between mb-7">
            <LockButton
               saveToDatabase={props.saveToDatabase}
               token={token}
               address={address}
               contract={lockerContract}
               tokenContract={tokenContract}
               lockData={lockData}
            />
            <a
               className="btn border-gray-400 bg-base-100 mt-2 min-w-20"
               href="/locker/token"
            >
               Back
            </a>
         </div>
      </>
   );
}

export default LockForm;
