import React, { ChangeEvent, useState } from "react";
import { LaunchpadData, Props } from "./ILaunchpad";
import { onChange } from "./helper";
import ReactImagePickerEditor, {
   ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";
import MDEditor from "@uiw/react-md-editor";
import PlusIcon from "@/app/components/icons/PlusIcon";
import TrashIcon from "@/app/components/icons/TrashIcon";

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

         <div className="flex flex-col mt-5">
            <label className="text-lg font-semibold block">Tokenomics</label>
            <p className="text-sm">
               Token allocation represented as token amount
            </p>
            {props.launchpadData.tokenomics.map((val, key) => (
               <div key={key} className="flex flex-row items-center">
                  <input
                     type="text"
                     placeholder="Community, liquidity etc"
                     value={props.launchpadData.tokenomics[key].name}
                     onChange={(e) =>
                        props.setLaunchpadData((prev: LaunchpadData) => {
                           let newValue = prev.tokenomics.map((val, i) => {
                              if (i === key) {
                                 return {
                                    name: e.target.value,
                                    amount: val.amount,
                                 };
                              }
                              return val;
                           });

                           return { ...prev, tokenomics: newValue };
                        })
                     }
                     className="input input-bordered w-full block mt-3 mr-3"
                  />
                  <input
                     type="number"
                     value={props.launchpadData.tokenomics[key].amount}
                     onChange={(e) =>
                        props.setLaunchpadData((prev: LaunchpadData) => {
                           let newValue = prev.tokenomics.map((val, i) => {
                              if (i === key) {
                                 return {
                                    amount: e.target.value,
                                    name: val.name,
                                 };
                              }
                              return val;
                           });

                           return { ...prev, tokenomics: newValue };
                        })
                     }
                     className="input input-bordered w-full block mt-3"
                  />{" "}
                  <TrashIcon
                     className="size-14 mt-1 ml-3 text-rose-500 cursor-pointer"
                     onClick={() =>
                        props.setLaunchpadData(
                           (prev: LaunchpadData): LaunchpadData => {
                              const newValue = prev.tokenomics.filter(
                                 (val, i) => i != key
                              );
                              return {
                                 ...prev,
                                 tokenomics: [...newValue],
                              };
                           }
                        )
                     }
                  />
               </div>
            ))}
            <button
               className="btn btn-normal w-1/4 mt-4"
               onClick={() =>
                  props.setLaunchpadData((prev: LaunchpadData) => ({
                     ...prev,
                     tokenomics: [
                        ...prev.tokenomics,
                        { name: "", amount: "0" },
                     ],
                  }))
               }
            >
               <PlusIcon classList="size-4" /> Add More
            </button>
         </div>

         <div className="flex pb-10 justify-between mt-8">
            <button
               className="btn bg-base-100 border border-gray-700 px-10 hover:border-gray-700"
               onClick={() => props.setStep(2)}
            >
               Back
            </button>
            <button
               className="btn bg-teal-600 text-white px-10 hover:bg-teal-700"
               onClick={() => props.setStep(4)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default DetailForm;
