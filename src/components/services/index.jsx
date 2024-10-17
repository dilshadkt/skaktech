"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const Services = ({ index, image, content, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div>
      <div
        className={`${
          index % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"
        }  flex px-5 md:px-10 py-10 lg:py-14  lg:px-16  flex-col lg:flex-row lg:justify-between  justify-center items-center content-center  `}
      >
        <motion.div
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: "false" }}
          className="  p-5 xl:p-0  flex items-center justify-center lg:flex-none  w-full lg:w-1/3"
        >
          <Image
            width={470}
            height={470}
            alt={image}
            src={`/assets/images/${image}`}
          />
        </motion.div>
        <motion.div
          initial={
            index % 2 === 0 ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className={`${
            index % 2 === 0 ? "pl-5" : "pr-5"
          } w-full lg:w-2/3 lg:max-w-[750px] `}
        >
          <h1 className=" text-[30px] md:text-[48px] my-5 lg:my-0 font-semibold text-black">
            {" "}
            {title}
          </h1>
          <p className={` text-[18px] md:text-[20px] text-black  my-5`}>{content}</p>
          <div
            className=" mt-3 md:mt-0 bg-primary hover:bg-red-300 cursor-pointer hover:text-primary transition-all
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
        </motion.div>
      </div>
    </div>
  );
};
