import React, { useContext, useState } from "react";
import { Props } from "./ILaunchpad";
import SaleInputs from "./inputs/SaleInputs";
import TokenInputs from "./inputs/TokenInputs";
import Context from "../Context";

export interface BasicProps extends Props {
   setSupply: (data: any) => void;
}

function BasicForm() {
   const values = useContext(Context);
   return (
      <>
         <TokenInputs />

         <div className="divider divider-vertical my-8">
            <span className="text-lg font-bold">Sales</span>
         </div>

         <SaleInputs />

         <div className="flex mt-7 pb-10 justify-end">
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={() => values.setStep(2)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default BasicForm;
