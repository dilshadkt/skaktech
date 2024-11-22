import HeaderBanner from "@/components/Banner";
import MeetOurTeam from "@/components/meetOurTeam";
import Technologies from "@/components/technology";
import Testimonial from "@/components/testmonials";
import WhatAreSkaktech from "@/components/whatAre";
import WhySkaktech from "@/components/whySkaktech";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="overflow-x-hidden">
      <HeaderBanner
        image={"/assets/images/about.jpg"}
        title={"Helping you achieve your mission"}
        desc={"Trusted by innovators and industry leaders"}
      />

      <div className="flex px-5 md:px-10 lg:px-12 2xl:px-16 flex-col items-center py-20">
        <h4 className=" text-xl md:text-3xl text-center lg:text-4xl font-semibold">
          Neque porro quisquam est qui dolorem
        </h4>
        <p className=" text-sm md:text-base py-5">
          we continue to empower businesses with cutting-edge technology
          solutions that drive growth and success.
        </p>
        <ul
          className="max-w-screen-xl mt-6 gap-y-10 md:mt-12 w-full
         mx-auto flex flex-col md:flex-row items-center justify-between"
        >
          <li className="flex flex-col gap-y-4 items-center">
            <div className="flex items-center gap-3 justify-center">
              <Image
                src={"/assets/svg/project.svg"}
                alt="project"
                width={40}
                height={40}
              />
              <p className=" text-3xl md:text-4xl lg:text-5xl font-medium text-[#486284]">
                200+
              </p>
            </div>
            <p>Inernational Projects</p>
          </li>
          <li className="flex flex-col gap-y-4 items-center">
            <div className="flex items-center gap-3 justify-center">
              <Image
                src={"/assets/svg/clients.svg"}
                alt="project"
                width={40}
                height={40}
              />
              <p className=" text-3xl md:text-4xl lg:text-5xl font-medium text-[#486284]">
                200+
              </p>
            </div>
            <p>Inernational Projects</p>
          </li>
          <li className="flex flex-col gap-y-4 items-center">
            <div className="flex items-center gap-3 justify-center">
              <Image
                src={"/assets/svg/partner.svg"}
                alt="project"
                width={40}
                height={40}
              />
              <p className=" text-3xl md:text-4xl lg:text-5xl font-medium text-[#486284]">
                200+
              </p>
            </div>
            <p>Inernational Projects</p>
          </li>
        </ul>
      </div>
      <WhatAreSkaktech />
      <WhySkaktech />
      <Technologies className={"bg-[#268BBF] text-white"} />
      <div className="flex flex-col items-center pt-10 md:py-16 px-5 md:px-10 lg:px-16">
        <h2 className="text-4xl font-medium">Our Service</h2>
        <ul
          className="w-full grid grid-cols-1 md:mb-6  gap-y-4 md:flex md:items-center 
          mt-10 md:mt-16 md:h-6 text-xs md:text-sm xl:text-lg
         font-medium justify-between"
        >
          <li
            className="hover:border-b-2 border p-3 flex items-center justify-center   text-center 
          md:pb-1 cursor-pointer border-primary md:border-none"
          >
            Software Development
          </li>
          <li
            className="hover:border-b-2 border p-3 flex items-center justify-center   text-center 
          md:pb-1 cursor-pointer border-primary md:border-none"
          >
            Low-code development platform
          </li>
          <li
            className="hover:border-b-2 border p-3 flex items-center justify-center   text-center 
          md:pb-1 cursor-pointer border-primary md:border-none"
          >
            Robotic process automation (RPA)
          </li>
          <li
            className="hover:border-b-2 border p-3 flex items-center justify-center   text-center 
          md:pb-1 cursor-pointer border-primary md:border-none"
          >
            Cloud computing services
          </li>
        </ul>
        <div className="grid gap-y-6 lg:grid-cols-2 gap-x-10 my-7 md:my-12">
          <div className="flex items-start  justify-center md:mr-7">
            <Image
              src={`/assets/images/service.png`}
              alt="service"
              width={600}
              height={800}
              quality={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h4 className=" text-xl md:text-3xl font-medium">
              SOFTWARE DEVELOPMENT
            </h4>
            <p className=" my-3 md:my-10 md:text-lg leading-8 md:leading-10">
              At our company, we specialize in software developmentservices that
              cater to the unique needs of businesses across various industries.
              Ourexpert team designs, develops, and maintains custom software
              solutions thatenhance efficiency, streamline operations, and drive
              innovation.
            </p>
            <button className="text-sm rounded-md text-white font-medium bg-primary px-5 py-3 w-fit">
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </div>
      <MeetOurTeam />
      <Testimonial />
    </section>
  );
};

export default About;
