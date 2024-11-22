import Image from "next/image";
import React from "react";

const WhatAreSkaktech = () => {
  return (
    <div className="relative ">
      <div className="px-5 md:px-10 lg:px-12 2xl:px-16 text-white pt-12 md:pt-20 relative  top-0">
        <Image
          src={"/assets/images/career.png"}
          alt="career"
          width={1200}
          height={720}
          className="w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0 z-10"
        />
        <div className="relative z-30">
          <h3 className=" text-3xl md:text-4xl lg:text-5xl font-medium">
            What are Skaktech?
          </h3>
          <p className=" leading-7 md:leading-9 text-sm md:text-base font-light my-5 md:my-9">
            Founded in 2005, our software company has been at the forefront of
            delivering innovative software solutions and services to clients
            across India, the Middle East, and Africa. Over the years, we have
            expanded our portfolio of products and services to meet the evolving
            needs of our diverse clientele, ensuring quality and reliability in
            every project we undertake. With a strong commitment to excellence,
            we continue to empower businesses with cutting-edge technology
            solutions that drive growth and success.
          </p>
          <div className="grid  md:grid-cols-4 gap-y-3 md:gap-y-0 text-[#BADDFF] md:text-base lg:text-xl py-5">
            <ul className="flex flex-col gap-y-2 md:gap-y-4 list-disc pl-5">
              <li>MCA</li>
              <li>STPI</li>
            </ul>
            <ul className="flex flex-col gap-y-2 md:gap-y-4 list-disc pl-5">
              <li>Kerala Startup</li>
              <li>India Startup</li>
            </ul>
            <ul className="flex flex-col gap-y-2 md:gap-y-4 list-disc pl-5">
              <li>Calicut forum for IT</li>
              <li>BNI</li>
            </ul>
          </div>
          <div
            className="grid grid-cols-2
       gap-y-3 md:gap-y-5 lg:gap-y-0 md:grid-cols-3  lg:grid-cols-6 py-12 md:py-16  lg:py-24"
          >
            {[
              "avis.png",
              "avl.png",
              "honda.png",
              "keolis.png",
              "mobility.png",
              "scania.png",
            ].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-start 
             md:justify-normal  md:w-fit "
              >
                <Image
                  src={`/assets/images/client/${client}`}
                  alt="client"
                  width={130}
                  height={40}
                  quality={100}
                  className=" w-[100px] md:w-[130px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAreSkaktech;
