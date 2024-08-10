"use client";
import { useContext } from "react";
import Chart from "react-apexcharts";
import Context from "../Context";

interface DataChart {
   options: {
      chart: {
         foreColor: string;
      };
      labels: string[];
   };
   series: number[];
}

const Tokenomics = () => {
   const ctx = useContext(Context);
   const data: DataChart = {
      options: {
         chart: {
            foreColor: "white",
         },
         labels: ctx.data.metadata.tokenomics.map((val) => val.name),
      },
      series: ctx.data.metadata.tokenomics.map((val) => parseInt(val.amount)),
   };

   return (
      <div>
         <div className="card">
            <div className="card-body bg-base-300 rounded-lg">
               <div className="flex justify-center py-4">
                  <div>
                     <Chart
                        options={data.options}
                        series={data.series}
                        type="pie"
                        width="520"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tokenomics;
