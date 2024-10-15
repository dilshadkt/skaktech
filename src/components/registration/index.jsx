import { clients, partners } from "@/constants";
import Image from "next/image";
import React from "react";

export const Registration = () => {
  return (
    <div>
      <section className=" px-10 mb-10">
        <div className=" text-center mt-3">
          <h1 className=" text-[30px] md:text-[40px] font-semibold text-black">
            Our <span className=" text-primary">Registrations</span>
          </h1>
          <p className=" text-[20px] text-black">
            We prioritize quality, customer satisfaction, and long-term
            partnerships, offering ongoing support and continuously evolving our
            offerings to stay ahead in a rapidly changing technological
            landscape. When you choose us, you choose a trusted partner focused
            on your success.
          </p>
        </div>

        <ul className=" mt-10 flex justify-between flex-col md:flex-row   items-center flex-wrap 2xl:flex-nowrap">
          {partners.map((item) => (
            <li className=" my-3 md:my-0 cursor-pointer" key={item.id}>
              <Image
                src={`/assets/images/partners/${item.icon}`}
                alt={item.icon}
                width={100}
                quality={100}
                height={65}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className=" px-10 xl:px-0 pt-10">
        <div className=" text-center max-w-[950px]  mx-auto ">
          <h3 className=" text-black font-semibold text-[20px]">
            Our <span  className=" text-primary">Clients</span>
          </h3>
          <p className=" my-10 text-black font-bold text-[30px] md:text-[40px] ">
            RIGHT DECISIONS ON RIGHT TIME WILL ENSURE THE SUCCESS OF ALL
            BUSINESS
          </p>
        </div>
        <ul className=" flex justify-between flex-wrap  flex-col md:flex-row md:flex-nowrap  items-center my-2">
          {clients.map((item) => (
            <li className=" my-3 md:my-0 cursor-pointer" key={item.id}>
              <Image
                src={`/assets/images/clients/${item.icon}`}
                alt={item.icon}
                width={200}
                height={40}
                quality={100}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
