"use client";

import { clients, partners } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export const Registration = () => {
  return (
    <div className=" overflow-hidden">
      <section className=" px-5 md:px-10 mb-10">
        <div className="  mt-3">
          <h1 className=" mb-3  text-center  text-[30px] md:text-[40px] font-semibold text-black">
            Our <span className=" text-primary">Registrations</span>
          </h1>
          <p className=" mt-3 text-[20px] text-black">
            We prioritize quality, customer satisfaction, and long-term
            partnerships, offering ongoing support and continuously evolving our
            offerings to stay ahead in a rapidly changing technological
            landscape. When you choose us, you choose a trusted partner focused
            on your success.
          </p>
        </div>

        <motion.div
          animate={{ x: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className=" "
        >
          <ul className=" mt-10 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 items-center place-items-center ">
            {partners.map((item) => (
              <li className=" my-3 md:my-0 cursor-pointer" key={item.id}>
                <Image
                  src={`/assets/images/partners/${item.icon}`}
                  alt={item.icon}
                  width={100}
                  quality={100}
                  height={65}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
      <section className=" px-5  text-center md:px-10 xl:px-0 pt-10">
        <div className=" max-w-[950px]  mx-auto ">
          <h3 className="  text-center text-black font-semibold text-[20px]">
            Our <span className=" text-primary">Clients</span>
          </h3>
          <p className=" my-10 text-black font-bold text-[24px] md:text-[30px] lg:text-[40px] ">
            RIGHT DECISIONS ON RIGHT TIME WILL ENSURE THE SUCCESS OF ALL
            BUSINESS
          </p>
        </div>
        <motion.div
          animate={{ x: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <ul className="  border-[#DAE3FE] lg:border-t-[1px] lg:border-b-[1px]  grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 items-center place-items-center py-1  my-2">
            {clients.map((item) => (
              <li className=" my-3 lg:px-2 md:my-0 cursor-pointer" key={item.id}>
                <Image
                  src={`/assets/images/clients/${item.icon}`}
                  alt={item.icon}
                  width={200}
                  height={40}
                  quality={100}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
};
