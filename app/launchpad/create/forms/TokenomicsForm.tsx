import TrashIcon from "@/app/components/icons/TrashIcon";
import React, { useContext } from "react";
import { LaunchpadData, MetaData, Props } from "./ILaunchpad";
import PlusIcon from "@/app/components/icons/PlusIcon";
import Chart from "react-apexcharts";
import Context from "../Context";

function TokenomicsForm() {
   const values = useContext(Context);
   const data = {
      options: {
         chart: {
            foreColor: "grey",
         },
         labels: [...values.metadata.tokenomics.map((val) => val.name)],
      },
      series: [
         ...values.metadata.tokenomics.map((val) => parseInt(val.amount)),
      ],
   };
   return (
      <>
         <div className="flex flex-col">
            <div className="flex justify-center mb-7">
               <Chart
                  options={data.options}
                  series={data.series}
                  type="pie"
                  width="400"
               />
            </div>
            <h2 className="text-lg mb-5 text-right">
               Total Supply:{" "}
               <span className="font-bold">
                  {parseInt(values.supply).toLocaleString()}
               </span>
            </h2>
            <label className="text-lg font-semibold block">Tokenomics</label>
            <p className="text-sm">
               Token allocation represented as token amount
            </p>
            {values.metadata.tokenomics.map((val, key) => (
               <div key={key} className="flex flex-row items-center">
                  <input
                     type="text"
                     placeholder="Community, liquidity etc"
                     value={values.metadata.tokenomics[key].name}
                     onChange={(e) =>
                        values.setMetadata((prev: MetaData) => {
                           let newValue = prev.tokenomics.map((val, i) => {
                              if (i === key) {
                                 return {
                                    name: e.target.value,
                                    amount: val.amount,
                                 };
                              }
                              return val;
                           });

                           return { ...prev, tokenomics: newValue };
                        })
                     }
                     className="input input-bordered w-full block mt-3 mr-3"
                  />
                  <input
                     type="number"
                     value={values.metadata.tokenomics[key].amount}
                     onChange={(e) =>
                        values.setMetadata((prev: MetaData) => {
                           let newValue = prev.tokenomics.map((val, i) => {
                              if (i === key) {
                                 return {
                                    amount: e.target.value,
                                    name: val.name,
                                 };
                              }
                              return val;
                           });

                           return { ...prev, tokenomics: newValue };
                        })
                     }
                     className="input input-bordered w-full block mt-3"
                  />{" "}
                  <TrashIcon
                     className="size-14 mt-1 ml-3 text-rose-500 cursor-pointer"
                     onClick={() =>
                        values.setMetadata((prev: MetaData): MetaData => {
                           const newValue = prev.tokenomics.filter(
                              (val, i) => i != key
                           );
                           return {
                              ...prev,
                              tokenomics: [...newValue],
                           };
                        })
                     }
                  />
               </div>
            ))}
            <button
               className="btn btn-normal w-1/4 mt-4"
               onClick={() =>
                  values.setMetadata((prev: MetaData) => ({
                     ...prev,
                     tokenomics: [
                        ...prev.tokenomics,
                        { name: "", amount: "0" },
                     ],
                  }))
               }
            >
               <PlusIcon classList="size-4" /> Add More
            </button>
         </div>
         <div className="flex pb-10 justify-between mt-8">
            <button
               className="btn border-gray-400 bg-base-100 px-10"
               onClick={() => values.setStep(2)}
            >
               Back
            </button>
            <button
               className="btn btn-normal"
               onClick={() => values.setStep(4)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default TokenomicsForm;
