import { useContext } from "react";
import Context from "../Context";

function TokenInfo(props: { token: any[] }) {
   const ctx = useContext(Context);
   return (
      <>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-100 border-2 border-base-300 mb-2 rounded-md">
            <span className="block text-xl">Token Ticker</span>
            <span className="block text-xl font-bold">{props.token[1]}</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-100 border-2 border-base-300 mb-2 rounded-md">
            <span className="block text-xl">Blockchain</span>
            <span className="block text-xl">
               {ctx.blockchain == 1 ? "Educhain" : "Sepolia"}
            </span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-100 border-2 border-base-300 mb-2 rounded-md">
            <span className="block text-xl">Token Address</span>
            <span className="block text-xl">{props.token[0]}</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-100 border-2 border-base-300 mb-2 rounded-md">
            <span className="block text-xl">Decimals</span>
            <span className="block text-xl">{props.token[2].toString()}</span>
         </div>
         <div className="flex justify-between py-4 px-4 max-w-3xl bg-base-100 border-2 border-base-300 mb-2 rounded-md">
            <span className="block text-xl">Total Supply</span>
            <span className="block text-xl">
               {parseInt(props.token[3]).toLocaleString()}
            </span>
         </div>
      </>
   );
}

export default TokenInfo;
