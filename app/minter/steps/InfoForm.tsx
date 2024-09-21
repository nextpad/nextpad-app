import React from "react";
import { TokenData } from "./ITokenData";
import GlobeIcon from "@/app/components/icons/GlobeIcon";
import XIcon from "@/app/components/icons/XIcon";
import TelegramIcon from "@/app/components/icons/TelegramIcon";
import ReactImagePickerEditor, {
   ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";

interface Props {
   step: number;
   setStep: (id: number) => void;
   tokenData: TokenData;
   setTokenData: (data: any) => void;
   setLogo: (data: any) => void;
   logo: string;
}

const cfgPicker: ImagePickerConf = {
   borderRadius: "8px",
   language: "en",
   width: "180px",
   height: "150px",
   objectFit: "contain",
   compressInitial: null,
};

function InfoForm(props: Props) {
   const changeLogo = (img: any) => {
      props.setLogo(img);
   };

   const changeDescription = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         description: event.target.value,
      }));
   };

   const changeWebsite = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         website: event.target.value,
      }));
   };

   const changeTwitter = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         twitter: event.target.value,
      }));
   };

   const changeTelegram = (event: any) => {
      props.setTokenData((prev: any) => ({
         ...prev,
         telegram: event.target.value,
      }));
   };

   return (
      <>
         <div className="flex flex-col">
            <div className="flex-1">
               <label className="text-lg font-semibold block mb-3">
                  Logo for Token
               </label>
               <ReactImagePickerEditor
                  config={cfgPicker}
                  imageSrcProp={props.logo}
                  imageChanged={changeLogo}
               />
            </div>
            <div className="flex-1 mt-5">
               <label className="text-lg font-semibold flex justify-between">
                  <div>Short Description</div>
                  <div
                     className={`text-sm pt-2 ${
                        props.tokenData.description.length > 110
                           ? "text-rose-500"
                           : ""
                     }`}
                  >
                     {props.tokenData.description.length} / 110
                  </div>
               </label>
               <textarea
                  rows={3}
                  onChange={changeDescription}
                  className="textarea textarea-bordered w-full my-4 text-lg"
                  placeholder="Provide short information about the token"
               >
                  {props.tokenData.description}
               </textarea>
            </div>
         </div>
         <div className="flex flex-col">
            <div className="flex-1">
               <label className="text-lg font-semibold block">
                  Social Links
               </label>
               <label className="input input-bordered flex items-center gap-2 my-4">
                  <GlobeIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={changeWebsite}
                     className="grow"
                     placeholder="https://example.com"
                  />
               </label>
            </div>
            <div className="flex-1">
               <label className="input input-bordered flex items-center gap-2 mt-2 mb-4">
                  <XIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={changeTwitter}
                     className="grow"
                     placeholder="https://twitter.com/tol_dapp"
                  />
               </label>
            </div>
            <div className="flex-1">
               <label className="input input-bordered flex items-center gap-2 mt-2 mb-4">
                  <TelegramIcon classList="size-5" />
                  <input
                     type="text"
                     onChange={changeTelegram}
                     className="grow"
                     placeholder="https://t.me/xxx"
                  />
               </label>
            </div>
         </div>
         <div className="flex mt-2 pb-10 justify-between">
            <button
               className="btn border-gray-400 bg-base-100 px-10"
               onClick={() => props.setStep(1)}
            >
               Back
            </button>
            <button
               className="btn bg-gray-900 text-white px-10 hover:bg-gray-700"
               onClick={() => props.setStep(3)}
            >
               Next
            </button>
         </div>
      </>
   );
}

export default InfoForm;
