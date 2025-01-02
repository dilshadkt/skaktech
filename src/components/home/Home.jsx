"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Industries } from "../industries";
import { NewsLetter } from "../newsletter";
import { sliders } from "@/constants";
import { Formik } from 'formik';
import * as Yup from 'yup';

const HomePage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderImage, setSliderImage] = useState(sliders[0].image);
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
      setModalOpen(!modalOpen)
  }

  const validationSchema = Yup.object({  // Now using 'Yup' instead of 'yup'
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
      resume: Yup.mixed().required('Resume is required')
  });

  // Initialize form values
  const initialValues = {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      resume: null,
      message: ''
  }

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
  }

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
        <div className=" relative  lg:px-10 2xl:px-16   overflow-hidden  h-[800px]  md:h-[1000px]  lg:h-[700px] xl:h-[750px]     bg-home bg-cover object-cover   w-full">
          <div className="  flex flex-col-reverse lg:flex-row lg:justify-between ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="  absolute  md:bottom-0   justify-center items-center lg:justify-normal lg:items-start    bottom-0 lg:top-[90px] z-30 flex flex-col md:text-center     lg:text-start  px-5 lg:px-0  w-full lg:w-1/2 sm:mt-20 lg:mt-0    lg:ml-10  py-16"
            >
              <div className="bg-black/30  p-2  lg:p-0 lg:bg-transparent rounded-md lg:rounded-none z-40 flex flex-col md:items-center lg:items-start">
                <span className=" lg:text-[28px] xl:text-[34px] md:max-w-[450px] xl:max-w-[600px] font-semibold text-white">
                  The Google Pub/Sub service has made PO and shipment
                  integrations very easy and seamless with Warehouse360.
                </span>
                <span className=" md:max-w-[350px] xl:max-w-[500px] mt-7 mb-5  text-[18px] sm:text-[20px] text-white">
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
              className={`
                ${
                  sliderIndex === 1 || sliderIndex === 2
                    ? "top-[100px]"
                    : "top-[50px] "
                }
                
                flex flex-col items-center content-center     absolute     md:top-[100px]   lg:top-[150px]   md:bottom-0 right-0 w-full lg:w-1/2`}
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
                    className={`    p-6 md:p-0`}
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
      <section className="  pb-10  flex flex-col md:gap-y-5 lg:gap-y-16 relative ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className=" lg:px-10 2xl:px-16  flex flex-col-reverse   md:flex-row md:justify-between"
        >
          <div className=" px-5  md:pl-10 md:mt-10 mt-5">
            <h1 className=" text-[30px]  md:text-[38px] font-semibold">
              <span>About</span>
              <span className=" text-primary ml-2">Skaktech</span>
            </h1>
            <p className=" max-w-[800px]  relative z-20  text-[16px] md:text-[18px] xl:text-[20px] leading-[36px] mt-7">
              Welcome to Skaktech, a global provider of innovative software
              solutions and services. Established in 2015, Skaktech has been
              dedicated to delivering cutting-edge technologies that empower
              businesses across various industries. Over the years, we have
              expanded our services and expertise, serving clients from around
              the world with customized solutions that meet their unique needs.
            </p>
          </div>
          <div className=" flex   items-center justify-center my-3 md:hidden">
            <Image
              className=" pl-5"
              src={"/assets/images/about1-1.svg"}
              width={480}
              height={300}
              alt="about1"
            />
          </div>
          <div className=" absolute right-0 md:flex hidden justify-end   ">
            <Image
              className=" pl-5 md:opacity-50 lg:opacity-100 md:w-[240px] lg:w-[330px]"
              src={"/assets/images/about1.svg"}
              width={330}
              height={500}
              alt="about1"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className=" grid grid-cols-1 md:grid-cols-5 gap-5 items-center justify-center px-10"
        >
          <div className="md:col-span-2 md:pl-5   px-5 md:px-0  flex justify-center md:justify-normal">
            <Image
              className="h-[30vh] md:h-[50vh]"
              src={"/assets/images/about2.svg"}
              width={450}
              height={330}
              alt="about2"
            />
          </div>
          <div className="col-span-3  h-full ">
            <div className="flex flex-col justify-between h-full">
              <p
                className="
               text-left md:text-right leading-[36px] md:px-5   
              text-[16px] md:text-[18px] xl:text-[20px]"
              >
                At Skaktech, we pride ourselves on creating high-quality
                software products that drive efficiency, productivity, and
                growth. Our talented team of developers, engineers, and
                consultants work collaboratively to provide tailored solutions
                that align with our clients’ goals. From enterprise-level
                systems to specialized software, our offerings are designed to
                enhance operations, improve decision-making, and foster digital
                transformation.
              </p>
              <div className=" flex items-end justify-start md:justify-end px-5 mb-2">
                <motion.div
                  whileHover={{ translateY: "-3px" }}
                  className=" md:ml-5 cursor-pointer text-[10px] md:text-[16px] bg-primary px-3 py-2 rounded-md inline-flex text-white"
                >
                  <Image
                    src={"/assets/images/download1.svg"}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <span onClick={handleModal} className=" ml-2">Company Profile</span>{" "}
                </motion.div>
                </div>
              </div>

          </div>
        </motion.div>
      </section>
      <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-300 z-50
    ${modalOpen ? 'bg-opacity-50 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'}`}
            >
                <div
                    className={`bg-white p-5 rounded-md shadow-lg w-4/5 md:w-1/3 transform transition-all duration-300 ease-in-out
        ${modalOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                >
                    <div className="flex justify-end items-center mb-6">
                        
                        <button
                            onClick={handleModal}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit, handleChange, values, setFieldValue }) => (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        onChange={handleChange}
                                        value={values.fullName}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        onChange={handleChange}
                                        value={values.phone}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
      {/* Industry Section */}
      <section className=" py-5  lg:px-10 2xl:px-16">
        <Industries />
      </section>
      {/* Newsletter Section */}
      <section className=" md:px-5 my-10 lg:px-10 2xl:px-16  lg:pb-10 xl:my-5">
        <NewsLetter />
      </section>

    </div>
  );
};

export default HomePage;
