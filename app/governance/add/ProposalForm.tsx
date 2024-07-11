"use client";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import PlusIcon from "@/app/components/icons/PlusIcon";

function ProposalForm() {
   const [content, setContent] = useState("");
   return (
      <>
         <div className="flex-1 mr-7">
            <label className="text-lg font-semibold block">Title</label>
            <input
               type="text"
               className="input input-bordered w-full block my-4 bg-base-300"
            />
         </div>
         <div className="flex flex-col mr-7">
            <label className="text-lg font-semibold flex justify-between">
               <div>Content</div>
               <div className="text-sm pt-2">0 / 300</div>
            </label>
            <div className="mt-4">
               <MDEditor
                  value={content}
                  className="bg-base-200"
                  onChange={(val: any) => setContent(val)}
                  textareaProps={{
                     placeholder: "Enter proposal content",
                     maxLength: 2000,
                  }}
                  preview="edit"
                  maxHeight={100}
               />
            </div>
         </div>
         <div className="mt-6 mr-7">
            <div
               className="card bg-base-300 border w-full border-teal-800"
               style={{ maxHeight: "26rem" }}
            >
               <div className="card-body p-0">
                  <div className="card-title border-b border-teal-900">
                     <h2 className="px-9 py-4 text-xl">Options</h2>
                  </div>
                  <div className="px-9">
                     <input
                        type="text"
                        placeholder="Enter option"
                        className="input input-bordered w-full block my-5 bg-base-300"
                     />
                     <input
                        type="text"
                        placeholder="Enter option"
                        className="input input-bordered w-full block my-5 bg-base-300"
                     />
                     <button className="btn btn-normal mb-7 mt-2">
                        <PlusIcon classList="size-5" /> Add Option
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ProposalForm;
