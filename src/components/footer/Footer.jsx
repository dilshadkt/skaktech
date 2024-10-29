"use client";

import { NavBarData, services, socialMedia } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


import React, { useEffect } from "react";
export const Footer = () => {
  return (
    <div className=" w-full ">
      <div className=" bg-[#EAEFF2] w-full  ">
        {/* Contact Section */}
        <section className=" text-[#414141]  lg:px-28 md:text-[20px] text-[14px] px-5 font-semibold">
          <ul className="  grid grid-cols-2  md:place-items-center sm:grid-cols-3  py-5">
            <li className="   flex items-center ">
              <Image
                className=" mr-2 lg:mr-0"
                src={"/assets/icons/phone.svg"}
                
                alt="phone"
                
                height={20}
                quality={100}
                width={20}
              />

              <a className="  " href="tel:+91 9072514080">
                <span className="  ml-1">
                  +91 9072514080
                </span>
              </a>
            </li>
            <li className=" ml-2 sm:ml-0 my-5 md:my-0 flex items-center">
              <Image
                src={"/assets/icons/mail.svg"}
                alt="phone"
                quality={100}
                height={20}
                width={20}
              />

              <a className=" ml-2" href="mail:Info@skaktech.com">
                Info@skaktech.com
              </a>
            </li>
            <li className="   md:mt-2 lg:mt-0  flex items-center">
              <Image
                src={"/assets/icons/download-footer.svg"}
                alt="phone"
                height={20}
                quality={100}
                width={20}
              />

              <a className=" ml-2" href="">
                Brochure
              </a>
            </li>
          </ul>
        </section>
        <div className=" px-5 md:px-10 lg:px-5  ">
          {/* Quick Link Section */}
          <div className="   w-full">
            <section className=" my-5 md:my-5">
              <div className="  flex   items-center  justify-between">
                <h3 className="  font-semibold text-[22px] text-primary">
                  Quick Links
                </h3>
                <Link href={"/"}>
                  <Image
                    src={"/assets/icons/logo-2.svg"}
                    width={150}
                   
                    height={40}
                    className=" mt-3 md:mt-0     object-contain cursor-pointer"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className=" mt-5  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7">
                {NavBarData.map((item, index) => (
                  <Link key={item.id} href={item.path}>
                    <li className="mr-10 mt-3">
                      <span
                        className={` ${
                          index === NavBarData.length - 1
                            ? "md:border-none"
                            : "lg:border-r-2 "
                        }  border-primary pr-5 text-[16px] md:text-[20px] text-[#414141] hover:font-semibold tranisio duration-150`}
                      >
                        {item.title}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </section>
            {/* Services Section */}
            <section className="     my-5  md:my-10">
              <h3 className="   font-semibold  text-[22px] text-primary">
                Services
              </h3>

              <ul className=" flex flex-col md:flex-row  mt-5 ">
                {services.map((item, index) => (
                  <li key={item.id} className="mr-10 mt-3">
                    <span
                      className={` cursor-pointer ${
                        index === services.length - 1
                          ? "md:border-none"
                          : "lg:border-r-2 "
                      } border-primary pr-5 text-[16px] md:text-[20px] text-[#414141] hover:font-semibold transition-all duration-200`}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/* Address Section */}
          <section className=" pb-5 mt-5 md:mt-14">
            <h3 className="  font-semibold text-[22px] text-primary">
              Address
            </h3>
            <div className=" flex flex-col md:flex-row  md:justify-between mt-5">
              <div>
                <address  className=" text-[#414141] text-[16px] md:text-[20px]">
                  <a href="https://maps.app.goo.gl/QZXjLE8Rmt9fHqQd6">
                  59/7757, Champion Arcade, Kozhikkode, Kerala
                  <br />
                  <span>India, PIN: 673002</span>
                  </a>
                </address>
                <div>
                  <ul className=" md:mt-7 flex items-center">
                    {socialMedia.map((item) => (
                      <motion.li
                        whileHover={{ translateY: "-5px" }}
                        transition={{ duration: 0.2 }}
                        key={item.id}
                        className=" "
                      >
                        <a href={item.path}>
                          <Image
                            className=" mr-7 mt-5"
                            src={`/assets/icons/${item.icon}`}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="  mt-3 md:mt-0 lg:p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.856909044865!2d75.74480077431639!3d11.24444720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6846545e8603d%3A0x5467ed3da5a2ec1c!2sSkaktech%20Software%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1729584041110!5m2!1sen!2sin"
                  
                  className="   w-full md:w-[330px] h-[170px] rounded-md hover:scale-105  transition-all duration-300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <section className=" text-[#414141] md:px-28   px-5  py-2 md:py-5  font-medium text-[10px] sm:text-[16px] bg-primary">
        <ul className="flex   justify-center    sm:flex-row  items-center   ">
          <li className="mt-5  md:mt-0 hover:underline w-1/2 md:w-auto">
            <a className="    " href="https://scanntek.com/">
              <span className="xl:border-r-2 pr-5">
                Made with Scantekk Technologies
              </span>
            </a>
          </li>
          <li className="sm:mt-5 mt-2  sm:pl-1 md:pl-0 md:mt-0 hover:underline w-1/2 md:w-auto">
            <a href="">
              <span className="flex flex-col md:flex-row xl:border-r-2 xl:pl-5">
                <span>Copyright 2008-2019</span>
                <span className="md:ml-4 hidden sm:block pr-4">All Rights Reserved</span>
              </span>
            </a>
          </li>
          <li className="sm:mt-5 xl:pl-5 ml-5 sm:ml-0 mt-2     md:mt-0 hover:underline w-1/2 md:w-auto">
            <a href="">
              <span className="xl:border-r-2 pr-5">Privacy Policy</span>
            </a>
          </li>
          <li className="sm:mt-5 mt-2 sm:pl-1 md:pl-0 xl:pl-5 md:mt-0 hover:underline w-1/2 md:w-auto">
            <a href="">
              <span>Terms and Conditions</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
