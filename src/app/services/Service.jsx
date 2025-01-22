import HeaderBanner from "@/components/Banner";
import Updation from "@/components/content-updation";
import Technologies from "@/components/technology";
import Testimonial from "@/components/testmonials";
import WhatAreSkaktech from "@/components/whatAre";
import Image from "next/image";
import React from "react";
import { serviceData } from "./constants";

const Service = () => {
  return (
<div>
{<section className="">
      <HeaderBanner
        image={"/assets/images/Servicesimage.png"}
        
      />
      {/* about services  */}
      <div className="grid  md:grid-cols-2 px-5 md:px-10 lg:px-12 2xl:px-16 py-8 md:py-20 gap-5 items-center">
        <div>
          <Image src="/assets/images/serviceimg-1.png" alt="serviceimg" height={700} width={600} quality={100}/>
        </div>
        <div
          className="flex text-sm flex-col mt-4 md:mt-0 gap-y-2 md:gap-y-4 leading-7 md:leading-10 
        md:text-base lg:text-lg"
        >
          <h1 className="font-bold text-4xl">Software Development</h1>
          <p>
          At our company, we specialize in software development services that cater to the unique needs of businesses across various industries
          </p>
          <p>
          Our expert team designs, develops, and maintains custom software solutions that enhance efficiency, streamline operations, and drive innovation. From web and mobile applications to enterprise software systems, we deliver high-quality, scalable, and secure software tailored to meet your specific requirements, ensuring optimal performance and a seamless user experience
          </p>
        </div>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
       gap-y-12 md:gap-y-20 mb-16 mt-0 md:my-16 px-5 md:px-10 lg:px-12 2xl:px-16"
      >
        {services.map((service) => (
          <div key={service.id} className="flex flex-col gap-y-4 items-center">
            <Image
              src={`/assets/svg/${service.icon}`}
              alt={service.title}
              width={45}
              height={45}
              className=" w-[35px] md:w-[45px]"
            />
            <p className="text-sm md:text-base text-center">{service.title}</p>
          </div>
        ))}
      </div>
      <div className=" px-5 md:px-10 lg:px-12 2xl:px-16"> </div>
      <WhatAreSkaktech />
      <Technologies
        className={"text-primary"}
        iconClassName={`filter-primary`}
      />
      <Testimonial />
    </section>}
</div>
  )
}

export default Service