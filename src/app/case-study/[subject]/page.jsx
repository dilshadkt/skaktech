import React from 'react'
import Image from 'next/image'
import { caseStudyContent } from '@/constants'
import TechWeUser from '@/components/TechWeUse'

const CaseStudy = () => {

    return (
        <div>
            <div className='h-[50vh] xl:h-[90vh] w-full relative'>
                <Image src={'/assets/images/casestudyWarehouse.jpg'} alt='bannerImg' height={1000} width={1000} quality={100} className='h-full w-full object-cover' />
                <div className='absolute bottom-0 bg-gradient-to-t from-[#268BBF] to-transparent h-1/2 flex flex-col items-end justify-end w-full'>
                </div>
            </div>
            <div className=' text-white px-5 md:px-10 pt-10 pb-32 bg-[#268BBF] '>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 py-10 '>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-4xl font-semibold'>Warehouse 360</h1>
                        <p>Warehouse management system software</p>
                    </div>
                    <div className='flex  justify-start xl:justify-end '>
                        <h3>27/07/2025</h3>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3'>
                    <div className='col-span-1'>
                        <h1 className='text-2xl font-medium'>About Product</h1>
                    </div>
                    <div className='col-span-2'>
                        <p>In today’s fast-paced business environment, warehouses face significant challenges in efficiently managing inventory, optimizing storage space, ensuring timely order fulfillment, and minimizing errors. Traditional manual or semi-automated processes are often insufficient, leading to issues</p>
                    </div>
                </div>
                
            </div>
            <div className='px-5 md:px-10'>
                <div className='-translate-y-20 xl:-translate-y-28 h-[50vh] xl:h-[90vh] w-full  rounded-2xl'>
                    <Image src={'/assets/images/caseStudyCenter.jpg'} alt='contentimg' width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-2xl'/>
                </div>
                <div className="flex flex-col  gap-5">
                    <div>
                        <h1 className='text-3xl font-bold py-3'>Challenge</h1>
                        <p>In today’s fast-paced business environment, warehouses face significant challenges in efficiently managing inventory, optimizing storage space, ensuring timely order fulfillment, and minimizing errors. Traditional manual or semi-automated processes are often insufficient, leading to issues</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold py-3'>Solution</h1>
                        <div className='flex flex-col  gap-3'>
                            {caseStudyContent.map((item, index)=>(<p key={index}><span className='font-semibold'>{item.heading}</span> {item.description}</p>))}
                            
                        </div>
                    </div>
                </div>
            </div>
            <TechWeUser/>   
        </div>
    )
}

export default CaseStudy