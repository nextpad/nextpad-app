import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import { Contract, ethers } from "ethers";

interface Props {
   count: number;
   address: string;
   contract: Contract;
}

function VoterRow(props: Props) {
   const ctx = useContext(Context);
   const [amount, setAmount] = useState("");

   useEffect(() => {
      async function fetchAmount() {
         const amount = await props.contract.tolContributions(props.address);
         const formatted = ethers.formatEther(amount);
         setAmount(formatted);
      }

      fetchAmount();
   });

   return (
      <tr>
         <td>
            {props.count}. {props.address.slice(0, 23)}..
         </td>
         <td>{parseFloat(amount).toFixed(0)}</td>
      </tr>
   );
}

export default VoterRow;
