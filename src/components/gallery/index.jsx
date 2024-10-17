"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{once:false}}
        className="  w-full px-5   md:px-10"
      >
        <h1 className=" text-[36px] md:text-[48px] font-bold">
          Life <span className=" text-primary">@Skaktech</span>
        </h1>
      </motion.div>
      <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-4 xl:min-h-screen px-10">
        <div className="flex flex-col space-y-4">
          <div className=" flex items-center justify-center  h-[200px] md:h-[300px] relative">
            <Image
              className=" hover:scale-105 cursor-pointer transition-all duration-300"
              src="/assets/images/life/life1.png"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" flex items-center justify-center  h-[200px] md:h-[300px] relative">
            <Image
              className=" hover:scale-105 cursor-pointer transition-all duration-300"
              src="/assets/images/life/life2.png"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className=" flex items-center justify-center h-[200px] relative">
            <Image
              className=" hover:scale-105 cursor-pointer transition-all duration-300"
              src="/assets/images/life/life3.png"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" flex items-center justify-center h-[200px] relative">
            <Image
              className=" hover:scale-105 cursor-pointer transition-all duration-300"
              src="/assets/images/life/life4.png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" flex items-center justify-center h-[200px] relative">
            <Image
              className=" hover:scale-105 cursor-pointer transition-all duration-300"
              src="/assets/images/life/life5.png"
              alt="Image 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="        space-y-4">
          <div className=" flex items-center justify-center  h-[200px] md:h-[300px] relative">
            <Image
              className=" hover:scale-105 cursor-pointer transition-all duration-300"
              src="/assets/images/life/life6.png"
              alt="Image 6"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex     space-x-4  h-[200px] md:h-[300px]">
            <div className=" flex-1 flex items-center justify-center relative">
              <Image
                className=" hover:scale-105 cursor-pointer transition-all duration-300"
                src="/assets/images/life/life7.png"
                alt="Image "
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" flex-1 flex items-center justify-center relative">
              <Image
                className=" hover:scale-105 cursor-pointer transition-all duration-300"
                src="/assets/images/life/life8.png"
                alt="Image "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
