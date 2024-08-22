import React from "react";

function CardStats(props: any) {
   return (
      <>
         <div className="card border-2 border-base-300 w-full shadow-lg bg-base-100">
            <div className="card-body">
               <h2 className="card-title text-4xl text-purple-600 mb-2">
                  {props.number}
               </h2>
               <p>{props.title}</p>
            </div>
         </div>
      </>
   );
}

export default CardStats;
