import Image from "next/image";
import React from "react";
import FireIcon from "./icons/FireIcon";
import ProgressGoals from "./ProgressGoals";
import BoltIcon from "./icons/BoltIcon";

function CardProject(props: any) {
   return (
      <>
         <div
            className="card bg-base-100 hover:shadow-lg border-2 hover:shadow-base-300"
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
                     <BoltIcon classList="size-4 mb-1 ml-1 inline" />
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
               <h2 className="card-title mt-2 text-2xl">
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
                  <div className="font-bold">
                     ${parseFloat(props.initPrice).toFixed(7)}
                  </div>
               </div>
               <div className="flex justify-between">
                  <div>Fundraise Goal</div>
                  <div className="font-bold">
                     $
                     {props.goals > 1000000
                        ? (props.goals / 1000000).toFixed(1) + "M"
                        : props.goals > 1000
                        ? (props.goals / 1000).toFixed(1) + "K"
                        : props.goals}
                  </div>
               </div>
               {props.status != 2 && (
                  <div className="flex justify-between">
                     <div>Max Allocation</div>
                     <div className="font-bold">
                        {parseInt(props.maxAlloc).toLocaleString()}
                     </div>
                  </div>
               )}
               {props.status == 2 && (
                  <ProgressGoals
                     raised={props.raised}
                     goals={props.goals}
                     symbol="TEST"
                  />
               )}
               <div className="divider mb-0"></div>
               <div className="card-actions justify-between items-center">
                  <div className="text-lg">
                     End in :
                     <span className="ml-2 font-bold">{props.timeLeft}</span>
                  </div>
                  <div>
                     <a
                        href={`/launchpad/${props.address}`}
                        className="btn btn-sm bg-gray-900 text-white hover:bg-gray-700"
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
