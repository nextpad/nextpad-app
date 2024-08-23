import React from "react";

function ListTab() {
   return (
      <>
         <div className="flex-1 max-w-xs">
            <div role="tablist" className="tabs tabs-boxed bg-base-300 p-0">
               <a role="tab" className="tab bg-purple-600 text-white">
                  Active
               </a>
               <a role="tab" className="tab">
                  Soon
               </a>
               <a role="tab" className="tab">
                  Closed
               </a>
            </div>
         </div>
      </>
   );
}

export default ListTab;
