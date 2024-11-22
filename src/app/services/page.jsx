import HeaderBanner from "@/components/Banner";
import Updation from "@/components/content-updation";
import Technologies from "@/components/technology";
import Testimonial from "@/components/testmonials";
import WhatAreSkaktech from "@/components/whatAre";
import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "custom-application-development.svg",
      title: "Custom Application Development",
    },
    { id: 2, icon: "integration-services.svg", title: "Integration Services" },
    {
      id: 3,
      icon: "software-modernization.svg",
      title: "Software Modernization",
    },
    {
      id: 4,
      icon: "cloud-based-solutions.svg",
      title: "Cloud-Based Solutions",
    },
    { id: 5, icon: "platform-development.svg", title: "Platform Development" },
    { id: 6, icon: "ui-ux-design.svg", title: "UI/UX Design" },
    {
      id: 7,
      icon: "cross-platform-development.svg",
      title: "Cross-Platform Development",
    },
    {
      id: 8,
      icon: "automation-ai-integration.svg",
      title: "Automation and AI Integration",
    },
    {
      id: 9,
      icon: "payment-gateway-integration.svg",
      title: "Payment Gateway Integration",
    },
    {
      id: 10,
      icon: "it-infrastructure-management.svg",
      title: "IT Infrastructure Management",
    },
    {
      id: 11,
      icon: "data-analytics-business-intelligence.svg",
      title: "Data Analytics and Business Intelligence",
    },
    {
      id: 12,
      icon: "security-audits-assessments.svg",
      title: "Security Audits and Assessments",
    },
  ];

  return (
    <section className="">
      <HeaderBanner
        image={"/assets/images/about.jpg"}
        title={"Software Development"}
      />
      {/* about services  */}
      <div className="grid  md:grid-cols-2 px-5 md:px-10 lg:px-12 2xl:px-16 py-8 md:py-20">
        <div className="flex flex-col  mr-20 ">
          <h5 className="text-sm md:text-base text-[#8D8D8D]">
            About Our Service
          </h5>
          <h2 className="text-2xl md:text-5xl font-medium mt-2 md:mt-7 leading-[65px]">
            Decarbonise your future with us
          </h2>
        </div>
        <div className="flex text-sm flex-col gap-y-2 md:gap-y-4 leading-10 md:text-base lg:text-lg">
          <p>
            At our company, we specialize in software development services that
            cater to the unique needs of businesses across various industries.
          </p>
          <p>
            Our expert team designs, develops, and maintains custom software
            solutions that enhance efficiency, streamline operations, and drive
            innovation.
          </p>
          <p>
            From web and mobile applications to enterprise software systems, we
            deliver high-quality, scalable, and secure software tailored to meet
            your specific requirements, ensuring optimal performance and a
            seamless user experience
          </p>
        </div>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      gap-y-20 mb-16 mt-0 md:my-16 px-5 md:px-10 lg:px-12 2xl:px-16"
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
    </section>
  );
};

export default Services;
