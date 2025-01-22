import React from 'react'
import { allProductsData } from '@/constants'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

const ProductList = () => {
  return (
    <div>
        {allProductsData.map((item, index) => (<div key={index}>
                <div className="grid  md:grid-cols-2 px-5 md:px-10 lg:px-20 py-8 md:py-20 gap-10 items-stretch ">
                  <div className={`min-h-[40vh]  ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'}` }>
                    <Image src={`/assets/images/${item.img}.png`} alt="serviceimg" height={700} width={600} quality={100} className="h-full object-cover"/>
                  </div>
                  <div
                    className={`flex text-sm flex-col mt-4 md:mt-0 gap-y-2 md:gap-y-4  leading-7 md:leading-10 
                md:text-base lg:text-lg  ${index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'}`}
                  >
                    <h1 className="font-bold text-4xl">{item.heading}</h1>
                    <p>
                      {item.desc1}
                    </p>
                    <Link href={`/products/${item.heading}`}>
                    <div className='flex gap-3 bg-[#268BBF] px-5 py-2 items-center justify-start w-fit'>
                        
                          <button className='  text-white'>Learn More</button>
                          <FaArrowRightLong className='text-white'/>
                        
                  </div>
                  </Link>
                  </div>
                  
                </div>
    </div>))}
    </div>
  )
}

export default ProductList