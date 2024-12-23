"use client";

import { NavBarData, services, socialMedia } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import React, { useEffect } from "react";

export const Footer = () => {
  return (
    <div className=" w-full ">
      <div className=" bg-[#EAEFF2] w-full  py-6 md:py-10 lg:px-10 2xl:px-16 ">
        {/* Contact Section */}
        <section className=" text-[#414141]  lg:px-28 text-sm md:text-lg  px-5 font-medium">
          <ul className="grid grid-cols-1 text-sm md:text-base  md:place-items-center sm:grid-cols-3  ">
            <li className=" gap-2  flex items-center ">
              <CallIcon fontSize="inherit" className="text-[#414141]" />

              <a className="" href="tel:+91 9072514080">
                <span className="  ml-1">+91 9072514080</span>
              </a>
            </li>
            <li className=" md:ml-2 sm:ml-0 my-5 md:my-0 flex items-center">
              <EmailIcon fontSize="inherit" className="text-[#414141]" />
              <a className=" ml-2" href="mail:Info@skaktech.com">
                Info@skaktech.com
              </a>
            </li>
            <li className="   md:mt-2 lg:mt-0  flex items-center">
              <FileDownloadIcon fontSize="inherit" />
              <a className=" ml-2" href="">
                Brochure
              </a>
            </li>
          </ul>
        </section>
        <div className=" px-5 md:px-10 lg:px-5  mt-4 md:mt-10  ">
          {/* Quick Link Section */}
          <div className="   w-full">
            <section className=" my-1">
              <div className="  flex   items-center  justify-between">
                <h3 className="  font-semibold md:text-xl text-primary">
                  Quick Links
                </h3>
                <Link href={"/"}>
                  <Image
                    src={"/assets/icons/logo-2.svg"}
                    width={120}
                    height={40}
                    className=" mt-3 md:mt-0     object-contain cursor-pointer"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul
                className=" md:mt-3 gap-y-3 md:gap-y-0  grid grid-cols-1 text-sm
               md:text-base  md:grid-cols-3 lg:grid-cols-11"
              >
                {NavBarData.map((item, index) => (
                  <Link key={item.id} href={item.path}>
                    <li
                      className={` flex items-center ${
                        index === 0 ? `justify-start` : `  md:justify-center`
                      } ${
                        NavBarData.length - 1 !== index &&
                        `md:border-r-2 border-primary`
                      }   text-[#414141]`}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </section>
            {/* Services Section */}
            <section className="mt-10  md:mt-6">
              <h3 className="  font-semibold md:text-xl text-primary">
                Services
              </h3>

              <ul
                className=" flex flex-col text-sm 
               gap-y-3 md:gap-y-0 md:text-base md:flex-row  gap-1 mt-3 "
              >
                {services.map((item, index) => (
                  <li
                    key={index}
                    className={`  flex items-center  ${
                      index === 0
                        ? `justify-start pr-5`
                        : `md:justify-center md:px-5`
                    } ${
                      services.length - 1 !== index &&
                      `md:border-r-2 border-primary `
                    }    text-[#414141]`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/* Address Section */}
          <section className="  mt-10 md:mt-6 w-full b">
            <div className="flex items-start justify-between flex-col md:flex-row w-full">
              <div className="flex flex-col">
                <h3 className="  font-semibold md:text-xl text-primary">
                  Address
                </h3>

                <div className=" flex flex-col md:flex-row  md:justify-between mt-3">
                  <div>
                    <address className=" text-[#414141] flex flex-col text-sm md:text-base">
                      <a
                        href="https://maps.app.goo.gl/QZXjLE8Rmt9fHqQd6"
                        className="flex flex-col"
                      >
                        <span>
                          59/7757, Champion Arcade, Kozhikkode, Kerala
                        </span>

                        <span className="mt-2">India, PIN: 673002</span>
                      </a>
                    </address>
                    <div>
                      <ul className="my-5 md:mt-16 flex items-center gap-6 text-[#414141]">
                        {socialMedia.map((item) => (
                          <motion.li
                            whileHover={{ translateY: "-5px" }}
                            transition={{ duration: 0.2 }}
                            key={item.id}
                            className=" "
                          >
                            <a href={item.path}>
                              <item.Icon />
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-fit mt-3 md:mt-0 lg:p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.856909044865!2d75.74480077431639!3d11.24444720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6846545e8603d%3A0x5467ed3da5a2ec1c!2sSkaktech%20Software%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1729584041110!5m2!1sen!2sin"
                  className="   w-full md:w-[330px] h-[170px] rounded-md hover:scale-105  transition-all duration-300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <section className=" text-[#414141] md:px-28  px-3  bg-re  py-2 md:py-5  font-medium text-[10px] sm:text-sm bg-primary">
        <ul className=" grid grid-cols-2  md:flex   justify-center    sm:flex-row  items-center   ">
          <li className="mt-5  w-full  md:mt-0 hover:underline md:w-1/2 ">
            <a className="    " href="https://scanntek.com/">
              <span className="xl:border-r-2 pr-5">
                Made with Scantekk Technologies
              </span>
            </a>
          </li>
          <li className="sm:mt-5 mt-2  sm:pl-1 md:pl-0 md:mt-0 hover:underline md:w-1/2 w-full">
            <a href="">
              <span className="flex flex-col md:flex-row xl:border-r-2 xl:pl-5">
                <span>Copyright 2008-2019</span>
                <span className="md:ml-4 hidden sm:block pr-4">
                  All Rights Reserved
                </span>
              </span>
            </a>
          </li>
          <li className="sm:mt-5 xl:pl-5 md:ml-5 sm:ml-0 mt-2      md:mt-0 hover:underline md:w-1/2 w-full">
            <Link href="/privacy-policy">
              <span className="xl:border-r-2 text-left  pr-5">
                Privacy Policy
              </span>
            </Link>
          </li>
          <li className="sm:mt-5 mt-2 sm:pl-1 md:pl-0 xl:pl-5 md:mt-0 hover:underline md:w-1/2 w-full">
            <Link href="/terms-condition">
              <span>Terms and Conditions</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
