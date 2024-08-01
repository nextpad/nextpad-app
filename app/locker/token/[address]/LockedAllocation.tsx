import { formatUnits } from "ethers";
import React from "react";
import Chart from "react-apexcharts";

function LockedAllocation({ records }: { records: any[] }) {
   const data = {
      options: {
         chart: {
            foreColor: "white",
         },
         labels: records.map((val) => val[5]),
      },
      series: records.map((val) => parseInt(formatUnits(val[3]))),
   };
   return (
      <div
         className="card bg-base-300 border w-full border-teal-800"
         style={{ maxHeight: "26rem" }}
      >
         <div className="card-body p-0">
            <div className="card-title border-b border-teal-900">
               <h2 className="px-9 py-4 text-xl">Locked Allocation</h2>
            </div>
            <div className="px-9 mb-9 pt-7">
               <Chart
                  options={data.options}
                  series={data.series}
                  type="pie"
                  width="400"
               />
            </div>
         </div>
      </div>
   );
}

export default LockedAllocation;
