"use client";

import { NavBarData, services, socialMedia } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import React from "react";
export const Footer = () => {
  return (
    <div className=" w-full ">
      <div className=" bg-black w-full  ">
        {/* Contact Section */}
        <section className=" text-white  lg:px-28 md:text-[20px] text-[14px] px-5 font-semibold">
          <ul className=" flex-btw flex-col md:flex-row  flex-wrap  py-10">
            <li className="   flex items-center">
              <Image
                className=" mr-2 lg:mr-0"
                src={"/assets/icons/phone.png"}
                alt="phone"
                height={30}
                quality={100}
                width={30}
              />

              <a className="  " href="tel:+91 7242732109">
                <span className="border-r-2 ml-3  border-[#268BBF]  pr-5">
                  +91 7242732109
                </span>
              </a>
              <a className=" ml-5" href="tel:+91 7242732109">
                +91 7242732109
              </a>
            </li>
            <li className=" my-5 md:my-0 flex items-center">
              <Image
                src={"/assets/icons/mail.png"}
                alt="phone"
                quality={100}
                height={30}
                width={30}
              />

              <a className=" ml-3" href="mail:Info@sktechnologies.com">
                Info@sktechnologies.com
              </a>
            </li>
            <li className="   md:mt-2 lg:mt-0  flex items-center">
              <Image
                src={"/assets/icons/download-footer.png"}
                alt="phone"
                height={30}
                quality={100}
                width={30}
              />

              <a className=" ml-3" href="">
                Brochure
              </a>
            </li>
          </ul>
        </section>
        <div className=" px-10 lg:px-5  ">
          {/* Quick Link Section */}
          <div className="   w-full">
            <section className=" my-5 md:my-10">
              <div className="  flex flex-col md:flex-row md:justify-between">
                <h3 className="  font-semibold text-[22px] text-primary">
                  Quick Links
                </h3>
                <Link href={"/"}>
                  <Image
                    src={"/assets/icons/logo.png"}
                    width={150}
                    height={50}
                    className=" mt-3 md:mt-0 cursor-pointer"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className=" mt-5 flex flex-col flex-wrap md:flex-row">
                {NavBarData.map((item, index) => (
                  <Link key={item.id} href={item.path}>
                    <li className="mr-10 mt-3">
                      <span
                        className={` ${
                          index === NavBarData.length - 1
                            ? "md:border-none"
                            : "md:border-r-2"
                        }  border-primary pr-5 text-[20px] text-white hover:font-semibold tranisio duration-150`}
                      >
                        {item.title}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </section>
            {/* Services Section */}
            <section className="      my-16">
              <h3 className="   font-semibold text-[22px] text-primary">
                Services
              </h3>

              <ul className=" flex flex-col md:flex-row  mt-5 ">
                {services.map((item, index) => (
                  <li key={item.id} className="mr-10 mt-3">
                    <span
                      className={` cursor-pointer ${
                        index === services.length - 1
                          ? "md:border-none"
                          : "md:border-r-2 "
                      } border-primary pr-5 text-[20px] text-white hover:font-semibold transition-all duration-200`}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/* Address Section */}
          <section className=" pb-5 mt-16">
            <h3 className="  font-semibold text-[22px] text-primary">
              Address
            </h3>
            <div className=" flex flex-col md:flex-row  md:justify-between mt-5">
              <div>
                <address className=" text-white text-[20px]">
                  Chandler J Gilbert: 2089 Baker St. London W1U 6RN, England
                  <br />
                  <a href=""> www.skaktech.com</a>
                  <br /> Ph: <a href="tel:+91 7843473024">+91 7843473024</a>
                </address>
                <div>
                  <ul className=" mt-7 flex items-center">
                    {socialMedia.map((item) => (
                      <motion.li
                        whileHover={{ translateY: "-5px" }}
                        transition={{ duration: 0.2 }}
                        key={item.id}
                      >
                        <a href="">
                          <Image
                            className=" mr-7 mt-5"
                            src={`/assets/icons/${item.icon}`}
                            alt="icon"
                            width={30}
                            height={25}
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className=" p-2">
                <Image
                  className=" cursor-pointer hover:scale-105  transition-all duration-300 mt-5 md:mt-0"
                  src={"/assets/images/map.png"}
                  width={330}
                  height={170}
                  alt="map"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <section className=" text-white md:px-28 px-10  py-5  font-medium text-[16px] bg-primary">
        <ul className="flex flex-wrap  justify-center  items-center md:flex-nowrap">
          <li className="mt-5 md:mt-0 hover:underline w-1/2 md:w-auto">
            <a className=" px-2 md:px-0" href="">
              <span className="xl:border-r-2 pr-5">
                Made with Scantekk Technologies
              </span>
            </a>
          </li>
          <li className="mt-5 md:mt-0 hover:underline w-1/2 md:w-auto">
            <a href="">
              <span className="flex flex-col md:flex-row xl:border-r-2 xl:pl-5">
                <span>Copyright 2008-2019</span>
                <span className="md:ml-4 pr-4">All Rights Reserved</span>
              </span>
            </a>
          </li>
          <li className="mt-5 xl:pl-2   md:mt-0 hover:underline w-1/2 md:w-auto">
            <a href="">
              <span className="xl:border-r-2 pr-5">Privacy Policy</span>
            </a>
          </li>
          <li className="mt-5 xl:pl-2 md:mt-0 hover:underline w-1/2 md:w-auto">
            <a href="">
              <span>Terms and Conditions</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
