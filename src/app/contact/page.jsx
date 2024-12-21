import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <section className=" px-5 md:px-10 lg:px-12  h-fit w-full">
      <div className="max-w-screen-xl mx-auto  h-full pt-[40px] md:pt-[80px] ">
        <div className="w-full  grid-cols-1 grid gap-y-12 md:grid-cols-6 py-16 md:py-24">
          <div className=" order-2 md:order-1  col-span-4 flex flex-col">
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
          <div className=" order-1  md:order-2 col-span-2 flex flex-col items-center gap-5 w-full">
           <div className="bg-[#268BBF] p-5 text-sm  text-white">
           <div className=" flex flex-col gap-3">
              <div>
              <h1 className="font-semibold text-xl">Skaktech</h1>
              <hr />
              </div>
              <div className="flex items-start gap-2 ">
                <CiLocationOn size={20}/>
                <p className="text-sm">59/7757, Champion Arcade, Kozhikkode, Kerala 673002</p>
              </div>
              <div className="flex items-start gap-2">
                <IoCallOutline size={20}/>
                <p>+91 9874984774, +91 9854736221, +91 9873245703</p>
              </div>
              <div className="flex items-start gap-2">
                <CiMail size={20}/>
                <p>sk@info.com</p>
              </div>
           </div>
           <div className=" flex flex-col gap-3">
              <div>
              <h1 className=" font-semibold text-xl">Business Hours</h1>
              <hr className="text-white"/>
              </div>
              <p>Sunday - Thursday - 9am to 6pm <br />
              Friday & Saturday - Closed</p>
           </div>
           
           </div>
           <div className=" w-full  mt-3 md:mt-0 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.856909044865!2d75.74480077431639!3d11.24444720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6846545e8603d%3A0x5467ed3da5a2ec1c!2sSkaktech%20Software%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1729584041110!5m2!1sen!2sin"
                  className="   w-full "
                  style={{ border: 0, width:'100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
