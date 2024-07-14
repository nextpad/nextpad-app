import Image from "next/image";
import React from "react";
import FireIcon from "./icons/FireIcon";

function CardProject(props: any) {
   return (
      <>
         <div
            className="card w-full bg-base-300 hover:shadow-lg border border-teal-800 hover:shadow-teal-600"
            style={{ maxHeight: "37.5rem" }}
         >
            <figure>
               <Image
                  width={960}
                  height={540}
                  src={props.banner}
                  alt="Banner"
               />
               {props.boost ? (
                  <div className="absolute z-10 right-0 top-0 mt-7 py-1 bg-rose-700 text-white pl-8 pr-4">
                     <span className="font-semibold">{props.boost}</span>
                     <FireIcon classList="size-4 mb-1 ml-1 inline" />
                  </div>
               ) : (
                  ""
               )}
            </figure>
            <div className="card-body">
               <Image
                  className="-mt-20 rounded-md"
                  alt=""
                  width={90}
                  height={90}
                  src={props.logo}
               />
               <h2 className="card-title mt-2  text-slate-100">
                  <a href="#">{props.projectName}</a>
               </h2>
               <div
                  className={`badge ${
                     props.status == 1
                        ? "bg-yellow-700"
                        : props.status == 2
                        ? "bg-teal-700"
                        : "bg-rose-700"
                  } text-white p-3`}
               >
                  {props.status == 1
                     ? "Upcoming"
                     : props.status == 2
                     ? "Active"
                     : "Ended"}
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
               {props.status != 2 && (
                  <div className="flex justify-between">
                     <div>Max Allocation</div>
                     <div className="font-bold text-teal-700">
                        {props.maxAlloc}
                     </div>
                  </div>
               )}
               {props.status == 2 && (
                  <div className="mt-4">
                     <div className="flex mb-1 justify-between">
                        <h3>
                           Progress{" "}
                           <span className="text-white">{props.raised}%</span>
                        </h3>
                        <h3>
                           {props.raised} / {props.goals} ETH
                        </h3>
                     </div>
                     <progress
                        className="progress progress-accent w-full"
                        value={(props.raised / props.goals) * 100}
                        max={props.goals}
                     ></progress>
                  </div>
               )}
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
