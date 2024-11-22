import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <section className=" px-5 md:px-10 lg:px-12  h-fit w-full">
      <div className="max-w-screen-xl mx-auto  h-full pt-[40px] md:pt-[80px] ">
        <div className="w-full  grid-cols-1 grid gap-y-12 md:grid-cols-4 py-16 md:py-24">
          <div className=" order-2 md:order-1  col-span-3 flex flex-col">
            <p className="text-[#8D8D8D] md:text-xl">Locate us</p>
            <h2 className="font-semibold text-2xl md:text-6xl text-gray-800 mt-2">
              Let’s Talk
            </h2>
            <form
              action=""
              className="flex flex-col gap-y-4  md:gap-y-6  md:w-[87%] mt-5 md:mt-10"
            >
              <input
                type="text"
                placeholder="Full Name*"
                className="p-3 border-b-2 text-xs md:text-base border-gray-800 outline-none"
              />
              <div className="  gap-4 md:gap-8 w-full grid grid-cols-2">
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
              <div className="flex items-end gap-x-3 md:gap-x-6 ">
                <input
                  type="text"
                  placeholder="Message*"
                  className="p-3 border-b-2 w-full
                  text-xs md:text-base border-gray-800 outline-none"
                />
                <button className=" border-b-4 md:border-b-8 md:text-xl font-semibold border-primary ">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className=" order-1  md:order-2 col-span-1 flex flex-col items-center">
            <div className="w-32  h-32 rounded-full overflow-hidden">
              <Image
                src={"/assets/images/Ellipse 179 (1).png"}
                alt="experts"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="md:text-lg my-7 md:my-12  text-center font-medium md:w-[85%]">
              Communicate with our experts to bring out better solutions to your
              problem.
            </p>
            <span className="font-semibold md:text-lg">+91 7873004558</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
