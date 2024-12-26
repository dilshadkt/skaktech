'use client'
import React, { useState } from 'react'
import { FaRegClock } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { jobData } from './constants';
import { useRouter } from "next/navigation"



const JobInfo = ({title}) => {
    

    const router = useRouter();

    const handleJobClick = (id) => {
        router.push(`/careers/${id}`); 
      };
    return (
        <div className='px-5 md:px-10 lg:px-16 py-10'>
            <h1 className='text-black font-semibold text-4xl py-8'>{title}</h1>
            <div className='flex flex-col gap-5'>
                {jobData.map((item) => (<div key={item.id}  onClick={() => handleJobClick(item.id)} className='flex  py-6 px-4  justify-between items-center cursor-pointer hover:-translate-y-2 rounded-md duration-300 ease-in-out text-[#60697B]' style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                    <div className='flex gap-3 items-center w-2/5'>
                        <div className={`${item.bg} rounded-full p-2`}>
                            <h1 className='text-white'>{item.code}</h1>
                        </div>
                        <h1>{item.title}</h1>
                    </div>
                    <div className='flex gap-2 items-center w-1/5'>
                        <FaRegClock />
                        <h1>{item.duration}</h1>
                    </div>
                    <div className='flex gap-2 items-center w-1/5'>
                        <RiSendPlaneLine />
                        <h1>{item.location}</h1>
                    </div>
                    <div className='w-1/5 flex justify-end'>
                        <MdKeyboardArrowRight />
                    </div>
                </div>))}
            </div>


        </div>
    )
}

export default JobInfo