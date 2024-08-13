"use client";
import { ethers } from "ethers";
import React, { useContext } from "react";
import Context from "../launchpad/[address]/Context";

interface Props {
   raised: string;
   goals: string;
}

function ProgressGoals(props: Props) {
   const ctx = useContext(Context);
   return (
      <>
         <div className="mt-4">
            <div className="flex mb-1 justify-between">
               <h3>
                  Progress{" "}
                  <span className="text-white">
                     {(parseFloat(props.raised) / parseFloat(props.goals)) *
                        100}
                     %
                  </span>
               </h3>
               <h3>
                  {parseInt(props.raised).toLocaleString()} /{" "}
                  {parseInt(props.goals).toLocaleString()}{" "}
                  {ctx.blockchain == 1 ? "CORE" : "ETH"}
               </h3>
            </div>
            <progress
               className="progress progress-accent w-full"
               value={
                  (parseFloat(props.raised) / parseFloat(props.goals)) * 100
               }
               max={100}
            ></progress>
         </div>
      </>
   );
}

export default ProgressGoals;
