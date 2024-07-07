import React from "react";

function CardStats(props: any) {
   return (
      <>
         <div className="card border border-teal-800 w-full shadow-lg bg-base-300">
            <div className="card-body">
               <h2 className="card-title text-4xl text-teal-600 mb-2">
                  {props.number}
               </h2>
               <p>{props.title}</p>
            </div>
         </div>
      </>
   );
}

export default CardStats;
