"use client";
import React, { useEffect, useState } from "react";

interface Props {
   option: string;
   value: number;
   vote: string;
}

function ProgressResult(props: Props) {
   const [curr, setCurr] = useState(0);

   useEffect(() => {
      setCurr(props.value * 10);
   });

   return (
      <div className="mb-6">
         <span className="font-bold">{props.option}</span>
         <progress
            className={`progress w-full block mt-3 ${
               props.option == "Yes" ? "progress-accent" : "progress-secondary"
            }`}
            value={curr}
            max="1000"
         ></progress>
         <div className="flex justify-between mt-2">
            <div className="font-base">{props.vote} votes</div>
            <div className="text-white">{(curr / 10).toFixed(2)}%</div>
         </div>
      </div>
   );
}

export default ProgressResult;
