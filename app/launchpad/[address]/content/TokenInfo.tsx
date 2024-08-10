function TokenInfo(props: { token: any[] }) {
   return (
      <>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Token Ticker</span>
            <span className="block text-xl font-bold">{props.token[1]}</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Blockchain</span>
            <span className="block text-xl">Sepolia</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Token Address</span>
            <span className="block text-xl">{props.token[0]}</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Decimals</span>
            <span className="block text-xl">{props.token[2].toString()}</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-300 border border-gray-800 mb-2 rounded-md">
            <span className="block text-xl">Total Supply</span>
            <span className="block text-xl">
               {parseInt(props.token[3]).toLocaleString()}
            </span>
         </div>
      </>
   );
}

export default TokenInfo;
