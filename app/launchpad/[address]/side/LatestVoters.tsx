import React, { useContext, useEffect, useState } from "react";
import VoterRow from "./VoterRow";
import Context from "../Context";
import { Contract } from "ethers";

function LatestVoters({ contract }: { contract: Contract }) {
   const [voters, setVoter] = useState<string[]>([]);
   const ctx = useContext(Context);

   useEffect(() => {
      async function fetchVoters() {
         const total = await contract.totalVoters();

         if (!total) return;

         let latest: number[] = new Array(parseInt(total))
            .fill(0)
            .map((val, i) => i)
            .reverse()
            .slice(0, 7);
         let voters: string[] = await Promise.all(
            latest.map((v, i) => contract.voters(v))
         );
         voters = [...new Set(voters)];

         setVoter(voters);
      }

      fetchVoters();
   }, [contract]);

   return (
      <div className="mt-7">
         <div
            className="card bg-base-300 border w-full border-teal-800"
            style={{ minHeight: "29rem" }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Latest Voters</h2>
               </div>
               <div className="px-5">
                  <table className="table table-zebra">
                     <thead>
                        <tr className="text-lg">
                           <th>Address</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        {voters.length > 0 &&
                           voters.map((val, key) => (
                              <VoterRow
                                 key={key}
                                 address={val}
                                 count={key + 1}
                                 contract={contract}
                              />
                           ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LatestVoters;
