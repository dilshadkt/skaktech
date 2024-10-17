"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LandingSecond = () => {
  return (
    <div>
      <section>
        <div className=" flex lg:justify-between flex-col lg:flex-row   items-center  px-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1}}
            viewport={{ once: false }}
            className=" w-full lg:w-1/2"
          >
            <Image
              src={"/assets/images/landing1.png"}
              width={640}
              className=" p-10"
              height={400}
              alt="landing1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1}}
            viewport={{ once: false }}
            className=" w-full mt-3 lg:mt-0 lg:w-1/2"
          >
            <p className=" text-[21px] leading-[40px]">
              Founded in 2005, our software company has been at the forefront of
              delivering innovative software solutions and services to clients
              across India, the Middle East, and Africa. Over the years, we have
              expanded our portfolio of products and services to meet the
              evolving needs of our diverse clientele, ensuring quality and
              reliability in every project we undertake. With a strong
              commitment to excellence, we continue to empower businesses with
              cutting-edge technology solutions that drive growth and success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingSecond;
