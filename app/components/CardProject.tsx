import Image from "next/image";
import React from "react";

function CardProject(props: any) {
   return (
      <>
         <div
            className="card w-full bg-base-300 hover:shadow-lg border border-teal-600 hover:shadow-teal-600"
            style={{ maxHeight: "35.5rem" }}
         >
            <figure>
               <Image
                  width={960}
                  height={540}
                  src={props.banner}
                  alt="Banner"
               />
            </figure>
            <div className="card-body">
               <Image
                  className="-mt-20 rounded-md"
                  alt=""
                  width={90}
                  height={90}
                  src={props.logo}
               />
               <h2 className="card-title mt-2">
                  <a href="#">{props.projectName}</a>
               </h2>
               <div className="badge bg-yellow-600 text-white p-3">
                  Upcoming
               </div>
               <p className="mt-2">{props.intros}</p>
               <div className="flex justify-between mt-3">
                  <div>Initial Price</div>
                  <div className="font-bold">${props.initPrice}</div>
               </div>
               <div className="flex justify-between">
                  <div>Fundraise Goal</div>
                  <div className="font-bold">$100K</div>
               </div>
               <div className="flex justify-between">
                  <div>Max Allocation</div>
                  <div className="font-bold text-teal-700">
                     {props.maxAlloc}
                  </div>
               </div>
               <div className="divider mb-0"></div>
               <div className="card-actions justify-between items-center">
                  <div className="text-lg">
                     End in :
                     <span className="ml-2 font-bold">{props.timeLeft}</span>
                  </div>
                  <div>
                     <a
                        href="#"
                        className="btn btn-sm bg-teal-600 text-white hover:bg-teal-700"
                     >
                        View
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default CardProject;
