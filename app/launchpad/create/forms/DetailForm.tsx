import React, { ChangeEvent, useState } from "react";
import { LaunchpadData, Props } from "./ILaunchpad";
import { onChange } from "./helper";
import ReactImagePickerEditor, {
   ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";
import MDEditor from "@uiw/react-md-editor";
import GlobeIcon from "@/app/components/icons/GlobeIcon";
import BookOpenIcon from "@/app/components/icons/BookOpenIcon";
import XIcon from "@/app/components/icons/XIcon";
import TelegramIcon from "@/app/components/icons/TelegramIcon";

interface DetailProps extends Props {
   logo: string;
   setLogo: (data: any) => void;
}

const cfgPicker: ImagePickerConf = {
   borderRadius: "8px",
   language: "en",
   width: "180px",
   height: "150px",
   objectFit: "contain",
   compressInitial: null,
};

function DetailForm(props: DetailProps) {
   const changeLogo = (img: any) => {
      props.setLogo(img);
   };

   return (
      <>
         <div className="flex flex-col">
            <label className="text-lg font-semibold block">Project Name</label>
            <input
               type="text"
               placeholder="Future Coin"
               value={props.launchpadData.projectName}
               onChange={(e) => onChange(props, e, "projectName")}
               className="input input-bordered w-full block mt-3"
            />
         </div>
         <div className="flex flex-col">
            <div className="flex-1 mt-5">
               <label className="text-lg font-semibold block">
                  Short Description
               </label>
               <input
                  type="text"
                  placeholder="An Awesome project.."
                  value={props.launchpadData.shortDesc}
                  onChange={(e) => onChange(props, e, "shortDesc")}
                  className="input input-bordered w-full block mt-3"
               />
            </div>
            <div className="flex-1 my-5">
               <label className="text-lg font-semibold block mb-3">
                  Logo of Project
               </label>
               <ReactImagePickerEditor
                  config={cfgPicker}
                  imageChanged={changeLogo}
               />
            </div>
         </div>

         <label className="text-lg font-semibold block">List Banners</label>
         <div className="flex mt-3 mb-5">
            <div className="flex-1 w-1/5 box-content">
               <ReactImagePickerEditor config={cfgPicker} />
            </div>
            <div className="flex-1 w-1/5 box-content ml-5">
               <ReactImagePickerEditor config={cfgPicker} />
            </div>
            <div className="flex-1 w-1/5 box-content ml-5">
               <ReactImagePickerEditor config={cfgPicker} />
            </div>
            <div className="flex-1 w-1/5 box-content ml-5">
               <ReactImagePickerEditor config={cfgPicker} />
            </div>
         </div>

         <label className="text-lg font-semibold block">
            Description Content
         </label>
         <p className="text-sm">Use Markdown format</p>
         <div className="flex mt-3 w-full">
            <MDEditor
               value={props.launchpadData.description}
               className="w-full"
               onChange={(val: any) =>
                  props.setLaunchpadData((prev: any) => ({
                     ...prev,
                     description: val,
                  }))
               }
               textareaProps={{
                  placeholder: "Enter description content",
                  maxLength: 2000,
               }}
               preview="edit"
               maxHeight={100}
            />
         </div>

         <div className="divider divider-vertical my-9">
            <span className="font-bold">Social Links</span>
         </div>

         <div className="flex mb-2">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Project Website
               </label>
               <label className="input input-bordered flex items-center gap-2 my-4">
                  <GlobeIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={(e) => onChange(props, e, "address")}
                     className="grow"
                  />
               </label>
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">
                  Whitepaper / Documentation
               </label>
               <label className="input input-bordered flex items-center gap-2 my-4">
                  <BookOpenIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={(e) => onChange(props, e, "address")}
                     className="grow"
                  />
               </label>
            </div>
         </div>

         <div className="flex">
            <div className="flex-1">
               <label className="text-lg font-semibold block">Twitter</label>
               <label className="input input-bordered flex items-center gap-2 my-4">
                  <XIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={(e) => onChange(props, e, "address")}
                     className="grow"
                  />
               </label>
            </div>
            <div className="flex-1 ml-6">
               <label className="text-lg font-semibold block">Telegram</label>
               <label className="input input-bordered flex items-center gap-2 my-4">
                  <TelegramIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={(e) => onChange(props, e, "address")}
                     className="grow"
                  />
               </label>
            </div>
         </div>

         <div className="flex pb-10 justify-between mt-8">
            <button
               className="btn bg-base-100 border border-gray-700 px-10 hover:border-gray-700"
               onClick={() => props.setStep(1)}
            >
               Back
            </button>
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={() => props.setStep(3)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default DetailForm;
