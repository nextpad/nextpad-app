import React from "react";

interface Props {
   time: number;
   label: string;
}

function TimeCard(props: Props) {
   return (
      <>
         <div className="px-5 py-1 rounded-md bg-sky-600 text-white text-center mr-2">
            <span className="block mb-0 text-lg font-bold">{props.time}</span>
            <span className="block text-sm">{props.label}</span>
         </div>
      </>
   );
}

export default TimeCard;
