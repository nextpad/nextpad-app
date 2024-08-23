/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import { onChange } from "../helper";
import { LaunchpadData } from "../ILaunchpad";
import { BrowserProvider, Contract, ethers } from "ethers";
import {
   useWeb3ModalAccount,
   useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import Context from "../../Context";

const ERCAbi = [
   "function name() view returns (string)",
   "function symbol() view returns (string)",
   "function decimals() view returns (uint)",
   "function totalSupply() view returns (uint)",
   "function balanceOf(address) view returns (uint)",
   "function transfer(address to, uint amount)",
   "function approve(address spender, uint amount)",
   "function allowance(address owner, address spender) view returns (uint)",
   "event Transfer(address indexed from, address indexed to, uint amount)",
];

function TokenAddress() {
   const values = useContext(Context);
   const { isConnected, address } = useWeb3ModalAccount();
   const { walletProvider } = useWeb3ModalProvider();

   const [tokenAddress, setTokenAddress] = useState("");

   React.useEffect(() => {
      async function checkTokenInfo() {
         if (!isConnected || !walletProvider || !values.launchpadData.address)
            return;

         try {
            const ethersProvider = new BrowserProvider(walletProvider);
            const signer = await ethersProvider.getSigner();

            const contract = new Contract(
               values.launchpadData.address,
               ERCAbi,
               signer
            );

            const [name, symbol, totalSupply, decimals, balance] =
               await Promise.all([
                  contract.name(),
                  contract.symbol(),
                  contract.totalSupply(),
                  contract.decimals(),
                  contract.balanceOf(address),
               ]);

            values.setBalance(ethers.formatUnits(balance, decimals));
            values.setTokenInfo([
               name,
               symbol,
               ethers.formatUnits(totalSupply, decimals),
               decimals,
            ]);
            values.setSupply(ethers.formatUnits(totalSupply, decimals));
         } catch (err) {
            values.setTokenInfo(["", "", ""]);
            // console.log(err?.message);
         }
      }

      checkTokenInfo();
   }, [walletProvider, values.launchpadData, isConnected]);

   return (
      <>
         <div className="flex mt-5">
            <div className="flex flex-col w-4/6">
               <label className="text-lg font-semibold block">
                  Token Address
               </label>
               <input
                  type="text"
                  value={values.launchpadData.address}
                  onChange={(e) =>
                     values.setLaunchpadData((prev: LaunchpadData) => ({
                        ...prev,
                        address: e.target.value,
                     }))
                  }
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex flex-row items-end w-2/6">
               <span className="block mb-3 mx-3 font-bold">OR</span>
               <a href="/minter" className="btn btn-outline bg-base-100 px-12">
                  Create Token
               </a>
            </div>
         </div>

         {values.tokenInfo[0] && (
            <div className="card border border-slate-700 rounded-md mt-4">
               <div className="card-body p-5">
                  <div className="flex justify-between">
                     <div className="text-slate-300">
                        {values.tokenInfo[1]} / {values.tokenInfo[0]}
                     </div>
                     <span className="block">
                        {parseInt(values.tokenInfo[2]).toLocaleString()}
                     </span>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default TokenAddress;
