import React, { useContext, useEffect, useState } from "react";
import ContributionCard from "./side/ContributionCard";
import PoolCard from "./side/PoolCard";
import TopVoters from "./side/TopVoters";
import Context from "./Context";
import { Contract, ethers } from "ethers";

export interface PoolData {
   status: number;
   minBuy: string;
   maxBuy: string;
   rates: string;
   startDate: string;
   deadline: string;
   totalRaised: string;
   targetRaised: string;
   totalTOL: string;
   rewardRate: string;
   participants: string;
}

const ERCAbi = [
   "function name() view returns (string)",
   "function symbol() view returns (string)",
   "function decimals() view returns (uint)",
   "function totalSupply() view returns (uint)",
];

function SideCards() {
   const ctx = useContext(Context);
   const [poolInformation, setPoolInformation] = useState<PoolData>({
      status: 0,
      minBuy: "",
      maxBuy: "",
      rates: "",
      startDate: "",
      deadline: "",
      totalRaised: "",
      targetRaised: "",
      totalTOL: "",
      rewardRate: "",
      participants: "",
   });
   const [token, setToken] = useState<[string, string]>(["", ""]);

   useEffect(() => {
      const BoardJSON = require("./Board.json");
      const JSON_RPC_URL = "https://rpc.test.btcs.network";
      const provider = new ethers.JsonRpcProvider(JSON_RPC_URL);

      async function fetchPool() {
         const contract = new Contract(ctx.address, BoardJSON.abi, provider);
         const [data, reward, participants] = await Promise.all([
            contract.getLaunchpadDetail(),
            contract.rewardRatePerTOL(),
            contract.totalContributors(),
         ]);
         setPoolInformation({
            status: data[0].toString(),
            minBuy: data[1].toString(),
            maxBuy: data[2].toString(),
            rates: data[3].toString(),
            startDate: data[4],
            deadline: data[5],
            totalRaised: data[7].toString(),
            targetRaised: data[8].toString(),
            totalTOL: data[9].toString(),
            rewardRate: reward.toString(),
            participants: participants.toString(),
         });
      }

      async function fetchToken() {
         const contract = new Contract(ctx.address, BoardJSON.abi, provider);
         const address = await contract.fundedToken();
         const erc20 = new Contract(address, ERCAbi, provider);
         const symbol = await erc20.symbol();
         setToken([address, symbol]);
         console.log(token);
      }

      fetchPool();
      fetchToken();
   }, []);

   return (
      <>
         <ContributionCard pool={poolInformation} />
         <PoolCard pool={poolInformation} token={token} />
         <TopVoters />
      </>
   );
}

export default SideCards;
