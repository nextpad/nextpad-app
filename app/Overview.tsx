import React from "react";
import CardStats from "./components/CardStats";

function Overview() {
   return (
      <>
         <div className="flex-1 mr-7">
            <CardStats number="$2M" title="Raised Capital" />
         </div>
         <div className="flex-1 mr-7">
            <CardStats number="10K" title="Total Launchpad" />
         </div>
         <div className="flex-1 mr-7">
            <CardStats number="80K" title="Unique Participants" />
         </div>
         <div className="flex-1">
            <CardStats number="$200K" title="Total Locked" />
         </div>
      </>
   );
}

export default Overview;
