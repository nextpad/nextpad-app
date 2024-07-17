import React from "react";

interface Props {
   raised: number;
   goals: number;
}

function ProgressGoals(props: Props) {
   return (
      <>
         <div className="mt-4">
            <div className="flex mb-1 justify-between">
               <h3>
                  Progress{" "}
                  <span className="text-white">
                     {(props.raised / props.goals) * 100}%
                  </span>
               </h3>
               <h3>
                  {props.raised} / {props.goals} ETH
               </h3>
            </div>
            <progress
               className="progress progress-accent w-full"
               value={(props.raised / props.goals) * 100}
               max={100}
            ></progress>
         </div>
      </>
   );
}

export default ProgressGoals;
