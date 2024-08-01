import { TokenLocked } from "@prisma/client";
import React from "react";

type Props = {
   token: TokenLocked;
   records: number;
};

function InfoCard({ token, records }: Props) {
   return (
      <>
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ maxHeight: "26rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Lock Info</h2>
               </div>
               <div className="flex flex-row justify-between text-lg px-10">
                  <div className="my-5">
                     <p className="mb-4">Locked Amount</p>
                     <p className="mb-4">Values Locked</p>
                     <p className="mb-4">Token Address</p>
                     <p className="mb-4">Name</p>
                     <p className="mb-4">Symbol</p>
                     <p className="mb-4">Total Records</p>
                  </div>
                  <div className="my-5">
                     <p className="mb-4 text-lg text-slate-300">
                        {parseInt(token.totalAmount).toLocaleString()}{" "}
                        {token.symbol}
                     </p>
                     <p className="mb-4 text-lg text-green-700">$0</p>
                     <p className="mb-4 text-lg text-slate-300">
                        <a
                           href={`https://scan.test.btcs.network/${token.address}`}
                           className="text-teal-600"
                           target="_blank"
                        >
                           {token.address}
                        </a>
                     </p>
                     <p className="mb-4 text-lg text-slate-300">{token.name}</p>
                     <p className="mb-4 text-lg text-slate-300">
                        {token.symbol}
                     </p>
                     <p className="mb-4 text-lg text-slate-300">{records}</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default InfoCard;
