import React from "react";
import LockForm from "./LockForm";
import Link from "next/link";
import ChevronLeftIcon from "@/app/components/icons/ChevronLeftIcon";

function page() {
   return (
      <div className="min-h-screen flex justify-center">
         <div
            className="card bg-base-300 border border-teal-800 mt-10"
            style={{
               minWidth: "40rem",
               height: "48rem",
            }}
         >
            <div className="card-body p-0">
               <div className="card-title border-b border-teal-900">
                  <h2 className="px-9 py-4 text-xl">Lock Token</h2>
               </div>
               <div className="mt-6 px-9">
                  <LockForm />
               </div>
            </div>
         </div>
      </div>
   );
}

export default page;
