'use client'
import Image from "next/image";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import ContactForm from "@/components/careers/ContactForm";

function Contact() {
  return (
    <section>
      <div className=" relative flex flex-col items-center justify-center  h-[230px] overflow-hidden md:h-[400px] bg-gradient-to-b from-white to-black bg-red-500">
        <Image
          src='/assets/images/contactus.jpg'
          alt="career"
          width={1000}
          height={600}
          quality={100}
          className="absolute w-full h-full object-cover left-0 right-0 top-0 bottom-0 m-auto"
        />

        <h4 className="text-[#404040]  leading-loose text-center font-bold text-xl md:text-5xl mt-10 relative z-30  ">
          Get in Touch with us
        </h4>
      </div>

      <div className="flex justify-center -translate-y-20 ">
        <div className='w-5/6 md:w-4/5 bg-white   flex flex-col gap-5 shadow-xl'>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.856909044865!2d75.74480077431639!3d11.24444720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6846545e8603d%3A0x5467ed3da5a2ec1c!2sSkaktech%20Software%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1729584041110!5m2!1sen!2sin"
                className="   w-full  h-[70vh]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-5 md:p-10 xl:p-20 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <GrLocation size={20} color="#3f78e0" strokeWidth={2}/>
                <div>
                  <h1 className="font-semibold">Address</h1>
                  <p>Moonshine St. 14/05 Light City,<br />
                    London, United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiPhoneCall size={20} color="#3f78e0" strokeWidth={2}/>
                
                  <div>
                    <h1 className="font-semibold">Phone</h1>
                    <p>00 (987) 654 32 10<br />
                      00 (987) 654 32 10
                    </p>
                  </div>
                
                </div>
                <div className="flex items-start gap-4">
                  <CiMail size={20} color="#3f78e0" strokeWidth={1}/>
                  <div>
                    <h1 className="font-semibold">
                      E-mail</h1>
                    <p>sandbox@email.com<br />
                      help@sandbox.com


                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm/>
        </div>
      
    </section>
  );
}

export default Contact;
