'use client'
import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { jobData } from './constants';


const JobInfo = () => {
    const [openRowId, setOpenRowId]= useState(null)


    const toggleDescription = (id) => {
        setOpenRowId((prevId) => (prevId === id ? null : id));
    };
    return (
        <div className='px-5 md:px-10 lg:px-16 py-10'>
            <h1 className='text-black font-bold text-3xl py-5'>New Openings </h1>
            <div className="overflow-x-auto rounded-[30px]">
                <table className="table-auto border-collapse  w-full rounded-[30px] overflow-hidden ">
                    <thead >
                        <tr className="bg-[#D8ECFD] text-lg ">
                            <th className="px-4 py-4 text-start">Job Code</th>
                            <th className=" px-4 py-4 text-start">Job Title</th>
                            <th className=" px-4 py-4 text-start">Experience</th>
                            <th className=" px-4 py-4 text-start"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobData.map((item) => (
                            <React.Fragment key={item.id}>
                                <tr className="hover:bg-gray-50">
                                    <td className=" px-4 py-3 text-start">
                                        {item.id}
                                    </td>
                                    <td className=" px-4 py-3 text-start">{item.name}</td>
                                    <td className=" px-4 py-3 text-start">
                                        {item.age}
                                    </td>
                                    <td className=" px-4 py-3 text-start">
                                        <button onClick={()=>{toggleDescription(item.id)}}>
                                            <IoIosArrowDropdown
                                                size={20}
                                                className={`transition-transform duration-300 ${openRowId === item.id ? 'rotate-180' : ''}`} 
                                            />
                                        </button>
                                    </td>
                                </tr>
                                {openRowId === item.id && (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="px-4 py-3 overflow-hidden transition-all duration-500 ease-in-out "
                    
                                        >
                                            <div className=" text-black">
                                                <div className='flex flex-col gap-5 pt-3'>
                                                    <h1 className=' text-xl'>Job Description</h1>
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div className='flex flex-col gap-5 pt-3'>
                                                    <h1 className=' text-xl'>Responsibilities</h1>
                                                    {item.responsibilities.map((point, index)=>(<li key={index}>
                                                        {point}
                                                    </li>))}
                                                </div>
                                                <div className='flex flex-col gap-5 pt-3'>
                                                    <h1 className=' text-xl'>Requirements</h1>
                                                    {item.responsibilities.map((point, index)=>(<li key={index}>
                                                        {point}
                                                    </li>))}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobInfo