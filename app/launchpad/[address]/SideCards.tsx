import React, { useContext, useEffect, useState } from "react";
import ContributionCard from "./side/ContributionCard";
import PoolCard from "./side/PoolCard";
import LatestVoters from "./side/LatestVoters";
import Context from "./Context";
import { Contract, ethers } from "ethers";

export interface PoolData {
   status: number;
   minBuy: string;
   maxBuy: string;
   rates: string;
   startDate: number;
   deadline: number;
   totalRaised: string;
   targetRaised: string;
   totalNXP: string;
   minNXP: string;
   rewardRate: string;
   participants: number;
   totalAllocation: string;
   allocated: string;
   voters: number;
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
      startDate: 0,
      deadline: 0,
      totalRaised: "",
      targetRaised: "",
      totalNXP: "",
      minNXP: "",
      rewardRate: "",
      participants: 0,
      totalAllocation: "",
      allocated: "",
      voters: 0,
   });
   const [token, setToken] = useState<[string, string, string]>(["", "", ""]);

   const BoardJSON = require("./Board.json");
   const JSON_RPC_URL = "https://rpc.open-campus-codex.gelato.digital";
   const provider = new ethers.JsonRpcProvider(JSON_RPC_URL);
   const contract = new Contract(ctx.address, BoardJSON.abi, provider);

   useEffect(() => {
      async function fetchPool() {
         const OceanJSON = require("./Ocean.json");
         const oceanAddress = await contract.ocean();
         const ocean = new Contract(oceanAddress, OceanJSON.abi, provider);
         const [
            data,
            reward,
            participants,
            requiredNXP,
            allocation,
            allocated,
            voters,
         ] = await Promise.all([
            contract.getLaunchpadDetail(),
            contract.rewardRatePerNXP(),
            contract.totalContributors(),
            contract.minimumNXPRequired(),
            ocean.totalAllocation(ctx.address),
            ocean.allocated(ctx.address),
            contract.totalVoters(),
         ]);
         setPoolInformation({
            status: data[0].toString(),
            minBuy: data[1].toString(),
            maxBuy: data[2].toString(),
            rates: data[3].toString(),
            startDate: parseInt(data[4]),
            deadline: parseInt(data[5]),
            totalRaised: data[7].toString(),
            targetRaised: data[8].toString(),
            totalNXP: data[9].toString(),
            minNXP: requiredNXP.toString(),
            rewardRate: reward.toString(),
            participants: parseInt(participants),
            totalAllocation: allocation.toString(),
            allocated: allocated.toString(),
            voters: parseInt(voters),
         });
      }

      async function fetchToken() {
         const address = await contract.fundedToken();
         const erc20 = new Contract(address, ERCAbi, provider);
         const [symbol, decimals] = await Promise.all([
            erc20.symbol(),
            erc20.decimals(),
         ]);
         setToken([address, symbol, decimals]);
      }

      fetchPool();
      fetchToken();
   }, []);

   return (
      <>
         <ContributionCard
            pool={poolInformation}
            setPool={setPoolInformation}
            token={token}
         />
         <PoolCard pool={poolInformation} token={token} />
         <LatestVoters contract={contract} />
      </>
   );
}

export default SideCards;
