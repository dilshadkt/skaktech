'use client'
import { careers } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

export const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState(careers[0].title);
  const selectedItem = careers.find(
    (i) => i.title.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div>
      <div className=" px-10 flex lg:justify-between flex-col lg:flex-row ">
        <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:2}}
         viewport={{once:false}}
        className=" w-full  lg:w-1/3">
          <h1 className=" mb-3 flex  text-[30px] lg:text-[46px] font-semibold">
            Careers
            <span className=" ml-1 text-primary">@Skaktech</span>
          </h1>
          <p className=" text-[18px] w-full lg:max-w-[450px]">
            At our company, we specialize in software development services that
            cater to the unique needs of businesses across various industries.
          </p>
        </motion.div>
        <div className=" lg:ml-28  lg:w-2/3 ">
          <div className="  ">
            <div className="flex   career-scrollbar mt-5 lg:mt-0 mb-8 overflow-x-auto space-x-2 lg:space-x-16">
              {careers.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCategory(item.title)}
                  className={` capitalize text-[20px] lg:text-[26px] font-medium lg:px-4 px-2  ${
                    selectedCategory === item.title
                      ? "  border-b-2 border-primary"
                      : ""
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="  pt-4">
              {selectedItem &&
                selectedItem.details.map((detail, index) => (
                  <div
                    key={index}
                    className="mb-5 shadow-md px-5 py-3 flex justify-between items-center rounded-md"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-[20px]">
                        {detail.role}
                      </span>
                      <span className="text-[#8D8D8D] text-[14px]">
                        {detail.postions}
                      </span>
                    </div>
                    <div>
                      <button className="border-b-[6px] text-black font-semibold hover:border-b-[4px] hover:font-bold transition-all duration-75 border-primary">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
