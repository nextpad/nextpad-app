import React from "react";
import CardProject from "./components/CardProject";

function UpcomingLaunchpad() {
   return (
      <>
         <div className="flex-1 mr-7">
            <CardProject
               projectName="EARN!"
               logo="/images/ex1.png"
               banner="/images/exb1.png"
               intros="Deflationary MobileFi & DePIN Rewards, Transforming Smartphones"
               initPrice="0.1"
               maxAlloc="200M ERN"
               timeLeft="-"
            />
         </div>
         <div className="flex-1 mr-7">
            <CardProject
               projectName="Matrix One"
               logo="/images/ex2.png"
               banner="/images/exb2.png"
               intros="AI Human"
               initPrice="0.1"
               maxAlloc="200M ERN"
               timeLeft="-"
            />
         </div>
         <div className="flex-1">
            <CardProject
               projectName="Kima Network"
               logo="/images/ex3.png"
               banner="/images/exb3.png"
               intros="Revolutionizing Financial Interoperability"
               initPrice="0.1"
               maxAlloc="200M ERN"
               timeLeft="-"
            />
         </div>
      </>
   );
}

export default UpcomingLaunchpad;
