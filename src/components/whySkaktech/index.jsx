import Image from "next/image";
import React from "react";

const WhySkaktech = () => {
  const whyus = [
    { id: 1, title: "Healthcare", icon: "healthcare_icon.svg" },
    { id: 2, title: "Retail", icon: "retail_icon.svg" },
    { id: 3, title: "Entertainment and Media", icon: "entertainment_icon.svg" },
    { id: 4, title: "Education", icon: "education_icon.svg" },
    { id: 5, title: "Telecommunications", icon: "telecommunications_icon.svg" },
    { id: 6, title: "Finance", icon: "finance_icon.svg" },
    { id: 7, title: "Manufacturing", icon: "manufacturing_icon.svg" },
    { id: 8, title: "Energy and Utilities", icon: "energy_icon.svg" },
    { id: 9, title: "Real Estate", icon: "realestate_icon.svg" },
    {
      id: 10,
      title: "Transportation and Logistics",
      icon: "transportation_icon.svg",
    },
    { id: 11, title: "Government", icon: "government_icon.svg" },
    { id: 12, title: "All Challenges Accepted!", icon: "challenges_icon.svg" },
  ];
  return (
    <div className="grid md:grid-cols-2 py-16  gap-y-10 md:py-32 gap-x-10  px-5 md:px-12 lg:px-16">
      <div className="grid order-2 md:order-1 grid-cols-3 md:grid-cols-4 gap-y-10">
        {whyus.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-3 items-center">
            <Image
              src={`/assets/svg/${item.icon}`}
              alt="why us"
              width={60}
              height={60}
              className="w-[45px] md:w-[60px]"
            />
            <h5 className="text-center text-xs md:text-base">{item.title}</h5>
          </div>
        ))}
      </div>
      <div className="flex order-1 md:order-2 flex-col items-center">
        <h4 className=" text-3xl md:text-5xl font-semibold">
          Why
          <span className="text-primary">Skaktech</span>
        </h4>
        <p className="text-start md:text-lg mt-6 md:mt-11 md:w-[90%] leading-9  md:leading-[49px]">
          At our software company, we are committed to delivering exceptional
          value through innovative, reliable, and tailored solutions that meet
          the unique needs of our customers. With nearly two decades of
          experience, we have successfully served clients across India, the
          Middle East, and Africa, providing a diverse range of software
          products and services that enhance business efficiency and drive
          growth. Our dedicated team of experts works closely with each client
        </p>
      </div>
    </div>
  );
};

export default WhySkaktech;
