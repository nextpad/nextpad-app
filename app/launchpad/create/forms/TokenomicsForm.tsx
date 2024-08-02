import TrashIcon from "@/app/components/icons/TrashIcon";
import React from "react";
import { LaunchpadData, Props } from "./ILaunchpad";
import PlusIcon from "@/app/components/icons/PlusIcon";
import Chart from "react-apexcharts";

function TokenomicsForm(props: Props) {
   const data = {
      options: {
         chart: {
            foreColor: "white",
         },
         labels: [...props.launchpadData.tokenomics.map((val) => val.name)],
      },
      series: [
         ...props.launchpadData.tokenomics.map((val) => parseInt(val.amount)),
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
               Total Supply: <span className="font-bold">20,000,000</span>
            </h2>
            <label className="text-lg font-semibold block">Tokenomics</label>
            <p className="text-sm">
               Token allocation represented as token amount
            </p>
            {props.launchpadData.tokenomics.map((val, key) => (
               <div key={key} className="flex flex-row items-center">
                  <input
                     type="text"
                     placeholder="Community, liquidity etc"
                     value={props.launchpadData.tokenomics[key].name}
                     onChange={(e) =>
                        props.setLaunchpadData((prev: LaunchpadData) => {
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
                     value={props.launchpadData.tokenomics[key].amount}
                     onChange={(e) =>
                        props.setLaunchpadData((prev: LaunchpadData) => {
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
                        props.setLaunchpadData(
                           (prev: LaunchpadData): LaunchpadData => {
                              const newValue = prev.tokenomics.filter(
                                 (val, i) => i != key
                              );
                              return {
                                 ...prev,
                                 tokenomics: [...newValue],
                              };
                           }
                        )
                     }
                  />
               </div>
            ))}
            <button
               className="btn btn-normal w-1/4 mt-4"
               onClick={() =>
                  props.setLaunchpadData((prev: LaunchpadData) => ({
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
               className="btn bg-base-100 border border-gray-700 px-10 hover:border-gray-700"
               onClick={() => props.setStep(2)}
            >
               Back
            </button>
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={() => props.setStep(4)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default TokenomicsForm;
