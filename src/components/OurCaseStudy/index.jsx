import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OurCaseStudy = ({heading,desc}) => {
  return (
    <div className='px-5 md:px-10 xl:px-20 '>
        
        <Link href='/case-study/WareHouse360'>
          <div className='h-[50vh] md:h-[70vh] relative'>
              <Image src={'/assets/images/casestudyWarehouse.jpg'} alt='banner' height={1000} width={1000} quality={100} className='h-full w-full object-cover rounded-2xl'/>
              <div className='absolute left-2 bottom-2 md:left-5 md:bottom-5 text-white flex flex-col gap-3 p-5 tracking-wider'>
                  <h1 className='text-3xl font-semibold'>{heading}</h1>
                  <p>{desc}</p>
              </div>
          </div>
        </Link>

    </div>
  )
}

export default OurCaseStudy