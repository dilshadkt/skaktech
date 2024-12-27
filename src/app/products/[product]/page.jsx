'use client'
import Image from "next/image";
import { products } from "@/constants";
import React from "react";
import { useParams } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

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
      {<main>
        <div className="relative h-[50vh] lg:h-[70vh] w-full">
          <Image src={`/assets/images/${product.img}`} alt="productimg" height={1000} width={1000} quality={100} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white flex-col gap-3">
            <h1 className="font-bold text-2xl md:text:4xl xl:text-6xl tracking-wider">{product.title}</h1>
            <h3>{product.subtitle}</h3>
          </div>
        </div>
        <div className="p-5 md:p-10 xl:p-20">
        {/* about section */}
        <div className=" flex flex-col gap-5">
          <h1 className="text-4xl font-bold">About the Project</h1>
          <p className="leading-loose">{product.about}.</p>
        </div>
        {/* features Section */}
        <div className="py-5 md:py-10">
            <h1 className="font-semibold text-lg">Key features of a <span>{product.subtitle}</span></h1>
        </div>
        {product.features.map((item, index)=>(<div key={index} className="flex flex-col gap-2 py-2">
          <h1 className="font-semibold">{item.feature}</h1>
          <p>{item.desc}</p>
        </div>))}
        <div className="  text-white gap-2 py-5">
          <button className="bg-[#268BBF] hover:bg-blue-600 flex items-center gap-2 p-2 transition-colors duration-200 ease-in-out">Learn More <span><FaArrowRightLong /></span></button>
        </div>
        </div>
        
      </main>}
      
    </>
  );
}

export default Products;
