import Image from "next/image";
import React from "react";

export const Services = ({ index, image, content, title }) => {
  return (
    <div>
      <div
        className={`${
          index % 2 === 0 ? "flex-row" : "md:flex-row-reverse"
        }  flex px-10 py-20 md:justify-between flex-col md:flex-row  `}
      >
        <div className="  w-full lg:w-1/3">
          <Image
            width={470}
            height={470}
            alt={image}
            src={`/assets/images/${image}`}
          />
        </div>
        <div className=" w-full lg:w-2/3 lg:max-w-[750px] ">
          <h1 className=" text-[48px] font-semibold text-black"> {title}</h1>
          <p className=" text-[20px] text-black my-5">{content}</p>
          <div
            className=" bg-primary hover:bg-red-300 cursor-pointer hover:text-primary transition-all
           duration-300  font-semibold  rounded-md px-5 py-2 text-white inline-flex items-center"
          >
            <span>Learn More</span>
            <Image
              className=" ml-2 "
              src={"/assets/icons/right-arrow.png"}
              height={12}
              width={16}
              alt="arrow "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
