"use client";
import { Contract, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Description from "./content/Description";
import TokenInfo from "./content/TokenInfo";
import Context from "./Context";
const Tokenomics = dynamic(() => import("./content/Tokenomics"), {
   ssr: false,
});

const ERCAbi = [
   "function name() view returns (string)",
   "function symbol() view returns (string)",
   "function decimals() view returns (uint)",
   "function totalSupply() view returns (uint)",
];

function DetailedProject() {
   const ctx = useContext(Context);
   const [menu, setMenu] = useState(1);
   const [token, setToken] = useState<[string, string, number, string]>([
      "",
      "",
      18,
      "",
   ]);

   useEffect(() => {
      async function fetchTokenData() {
         const BoardJSON = require("./Board.json");
         const JSON_RPC_URL = "https://rpc.open-campus-codex.gelato.digital";
         const provider = new ethers.JsonRpcProvider(JSON_RPC_URL);

         const contract = new Contract(ctx.address, BoardJSON.abi, provider);
         const address = await contract.fundedToken();
         const erc20 = new Contract(address, ERCAbi, provider);

         const [symbol, decimals, supply] = await Promise.all([
            erc20.symbol(),
            erc20.decimals(),
            erc20.totalSupply(),
         ]);

         setToken([
            address,
            symbol,
            decimals,
            ethers.formatUnits(supply, decimals),
         ]);
      }
      fetchTokenData();
   }, [ctx.address]);

   let content = <Description />;

   if (menu === 2) {
      content = <TokenInfo token={token} />;
   }

   if (menu === 3) {
      content = <Tokenomics />;
   }

   return (
      <>
         <div role="tablist" className="tabs tabs-bordered max-w-lg mt-12">
            <a
               role="tab"
               className={`tab text-lg ${menu == 1 ? "tab-active" : ""}`}
               onClick={() => setMenu(1)}
            >
               Description
            </a>
            <a
               role="tab"
               className={`tab text-lg ${menu == 2 ? "tab-active" : ""}`}
               onClick={() => setMenu(2)}
            >
               Token Information
            </a>
            <a
               role="tab"
               className={`tab text-lg ${menu == 3 ? "tab-active" : ""}`}
               onClick={() => setMenu(3)}
            >
               Tokenomics
            </a>
         </div>
         <div className="mt-6">{content}</div>
      </>
   );
}

export default DetailedProject;
