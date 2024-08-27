import { formatUnits } from "ethers";
import moment from "moment";

type Props = {
   records: any[];
   full: boolean;
};
function ListRecord({ records, full = true }: Props) {
   return (
      <>
         {records.map((data, i) => {
            return (
               <tr key={i} className="border-b-2 border-base-300">
                  <td>{data[5]}</td>
                  {full && (
                     <td>
                        <a
                           className="text-primary"
                           href={`https://scan.test.btcs.network/${data[4]}`}
                        >
                           {data[4]}
                        </a>
                     </td>
                  )}
                  <td>{parseInt(formatUnits(data[3])).toLocaleString()}</td>
                  <td>
                     {moment(
                        parseInt((data[1] as bigint).toString()) * 1000
                     ).format("D-MM-Y")}
                  </td>
                  {!full && (
                     <td>
                        {parseInt(data[1]) <= Math.ceil(Date.now() / 1000) ? (
                           <span className="text-teal-500 font-semibold">
                              Available
                           </span>
                        ) : (
                           <span className="text-error font-semibold">
                              Locked
                           </span>
                        )}
                     </td>
                  )}
               </tr>
            );
         })}
      </>
   );
}

export default ListRecord;
