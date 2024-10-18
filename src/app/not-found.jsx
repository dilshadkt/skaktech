"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="  px-5 md:px-10 min-h-screen flex justify-center items-center content-center  ">
      <div className=" flex flex-col justify-center items-center  content-center">
        <motion.div
        className=" "
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className=" text-primary   font-semibold lg:font-bold text-[28px] sm:text-[40px] md:text-[90px]">404</h1>
        </motion.div>
        <motion.div
          className=" flex flex-col justify-center items-center  content-center"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h3 className=" font-semibold text-center md:text-start text-[24px] sm:text-[30px] md:text-[40px] uppercase  my-4">
            oops! Nothing was found
          </h3>
          <p className=" text-center whitespace-normal w-full md:max-w-[800px] text-[20px] ">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable
            <Link href="/" className=" text-primary ml-2 font-semibold underline">
              {" "}
              Return to Homepage
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
