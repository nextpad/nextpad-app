"use client";
import { ethers } from "ethers";
import React, { useContext } from "react";
import Context from "../launchpad/[address]/Context";

interface Props {
   raised: string;
   goals: string;
   symbol: string;
}

function ProgressGoals(props: Props) {
   const ctx = useContext(Context);
   return (
      <>
         <div className="mt-4">
            <div className="flex mb-1 justify-between">
               <h3>
                  Progress{" "}
                  <span className="font-semibold">
                     {(
                        (parseFloat(props.raised) / parseFloat(props.goals)) *
                        100
                     ).toFixed(2)}
                     %
                  </span>
               </h3>
               <h3>
                  {parseFloat(props.raised).toFixed(2).toLocaleString()} /{" "}
                  {parseInt(props.goals).toLocaleString()} {props.symbol}
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
