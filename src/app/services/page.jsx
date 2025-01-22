import HeaderBanner from "@/components/Banner";
import Updation from "@/components/content-updation";
import Technologies from "@/components/technology";
import Testimonial from "@/components/testmonials";
import WhatAreSkaktech from "@/components/whatAre";
import Image from "next/image";
import React from "react";
import { serviceData } from "./constants";

const Services = () => {


  return (
    <section className="">



      <div>
        <HeaderBanner
          image={"/assets/images/Serviceimage.jpg"}
          title={"Our Services"}

        />
      </div>

      {/* about services  */}
      {serviceData.map((item, index) => (<div key={index} id={item.id}>
        <div className="grid  md:grid-cols-2 px-5 md:px-10 lg:px-20 py-8 md:py-20 gap-10 items-center ">
          <div className={`${item.order1} h-[50vh] ` }>
            <Image src={`/assets/images/${item.img}.png`} alt="serviceimg" height={700} width={600} quality={100} className="h-full object-cover"/>
          </div>
          <div
            className={`flex text-sm flex-col mt-4 md:mt-0 gap-y-2 md:gap-y-4  leading-7 md:leading-10 
        md:text-base lg:text-lg ${item.order2}`}
          >
            <h1 className="font-bold text-4xl">{item.heading}</h1>
            <p>
              {item.desc1}
            </p>
            <p>
              {item.desc2}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-y-12 md:gap-y-20 mb-16 mt-0 md:my-16 px-5 md:px-10 lg:px-12 2xl:px-16">
          {item.logos.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-y-4 items-center w-1/2 md:w-1/3 lg:w-1/6"
            >
              <Image
                src={`/assets/servicessvg/${service.logo}.svg`}
                alt={service.svgName}
                width={45}
                height={45}
                className="w-[35px] md:w-[45px]"
              />
              <p className="text-sm md:text-base text-center">{service.svgName}</p>
            </div>
          ))}
        </div>
      </div>))}
      <div className=" px-5 md:px-10 lg:px-12 2xl:px-16"> </div>

      <Technologies
        className={"text-primary"}
        iconClassName={`filter-primary`}
      />
      
    </section>
  );
};

export default Services;
