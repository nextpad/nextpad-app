"use client";
import Chart from "react-apexcharts";

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
   const data = {
      options: {
         chart: {
            foreColor: "white",
         },
         labels: ["Team", "Marketing", "Community", "Sale", "Liquidity"],
      },
      series: [440000, 250000, 4100000, 1700000, 1500000],
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
