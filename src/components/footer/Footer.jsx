import { NavBarData, services, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const Footer = () => {
  return (
    <div>
      <div className=" bg-black   w-full">
        {/* Contact Section */}
        <section className=" text-white  lg:px-28 md:text-[22px] text-[16px] px-5 font-semibold">
          <ul className=" flex-btw flex-col md:flex-row  py-10">
            <li className="   flex items-center">
              <Image
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
            <li className=" flex items-center">
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
        <div className=" px-10 ">
          {/* Quick Link Section */}
          <section className=" my-5 md:my-10">
            <div className="  flex flex-col md:flex-row md:justify-between">
              <h3 className="  font-semibold text-[22px] text-primary">
                Quick Links
              </h3>
              <Image
                src={"/assets/icons/logo.png"}
                width={150}
                height={50}
                className=" mt-3 md:mt-0 cursor-pointer"
                alt="logo"
              />
            </div>
            <ul className=" mt-5 flex flex-col md:flex-row">
              {NavBarData.map((item, index) => (
                <Link key={item.id} href={item.path}>
                  <li className="mr-10 mt-3">
                    <span
                      className={` ${
                        index === NavBarData.length - 1 ? "md:border-none" : "md:border-r-2"
                      }  border-primary pr-5 text-[20px] text-white hover:font-semibold`}
                    >
                      {item.title}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
          {/* Services Section */}
          <section className=" my-16">
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
                    } border-primary pr-5 text-[20px] text-white hover:font-semibold`}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </section>
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
                      <li key={item.id}>
                        <a href="">
                          <Image
                            className=" mr-7 mt-5"
                            src={`/assets/icons/${item.icon}`}
                            alt="icon"
                            width={30}
                            height={25}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className=" p-2">
                <Image
                  className=" mt-5 md:mt-0"
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
      <section className=" text-white px-28   font-medium text-[16px] bg-primary">
        <ul className=" flex  py-8  flex-col md:flex-row  md:justify-evenly">
          <li className=" mt-5 md:mt-0  hover:underline">
            <a href="">
              <span className=" md:border-r-2 pr-5">
                Made with Scantekk Technologies{" "}
              </span>
            </a>
          </li>
          <li className=" mt-5 md:mt-0 hover:underline">
            <a href="">
              <span className=" flex flex-col md:flex-row md:border-r-2 pr-5">
                <span>Copyright 2008-2019</span>{" "}
                <span className=" md:ml-10">All Rights Reserved</span>
              </span>
            </a>
          </li>
          <li className=" mt-5 md:mt-0 hover:underline">
            <a href="">
              <span className=" md:border-r-2 pr-5"> Privacy Policy</span>
            </a>
          </li>
          <li className=" mt-5 md:mt-0 hover:underline">
            <a href="">
              <span>Terms and Conditions</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
