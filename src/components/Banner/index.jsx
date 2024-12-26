import Image from "next/image";
import React from "react";

const HeaderBanner = ({ image, title = null, desc = null }) => {
  return (
    <div className=" relative flex flex-col items-center justify-center  h-[230px] overflow-hidden md:h-[400px] bg-gradient-to-b from-white to-black bg-red-500">
      <Image
        src={`${image}`}
        alt="career"
        width={1000}
        height={600}
        quality={100}
        className="absolute w-full h-full object-cover opacity-60 left-0 right-0 top-0 bottom-0 m-auto"
      />
      
      {title && (
        <h4 className="text-[#268BBF]  leading-loose text-center font-bold text-xl md:text-5xl mt-10 relative z-30  ">
          {title}
        </h4>
      )}
      {desc && (
        <h6 className=" text-center text-base md:text-[26px] mt-2 md:mt-4 font-semibold text-[#404040] z-30">
          {desc}
        </h6>
      )}
    </div>
  );
};

export default HeaderBanner;
