import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import React from "react";
import { tokenAddress } from "../components/constants";

function AddTOL() {
   const { walletProvider } = useWeb3ModalProvider();

   async function addToken() {
      const tokenSymbol = "TOL";
      const tokenDecimals = 18;
      const tokenImage = "https://i.ibb.co/P5WydH6/TOL.png";

      try {
         // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
         const wasAdded = await walletProvider?.request({
            method: "wallet_watchAsset",
            params: {
               type: "ERC20",
               options: {
                  // The address of the token.
                  address: tokenAddress,
                  // A ticker symbol or shorthand, up to 5 characters.
                  symbol: tokenSymbol,
                  // The number of decimals in the token.
                  decimals: tokenDecimals,
                  // A string URL of the token logo.
                  image: tokenImage,
               },
            },
         });

         if (wasAdded) {
            console.log("Thanks for your interest!");
         } else {
            console.log("Your loss!");
         }
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div>
         <button className="btn btn-secondary btn-sm" onClick={addToken}>
            <span className="text-xs font-bold">Import TOL to Wallet</span>
         </button>
      </div>
   );
}

export default AddTOL;
