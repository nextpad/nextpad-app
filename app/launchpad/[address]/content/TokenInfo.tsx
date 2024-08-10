import React from "react";

function TokenInfo() {
   return (
      <>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Token Ticker</span>
            <span className="block text-xl font-bold">TRUF</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Blockchain</span>
            <span className="block text-xl">Sepolia</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Token Address</span>
            <span className="block text-xl">
               0x514910771af9ca656af840dff83e8264ecf986ca
            </span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Decimals</span>
            <span className="block text-xl">18</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Total Supply</span>
            <span className="block text-xl">180,000,000</span>
         </div>
      </>
   );
}

export default TokenInfo;
