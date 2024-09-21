import React from "react";
import NetworkButton from "../NetworkButton";
import { TokenData } from "./ITokenData";

type Props = {
   network: number;
   step: number;
   tokenData: TokenData;
   setNetwork: (id: number) => void;
   setStep: (id: number) => void;
   setTokenData: (data: any) => void;
};

function BasicForm(props: Props) {
   const changeTokenName = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         name: event.target.value,
      }));
   };

   const changeSymbol = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         symbol: event.target.value,
      }));
   };

   const changeSupply = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         supply: parseInt(event.target.value),
      }));
   };

   return (
      <>
         <label className="text-lg mb-4 font-semibold block">
            Based on Network
         </label>
         <NetworkButton network={props.network} setNetwork={props.setNetwork} />
         <div className="flex mt-5">
            <div className="flex-1 mr-7">
               <label className="text-lg font-semibold block">Token Name</label>
               <p className="text-sm">e.g. Bitcoin, Edu</p>
               <input
                  type="text"
                  value={props.tokenData.name}
                  onChange={changeTokenName}
                  className="input input-bordered w-full max-w-xs block my-4"
               />
            </div>
            <div className="flex-1">
               <label className="text-lg font-semibold block">Symbol</label>
               <p className="text-sm">e.g. BTC, EDU</p>
               <input
                  type="text"
                  value={props.tokenData.symbol}
                  onChange={changeSymbol}
                  className="input input-bordered w-full max-w-xs block my-4"
               />
            </div>
         </div>
         <div className="flex">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Total Supply
               </label>
               <p className="text-sm">e.g. 1000</p>
               <input
                  type="number"
                  value={props.tokenData.supply}
                  onChange={changeSupply}
                  className="input input-bordered w-full block my-4"
               />
            </div>
         </div>
         <div className="flex mt-3 pb-10 justify-end">
            <button
               className="btn bg-gray-900 text-white px-10 hover:bg-gray-700"
               onClick={() => props.setStep(2)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default BasicForm;
