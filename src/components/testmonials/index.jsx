import Image from "next/image";
import React from "react";
import TestimonialSlider from "./slider";

const Testimonial = () => {
  return (
    <>
      <div className="h-[95vh] md:h-[110vh]  relative">
        <Image
          src={"/assets/images/testimonials.png"}
          alt="testimonial"
          fill
          className="absolute w-full h-full object-cover left-0 right-0 top-0 bottom-0 m-auto"
        />
        <div className="absolute bottom-0 h-full top-0 m-auto left-0 right-0">
          <TestimonialSlider />
        </div>
      </div>
      <div className="bg-[#363636]  h-[150px] md:h-[200px] relative ">
        <div
          className="md:h-[400px] bg-white shadow-sm rounded-xl w-[90%] md:w-[60%] left-0
        right-0 mx-auto  absolute -top-full  p-6 md:p-8 pb-10"
        >
          <div className="w-full grid gap-y-12 md:grid-cols-4 ">
            <div className=" order-2 bg-re md:order-1  col-span-3 flex flex-col">
              <p className="text-[#8D8D8D] md:text-lg">Locate us</p>
              <h2 className="font-semibold text-2xl md:text-5xl text-gray-800 mt-1 md:mt-2">
                Let’s Talk
              </h2>
              <form
                action=""
                className="flex flex-col gap-y-3 md:gap-y-6  md:w-[94%] mt-6 md:mt-10"
              >
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="p-3 border-b-2 text-xs md:text-base border-gray-800 outline-none"
                />
                <div className="  gap-8 w-full grid grid-cols-2">
                  <input
                    type="text"
                    placeholder="E-Mail*"
                    className="p-3 border-b-2 text-xs md:text-base border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="PhoneNumber*"
                    className="p-3 border-b-2 text-xs md:text-base border-gray-800 outline-none"
                  />
                </div>
                <div className="flex items-end gap-x-6 ">
                  <input
                    type="text"
                    placeholder="Message*"
                    className="p-3 border-b-2 w-full
                  text-xs md:text-base border-gray-800 outline-none"
                  />
                  <button className="border-b-8 md:text-xl font-semibold border-primary ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div
              className="hidden md:flex order-1  md:order-2 
            col-span-1  flex-col items-center justify-center"
            >
              <div className="w-24 bg-red-200 h-24 rounded-full overflow-hidden">
                <Image
                  src={"/assets/images/Ellipse 179 (1).png"}
                  alt="experts"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className=" my-6  md:my-8  text-center font-medium md:w-[85%]">
                Communicate with our experts to bring out better solutions to
                your problem.
              </p>
              <span className="font-semibold md:text-lg">+91 7873004558</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
