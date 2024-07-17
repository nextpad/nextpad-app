"use client";
import Image from "next/image";
import React, { useState } from "react";

function Carousel() {
   const images = [
      "Polkastarter_TRUF_1920x1080_1_a6c13577a6.webp",
      "Polkastarter_TRUF_1920x1080_5_ef4e9d9691.webp",
      "Polkastarter_TRUF_1920x1080_2_38fc76318f.webp",
   ];
   const [currImg, setCurrImg] = useState(0);

   const changeImage = (val: number) => {
      setCurrImg(val);
   };

   return (
      <>
         <Image
            src={`/images/projects/${images[currImg]}`}
            width={695}
            height={391}
            className="w-full rounded-lg"
            alt="banners"
         />
         <div className="flex flex-row justify-center pt-7">
            {images.map((val, i) => (
               <Image
                  key={i}
                  src={`/images/projects/${val}`}
                  width={695}
                  height={391}
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
