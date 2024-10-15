import { industriesWeServe } from "@/constants";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <section>
        <div className=" flex justify-between   bg-primary">
          <div>
            <div>
              <span className=" text-[34px] font-semibold text-white">
                The Google Pub/Sub service has made PO and shipment integrations
                very easy and seamless with Warehouse360.
              </span>
              <span className=" text-[20px] text-white">
                Customers now have a clear view of product details and the
                ability to contact customer care 24/7 using the Mobile app.
              </span>
            </div>
            <div>
              <div>
                <Image
                  height={32}
                  alt="g-paly"
                  width={32}
                  src={"/assets/icons/g-play.png"}
                />{" "}
                <span>Google Play</span>
              </div>
              <div>
                <Image
                  width={32}
                  height={32}
                  alt="app-store"
                  src={"/assets/icons/apple-logo.png"}
                />{" "}
                <span>App Store</span>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex   justify-center items-center content-center bg-[#51A2CC] size-[600px] rounded-full">
              <div className=" flex  justify-center items-center content-center bg-[#71B3D5] size-[400px] rounded-full">
                <div className=" bg-[#E9F3F9] size-[295px] rounded-full">
                  <div>
                    <Image
                      className=" z-10"
                      src={"/assets/images/redmi.png"}
                      width={400}
                      height={300}
                      alt="mobile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="  z-50 mb-20">
        <h1 className=" text-center py-5 text-[40px] font-semibold">
          <span>About</span>
          <span className=" text-primary">Skaktech</span>
        </h1>
        <div className=" relative flex">
          <Image
            className=" mt-16 "
            src={"/assets/images/about1.png"}
            width={380}
            height={280}
            alt="about"
            quality={100}
          />
          <p className="  ml-[220px]   leading-[40px] p-5 text-[20px] ">
            Welcome to Skaktech, a global provider of innovative software
            solutions and services. Established in 2015, Skaktech has been
            dedicated to delivering cutting-edge technologies that empower
            businesses across various industries. Over the years, we have
            expanded our services and expertise, serving clients from around the
            world with customized solutions that meet their unique needs.
          </p>
        </div>
        <div className="   flex">
          <div className="  relative w-full   mx-7 ">
            <div className=" top-[100px]  absolute">
              <p className="  w-full leading-[40px]  px-7 text-[20px] ">
                At Skaktech, we pride ourselves on creating high-quality
                software products that drive efficiency, productivity, and
                growth. Our talented team of developers, engineers, and
                consultants work collaboratively to provide tailored solutions
                that align with our clients’ goals. From enterprise-level
                systems to specialized software, our offerings are designed to
                enhance operations, improve decision-making, and foster digital
                transformation.
              </p>
              <div className=" text-white bg-primary cursor-pointer px-5 my-5 py-2 inline-flex rounded-md items-center">
                <Image
                  src={"/assets/icons/download.png"}
                  height={15}
                  width={30}
                  alt="download"
                />
                <span className=" ml-2">Company Profile</span>
              </div>
            </div>
          </div>

          <Image
            className="  "
            src={"/assets/images/about2.png"}
            width={480}
            height={250}
            alt="about"
            quality={100}
          />
        </div>
      </section>
      <section className=" py-20">
        <h1 className=" text-[60px] text-center text-primary">
          <span className=" font-medium">Industries</span>
          <span className=" font-bold ml-2">We serve</span>
        </h1>
        <div>
          <ul className=" grid px-16 my-10 gap-16  grid-cols-6 place-items-center items-center ">
            {industriesWeServe.map((item) => (
              <li
                className="    flex flex-col items-center  cursor-pointer"
                key={item.id}
              >
                <Image
                  className=" "
                  src={`/assets/icons/${item.icon}`}
                  alt={item.title}
                  width={26}
                  height={25}
                />
                <span className=" text-black text-[16px] px-5  font-normal pt-3 text-center">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className=" px-5 my-16">
        <div className=" w-full flex justify-between">
          <div className=" w-1/2">
            <Image
              src={"/assets/images/newsletter.png"}
              width={680}
              height={400}
              alt="newsletter"
            />
          </div>
          <div className="  px-5">
            <h3 className=" text-[20px]  font-medium text-[#8D8D8D]">
              Receive newsletters from Skaktech on a regular basis
            </h3>
            <h1 className=" font-semibold text-[40px] py-3">
              Subscribe to the Newsletter
            </h1>
            <div>
              <form className=" " action="">
                <input
                  required
                  className=" w-full  my-2 border-2 h-[40px] pl-5 rounded-md"
                  type="text"
                  placeholder="Full Name*"
                  name=""
                  id=""
                />
                <div className=" w-full my-3 flex">
                  <input
                    required
                    className=" w-1/2 h-[40px] mr-4 rounded-md pl-5 border-2  "
                    type="text"
                    placeholder="E-Mail*"
                    name=""
                    id=""
                  />
                  <input
                    required
                    className=" w-1/2 h-[40px] rounded-md pl-5 border-2  ml-5 "
                    type="text"
                    placeholder="Phone Number*"
                    name=""
                    id=""
                  />
                </div>
                <div className=" my-3">
                  <input type="checkbox" name="check" id="check" />
                  <label
                    className="   text-[14px] ml-2"
                    htmlFor="check"
                    id="check"
                  >
                    By checking this box you are agreeing to our Privacy Policy
                    and Skaktech can send me related information
                  </label>
                </div>
                <button className=" text-white bg-primary px-16 mt-5 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
