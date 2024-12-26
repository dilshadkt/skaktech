'use client'
import Image from "next/image";
import { products } from "@/constants";
import React from "react";
import { useParams } from "next/navigation";
import Testimonial from "@/components/testmonials";
import WhySkaktech from "@/components/whySkaktech";

function Products() {


    
    const params = useParams();
    
    const title = params.product;
    
    console.log(title)
  const features = [
    {
      id: 1,
      title: "Custom Application",
      icon: "mobile.svg",
    },
    {
      id: 2,
      title: "Integration Services",
      icon: "service.svg",
    },
    {
      id: 3,
      title: "Software Modernization",
      icon: "desktop.svg",
    },
    {
      id: 4,
      title: "Custom Application",
      icon: "mobile.svg",
    },
    {
      id: 5,
      title: "Integration Services",
      icon: "service.svg",
    },
    {
      id: 6,
      title: "Software Modernization",
      icon: "desktop.svg",
    },
  ];
  const product = products.find((item) => item.title === title);
  
  

  return (
    <>
      <div className=" h-full  lg:h-screen grid lg:grid-cols-2 pt-20 relative px-5 md:px-12 lg:px-16">
        <Image
          src={"/assets/images/Landing (1).png"}
          alt="products"
          width={1200}
          height={700}
          quality={100}
          className="w-full h-full left-0 right-0 bottom-0 m-auto top-0 absolute object-cover"
        />
        <div
          className="flex flex-col items-center lg:items-start 
      py-10 lg:py-0  justify-center gap-y-8  relative z-30"
        >
          <div
            className="flex flex-col text-white   
       left-16  2xl:left-24 gap-y-1 md:gap-y-3 z-30"
          >
            <h2 className="font-semibold w-full   text-3xl md:text-5xl xl:text-6xl">
              {product.title}
            </h2>
            <p className=" text-sm md:text-lg">{product.subtitle}</p>
          </div>
          <div className=" w-[70%] md:w-full">
            <Image
              src={"/assets/images/tablet-mockup-large-medium-size 1 (1).png"}
              alt="tablet"
              width={490}
              height={490}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col relative lg:pt-10 pb-20 z-30 text-white justify-center">
          <p
            className="md:text-lg 
         leading-8 md:leading-9 2xl:leading-10"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
          <div className="grid grid-cols-3 gap-x-3 md:gap-x-0 gap-y-10 mt-14 2xl:-translate-x-10 ">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-y-4 items-center">
                <Image
                  src={`/assets/svg/${feature.icon}`}
                  alt="features"
                  width={55}
                  height={55}
                  className=" w-8 md:w-10 xl:w-12 2xl:w-[55px]"
                />
                <h5 className=" text-xs md:text-sm text-center xl:text-base">
                  {feature.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhySkaktech />
      <Testimonial />
    </>
  );
}

export default Products;
