import { servicesList, technologies } from "@/constants";
import Image from "next/image";
import React from "react";
import { Services } from "../services";
import { Registration } from "../registration";

const LandingPage = () => {
  return (
    <div>
      <section className="   lg:min-h-screen flex flex-col justify-center items-center bg-landing bg-cover bg-center bg-no-repeat">
        <div className=" py-10 lg:py-0 w-full  px-5 lg:px-0 pt-28 flex flex-col  justify-center items-center content-center h-full my-auto ">
          <h1 className=" text-[30px] lg:text-[64px] max-w-[500px] lg:max-w-[1080px] text-center font-bold text-white ">
            Products You Can Rely On, Service that Makes
            <span className=" text-primary"> You Feel Valued</span>{" "}
          </h1>
          <p className=" text-white my-5 text-[20px] max-w-[800px] px-10 text-center">
            At our software company, we are committed to delivering exceptional
            value through innovative, reliable, and tailored solutions that meet
            the unique needs of our customers.
          </p>
          <div className=" bg-primary cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 text-[16px] hover:font-semibold px-4 py-2 rounded-md text-white">
            Explore Skaktech
          </div>
        </div>
      </section>
      <section className=" my-16">
        <div className=" w-full  flex justify-between flex-col lg:flex-row items-center  px-10">
          <div className=" w-full lg:w-1/2">
            <Image
              className="lg:p-3"
              src={"/assets/images/landing1.png"}
              width={660}
              height={420}
              alt="landing1"
              quality={100}
              layout="responsvie"
            />
          </div>
          <div className=" mt-10 lg:mt-0 w-full lg:w-1/2">
            <p className=" text-center md:text-start text-[20px] lg:max-w-[570px] mx-auto text-black   leading-[35px]">
              Founded in 2005, our software company has been at the forefront of
              delivering innovative software solutions and services to clients
              across India, the Middle East, and Africa. Over the years, we have
              expanded our portfolio of products and services to meet the
              evolving needs of our diverse clientele, ensuring quality and
              reliability in every project we undertake. With a strong
              commitment to excellence, we continue to empower businesses with
              cutting-edge technology solutions that drive growth and success.
            </p>
          </div>
        </div>
      </section>
      <section className=" my-16">
        <div className=" px-10 flex justify-between flex-col  lg:flex-row w-full">
          <div className=" w-full lg:w-1/2">
            <ul className=" grid mt-10 grid-cols-2 md:grid-cols-4 gap-10 place-items-center md:gap-20">
              {technologies.map((item) => (
                <li key={item.id}>
                  <Image
                    src={`/assets/icons/technologies/${item.icon}`}
                    alt={item.icon}
                    height={60}
                    width={60}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-full mt-10 lg:mt-0 text-center lg:text-start lg:w-1/2 lg:max-w-[580px] mx-auto">
            <h1 className=" text-black font-semibold text-[40px]">
              Why <span className="  text-primary">Skaktech</span>
            </h1>
            <p className="  mt-3 leading-custom text-[20px] ">
              At our software company, we are committed to delivering
              exceptional value through innovative, reliable, and tailored
              solutions that meet the unique needs of our customers. With nearly
              two decades of experience, we have successfully served clients
              across India, the Middle East, and Africa, providing a diverse
              range of software products and services that enhance business
              efficiency and drive growth. Our dedicated team of experts works
              closely with each client to understand their specific challenges
              and objectives, ensuring a personalized approach to every project.
              We prioritize quality, customer satisfaction, and long-term
              partnerships, offering ongoing support and continuously evolving
              our offerings to stay ahead in a rapidly changing technological
              landscape. When you choose us, you choose a trusted partner
              focused on your success.
            </p>
          </div>
        </div>
      </section>
      <section className=" py-16">
        <Registration />
      </section>
      <section>
        <ul>
          {servicesList.map((item, index) => (
            <li className=" " key={item.id}>
              <Services
                index={index}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
