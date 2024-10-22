"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Industries } from "../industries";
import { NewsLetter } from "../newsletter";
import { sliders } from "@/constants";

const HomePage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderImage, setSliderImage] = useState(sliders[0].image);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSliderImage(sliders[sliderIndex].image);
  }, [sliderIndex, sliders]);
  return (
    <div className=" w-full overflow-hidden overflow-x-hidden">
      {/* Banner section */}
      <section className=" w-full">
        <div className=" relative      overflow-hidden  h-[800px]  md:h-[1000px]  lg:h-[700px] xl:h-[800px]     bg-home bg-cover object-cover   w-full">
          <div className="  flex flex-col-reverse lg:flex-row lg:justify-between ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="  absolute  justify-center items-center lg:justify-normal lg:items-start    bottom-0 z-30 flex flex-col md:text-center mt-40  lg:text-start  px-5 lg:px-0  w-full lg:w-1/2 sm:mt-20  lg:mt-0 lg:ml-10  py-16"
            >
              <div className="bg-black/30  p-2  lg:p-0 lg:bg-transparent rounded-md lg:rounded-none z-40 flex flex-col md:items-center lg:items-start">
                <span className=" lg:text-[28px] xl:text-[34px] md:max-w-[450px] xl:max-w-[600px] font-semibold text-white">
                  The Google Pub/Sub service has made PO and shipment
                  integrations very easy and seamless with Warehouse360.
                </span>
                <span className=" md:max-w-[350px] xl:max-w-[500px] mt-7 mb-5  text-[20px] text-white">
                  Customers now have a clear view of product details and the
                  ability to contact customer care 24/7 using the Mobile app.
                </span>
              </div>
              <div className=" flex  items-center justify-center content-center    md:content-normal md:items-start md:justify-normal  z-40 mt-5">
                <div className=" cursor-pointer bg-white hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded-md inline-flex items-center">
                  <Image
                    height={30}
                    alt="g-paly"
                    width={30}
                    src={"/assets/icons/g-play.png"}
                  />{" "}
                  <span className=" cursor-pointer font-semibold text-[16px] md:text-[20px] lg:text-[24px] ml-3">
                    Google Play
                  </span>
                </div>
                <div className="bg-[#268BBF] hover:bg-black  text-white  cursor-pointer transition-all duration-500 ml-5 px-4 py-2 rounded-md inline-flex items-center">
                  <Image
                    width={30}
                    height={30}
                    alt="app-store"
                    src={"/assets/icons/apple-logo.png"}
                  />{" "}
                  <span className=" font-semibold text-[16px] md:text-[20px] lg:text-[24px] ml-3 ">
                    App Store
                  </span>
                </div>
              </div>
            </motion.div>
            {/* banner right side mobile sectio  */}
            <div
              className={`   flex flex-col items-center content-center     absolute   top-[50px]  sm:top-[200px]  md:top-[100px]   lg:top-[150px]   md:bottom-0 right-0 w-full lg:w-1/2`}
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <motion.div
                  key={sliderImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    className=" p-6 md:p-0"
                    src={`/assets/images/slider/${sliderImage}`}
                    alt="slider"
                    width={
                      sliderIndex === 0 ? 500 : sliderIndex === 3 ? 600 : 700
                    }
                    height={400}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className=" hidden md:block absolute  left-1/2  bottom-0 mb-2">
            <ul className=" flex">
              {sliders.map((item, index) => (
                <li
                  key={index}
                  className={` ${
                    sliderIndex === index ? " bg-[#D9D9D9] " : "bg-[#767676]"
                  } rounded-full  mx-1  size-2`}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="    ">
        <div>
          <h1 className="  lg:my-10 text-center py-5  md:py-2 text-[40px] font-semibold">
            <div>
              <span>About</span>
              <span className=" text-primary ml-2">Skaktech</span>
            </div>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="    flex flex-col md:flex-row  px-5 md:px-0 "
          >
            <Image
              className=" hidden md:block    mt-16      "
              src={"/assets/images/about1.png"}
              width={380}
              height={280}
              alt="about"
              quality={100}
            />
            <Image
              className="  block md:hidden   mt-5     "
              src={"/assets/images/about1.png"}
              width={380}
              layout="responsive"
              height={280}
              alt="about"
              quality={100}
            />

            <p className=" md:ml-4 lg:ml-0 h   md:mt-16 md:pl-10 lg:mt-0    2xl:pr-48   mt-5  w-full leading-[28px]  lg:pl-24 xl:pl-[230px]  xl:px-10 pr-5 lg:leading-[40px] text-[16px]  lg:text-[18px]">
              Welcome to Skaktech, a global provider of innovative software
              solutions and services. Established in 2015, Skaktech has been
              dedicated to delivering cutting-edge technologies that empower
              businesses across various industries. Over the years, we have
              expanded our services and expertise, serving clients from around
              the world with customized solutions that meet their unique needs.
            </p>
          </motion.div>
          {/* visible for medium and large  screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative hidden 2xl:hidden  md:flex justify-between mt-[50px] px-5 md:px-0"
          >
            {/* Left section (Text) */}
            <div className="md:ml-4 lg:ml-4 w-full md:w-2/3">
              <p className="mt-5 w-full leading-[28px]  max-w-[1000px] pr-5 lg:leading-[40px] text-[16px] lg:text-[20px]">
                At Skaktech, we pride ourselves on creating high-quality
                software products that drive efficiency, productivity, and
                growth. Our talented team of developers, engineers, and
                consultants work collaboratively to provide tailored solutions
                that align with our clients’ goals. From enterprise-level
                systems to specialized software, our offerings are designed to
                enhance operations, improve decision-making, and foster digital
                transformation.
              </p>
              <motion.div
                whileHover={{ translateY: "-3px" }}
                className="hover:font-semibold 2xl:ml-5 mb-4 lg:mb-0 bg-primary cursor-pointer mt-5 px-4 py-2 inline-flex rounded-md text-white items-center"
              >
                <Image
                  src={"/assets/icons/download.png"}
                  height={15}
                  width={30}
                  alt="download"
                />
                <span className="ml-2">Company Profile</span>
              </motion.div>
            </div>

            {/* Right section (Image) */}
            <div className="relative w-full md:w-1/3">
              <Image
                className="hidden md:block absolute right-0  md:-top-[30px] lg:-top-[100px] mb-16"
                src={"/assets/images/about2.png"}
                width={380}
                height={280}
                alt="about"
                quality={100}
              />
              <Image
                className="block md:hidden mt-16"
                src={"/assets/images/about2.png"}
                width={380}
                layout="responsive"
                height={280}
                alt="about"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Visible for small and extra-large screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="    mt-5      md:hidden 2xl:block  relative  md:mt-[50px]     w-full  "
          >
            <Image
              className="  hidden md:block  px-5   xl:absolute  right-0 -top-[140px]  lg:px-0 "
              src={"/assets/images/about2.png"}
              width={480}
              height={250}
              alt="about"
              quality={100}
            />
            <Image
              className="   block md:hidden  px-5   xl:absolute  right-0 -top-[100px]  lg:px-0 "
              src={"/assets/images/about2.png"}
              width={480}
              height={250}
              layout="responsive"
              alt="about"
              quality={100}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className=" w-full "
            >
              <div className="md:px-10 px-5   ">
                <p className="   mt-5  w-full leading-[28px]    max-w-[900px] pr-5 lg:leading-[40px] text-[16px]   2xl:pl-5 lg:text-[18px] ">
                  At Skaktech, we pride ourselves on creating high-quality
                  software products that drive efficiency, productivity, and
                  growth. Our talented team of developers, engineers, and
                  consultants work collaboratively to provide tailored solutions
                  that align with our clients’ goals. From enterprise-level
                  systems to specialized software, our offerings are designed to
                  enhance operations, improve decision-making, and foster
                  digital transformation.
                </p>
                <motion.div
                  whileHover={{
                    translateY: "-3px",
                  }}
                  className=" hover:font-semibold  2xl:ml-5 mb-4 lg:mb-0   bg-primary cursor-pointer  mt-5  px-4 py-2 inline-flex rounded-md text-white items-center "
                >
                  <Image
                    src={"/assets/icons/download.png"}
                    height={15}
                    width={30}
                    alt="download"
                  />
                  <span className="  ml-2">Company Profile</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Industry Section */}
      <section className=" py-5 ">
        <Industries />
      </section>
      {/* Newsletter Section */}
      <section className=" px-5 my-10  lg:pb-10 xl:my-5">
        <NewsLetter />
      </section>
    </div>
  );
};

export default HomePage;
