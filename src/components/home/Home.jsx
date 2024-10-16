"use client";
import { industriesWeServe } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" w-full overflow-hidden overflow-x-hidden">
      {/* Banner section */}
      <section className=" w-full">
        <div
          // initial={{ scale: 0 }}
          // animate={{ rotate: 0, scale: 1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 260,
          //   damping: 20,
          //   duration: 1000,
          // }}
          className=" relative  overflow-hidden  2xl:min-h-screen      bg-[#51A2CC]   w-full"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=" z-30 flex flex-col px-5 lg:px-0  mt-20 lg:ml-10  py-16"
            >
              <div className=" z-40 flex flex-col">
                <span className=" lg:text-[28px] xl:text-[34px] md:max-w-[450px] xl:max-w-[600px] font-semibold text-white">
                  The Google Pub/Sub service has made PO and shipment
                  integrations very easy and seamless with Warehouse360.
                </span>
                <span className=" md:max-w-[350px] xl:max-w-[500px] mt-7 mb-5  text-[20px] text-white">
                  Customers now have a clear view of product details and the
                  ability to contact customer care 24/7 using the Mobile app.
                </span>
              </div>
              <div className=" flex  items-center justify-center content-center  md:flex-none md:content-normal md:items-start md:justify-normal  z-40 mt-5">
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
            <div className="absolute hidden md:size-[900px] lg:size-[1000px] md:block  z-10 xl:-right-[100px] md:-right-[240px] lg:-right-[220px]  -top-[100px] overflow-hidden bg-[#61AAD1]   rounded-full">
              <div className="bg-[#71B3D5]  md:size-[500px] lg:size-[700px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#81BCDA]  md:size-[300px] lg:size-[500px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={"/assets/images/redmi.png"}
                      width={400}
                      height={800}
                      alt="mobile"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
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
            viewport={{ once: true }}
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

            <p className=" md:ml-4 lg:ml-0 h   md:mt-16 md:pl-10 lg:mt-0      mt-5  w-full leading-[28px]  lg:pl-24 xl:pl-[230px]  xl:px-10 pr-5 lg:leading-[40px] text-[16px]  lg:text-[18px]">
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
            viewport={{ once: true }}
            className="  hidden 2xl:hidden      md:flex   justify-between    mt-[50px] px-5 md:px-0 "
          >
            <div className="md:ml-4 lg:ml-4    ">
              <p className="   mt-5  w-full leading-[28px]    d:pl-3 max-w-[1000px] pr-5 lg:leading-[40px] text-[16px]  lg:text-[20px]">
                18 At Skaktech, we pride ourselves on creating high-quality
                software products that drive efficiency, productivity, and
                growth. Our talented team of developers, engineers, and
                consultants work collaboratively to provide tailored solutions
                that align with our clients’ goals. From enterprise-level
                systems to specialized software, our offerings are designed to
                enhance operations, improve decision-making, and foster digital
                transformation.
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
            <Image
              className=" hidden md:block     mt-16     "
              src={"/assets/images/about2.png"}
              width={380}
              height={280}
              alt="about"
              quality={100}
            />
            <Image
              className="  block md:hidden   mt-16     "
              src={"/assets/images/about2.png"}
              width={380}
              layout="responsive"
              height={280}
              alt="about"
              quality={100}
            />
          </motion.div>

          {/* Visible for small and extra-large screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="    mt-5      md:hidden 2xl:block  relative  md:mt-[50px]     w-full  "
          >
            <Image
              className="  hidden md:block  px-5   xl:absolute  right-0 -top-[130px]  lg:px-0 "
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
              viewport={{ once: true }}
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
        <h1 className=" text-[30px] sm:text-[40px] lg:text-[60px] text-center text-primary">
          <span className=" font-medium">Industries</span>
          <span className=" font-bold ml-2">we serve</span>
        </h1>
        <div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" grid px-16 my-10 gap-16 sm:grid-cols-3 grid-cols-2 lg:py-10   lg:grid-cols-6 place-items-center items-center "
          >
            {industriesWeServe.map((item) => (
              <motion.li
                variants={itemVariants}
                className="    flex flex-col items-center  cursor-pointer"
                key={item.id}
                whileHover={{ translateY: "-10px" }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  className=" "
                  src={`/assets/icons/${item.icon}`}
                  alt={item.title}
                  width={26}
                  height={25}
                />
                <span className=" text-black text-[14px] md:text-[16px] px-5  font-normal pt-3 text-center">
                  {item.title}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className=" px-5 my-10  lg:pb-10 xl:my-5">
        <div className=" w-full flex flex-col    xl:flex-row  lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className=" w-full flex justify-center items-center  xl:w-1/2"
          >
            <Image
              src={"/assets/images/newsletter.png"}
              width={680}
              height={400}
              alt="newsletter"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className=" mt-10    px-5"
          >
            <h3 className=" text-[18px] sm:text-[20px] text-center  xl:text-start  font-medium text-[#8D8D8D]">
              Receive newsletters from Skaktech on a regular basis
            </h3>
            <h1 className=" text-center  xl:text-start font-semibold text-[30px] sm:text-[40px] py-3">
              Subscribe to the Newsletter
            </h1>
            <div>
              <form className="  " action="">
                <input
                  required
                  className=" w-full  my-2 border-2 h-[40px] pl-5 rounded-md"
                  type="text"
                  placeholder="Full Name*"
                  name=""
                  id=""
                />
                <div className=" w-full my-3 flex flex-col lg:flex-row">
                  <input
                    required
                    className=" w-full  xl:w-1/2 h-[40px] mr-4 rounded-md pl-5 border-2  "
                    type="text"
                    placeholder="E-Mail*"
                    name=""
                    id=""
                  />
                  <input
                    required
                    className="  w-full xl:w-1/2 h-[40px] rounded-md pl-5 border-2  mt-5 2xl:mt-0 2xl:ml-5 "
                    type="text"
                    placeholder="Phone Number*"
                    name=""
                    id=""
                  />
                </div>
                <div className=" my-3">
                  <input type="checkbox" name="check" id="check" />
                  <label
                    className="     text-[14px] ml-2"
                    htmlFor="check"
                    id="check"
                  >
                    By checking this box you are agreeing to our Privacy Policy
                    and Skaktech can send me related information
                  </label>
                </div>
                <button className=" w-full lg:w-min hover:bg-black hover:text-white hover:font-semibold transition-all duration-200 text-white bg-primary px-16 mt-5 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
