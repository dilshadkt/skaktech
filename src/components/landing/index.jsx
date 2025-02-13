"use client";

import { servicesList, technologies } from "@/constants";
import Image from "next/image";
import React from "react";
import { Services } from "../services";
import { Registration } from "../registration";
import { motion } from "framer-motion";
import { Industries } from "../industries";
import { NewsLetter } from "../newsletter";
import { Careers } from "../careers";
import ClientReviews from "../client-review";
import Gallery from "../gallery";
import LandingSecond from "../landing-sections";
import MySlider from "../MySlider";




const LandingPage = () => {
  return (
    <div className=" overflow-x-hidden">
      <section className="   py-10  xl:h-[85vh] 2xl:[90vh] flex flex-col justify-center items-center bg-landing bg-cover bg-center bg-no-repeat">
        <motion.div
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}  
          transition={{ duration: 0.6 }}
          className="  pt-10 w-full  px-5 lg:px-0  flex flex-col  justify-center items-center content-center h-full"
        >
          <h1 className="pt-20 text-[24px] sm:text-[30px] lg:text-[64px] max-w-[500px] lg:max-w-[1080px] text-center font-bold text-[#404040] ">
            Products You Can Rely On, Service that Makes
            <span className=" text-[#268BBF]"> You Feel Valued</span>{" "}
          </h1>
          <p className=" text-[#404040] my-5 text-[16px] md:text-[20px] md:max-w-[800px] md:px-10 px-5 text-center">
            At our software company, we are committed to delivering exceptional
            value through innovative, reliable, and tailored solutions that meet
            the unique needs of our customers.
          </p>
          <div className=" bg-primary cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 text-[16px] hover:font-semibold px-4 py-2 rounded-md text-white">
            Explore Skaktech
          </div>
        </motion.div>
      </section>
      <section className=" my-16">
        <LandingSecond />
      </section>
      <section className=" my-10 lg:my-16">
        <div className="  px-5 md:px-10 flex justify-between flex-col  lg:flex-row w-full">
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className=" md:ml-3  w-full mt-10 lg:mt-0  lg:w-1/2   mx-auto"
          >
            <h1 className=" text-black text-center md:text-start font-semibold text-[40px]">
              Why <span className="   text-primary">Skaktech</span>
            </h1>
            <p className="  mt-3 leading-[38px]  text-[16px] md:text-[20px] ">
              At our software company, we are committed to delivering
              exceptional value through innovative, reliable, and tailored
              solutions that meet the unique needs of our customers. With nearly
              two decades of experience, we have successfully served clients
              across India, the Middle East, and Africa, providing a diverse
              range of software products and services that enhance business
              efficiency and drive growth. Our dedicated team of experts works
              closely with each client to understand their specific challenges
              and objectives, ensuring a personalized approach to every project.
              We prioritize quality, customer satisfaction, and long-term
              partnerships, offering ongoing support and continuously evolving
              our offerings to stay ahead in a rapidly changing technological
              landscape. When you choose us, you choose a trusted partner
              focused on your success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className=" w-full lg:w-1/2"
          >
            <ul className=" grid mt-10 grid-cols-2 lg:pr-5 xl:pr-0 md:grid-cols-4 gap-10 place-items-center md:gap-20">
              {technologies.map((item) => (
                <li key={item.id}>
                  <motion.div
                    className=" cursor-pointer"
                    whileHover={{ translateY: "-10px" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={`/assets/icons/technologies/${item.icon}`}
                      alt={item.icon}
                      height={55}
                      width={55}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </section>
      <section className=" py-5 lg:py-16">
        <Registration />
      </section>
      <section>
        <MySlider/>
      </section>
      {/* <section>
        <ul className=" overflow-x-hidden">
          {servicesList.map((item, index) => (
            <li className=" " key={item.id}>
              <Services
                index={index}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </section> */}
      {/* <section>
        <ClientReviews />
      </section> */}
      <section className=" my-12">
        <Industries />
      </section>
      {/* <section className=" py-20">
        <Careers />
      </section> */}

      {/* <section>
        <Gallery />
      </section> */}
      {/* <section className=" my-10">
        <NewsLetter />
      </section> */}
    </div>
  );
};

export default LandingPage;
