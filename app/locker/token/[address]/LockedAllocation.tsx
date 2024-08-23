import { formatUnits } from "ethers";
import React from "react";
import Chart from "react-apexcharts";

function LockedAllocation({ records }: { records: any[] }) {
   const data = {
      options: {
         chart: {
            foreColor: "grey",
         },
         labels: records.map((val) => val[5]),
      },
      series: records.map((val) => parseInt(formatUnits(val[3]))),
   };
   return (
      <div
         className="card bg-base-100 border-2 w-full border--base-300"
         style={{ maxHeight: "26rem" }}
      >
         <div className="card-body p-0">
            <div className="card-title border-b-2 border-base-300">
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
