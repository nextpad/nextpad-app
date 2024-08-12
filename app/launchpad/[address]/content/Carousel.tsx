"use client";
import BookOpenIcon from "@/app/components/icons/BookOpenIcon";
import GlobeIcon from "@/app/components/icons/GlobeIcon";
import TelegramIcon from "@/app/components/icons/TelegramIcon";
import XIcon from "@/app/components/icons/XIcon";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Context from "../Context";

function Carousel() {
   const { data } = useContext(Context);
   const images = data.banners;
   const [currImg, setCurrImg] = useState(0);

   const changeImage = (val: number) => {
      setCurrImg(val);
   };

   return (
      <>
         <div className="pb-6">
            <a
               href={data.metadata.website}
               target="_blank"
               className="hover:text-warning"
            >
               <GlobeIcon classList="size-7 inline" />
            </a>
            <a
               href={data.metadata.twitter}
               target="_blank"
               className="hover:text-white"
            >
               <XIcon classList="size-5 inline mx-4" />
            </a>
            <a
               href={data.metadata.telegram}
               target="_blank"
               className="hover:text-blue-400"
            >
               <TelegramIcon classList="size-6 inline mr-4" />
            </a>
            <a
               href={data.metadata.docs}
               target="_blank"
               title="Documentation pages"
               className="hover:text-red-600"
            >
               <BookOpenIcon classList="size-7 inline" />
            </a>
         </div>
         <Image
            src={images[currImg]}
            width={695}
            height={391}
            className="w-full rounded-lg"
            alt="banners"
         />
         <div className="flex flex-row justify-center pt-7">
            {images.map((val, i) => (
               <Image
                  key={i}
                  src={val}
                  width={640}
                  height={360}
                  className={`w-40 rounded-xl cursor-pointer hover:brightness-100 mr-3 ${
                     currImg == i
                        ? "border-white border-2 brightness-100"
                        : "brightness-50"
                  }`}
                  alt="banner"
                  onClick={() => changeImage(i)}
               ></Image>
            ))}
         </div>
      </>
   );
}

export default Carousel;
