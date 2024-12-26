import React from 'react'
import Image from 'next/image'
import { IoMdCheckmark } from "react-icons/io";
import { requirements } from '@/components/careers/constants';
import { responsibilities } from '@/components/careers/constants';
import JobInfo from '@/components/careers/JobInfo';


const Detailspage = () => {
    
    return (
        <div >
            <div className=" relative flex flex-col items-center justify-center  h-[230px] overflow-hidden md:h-[400px] bg-gradient-to-b from-white to-black bg-red-500">
                <Image
                    src='/assets/images/job-bg.jpg'
                    alt="career"
                    width={1000}
                    height={600}
                    quality={100}
                    className="absolute w-full h-full object-cover  left-0 right-0 top-0 bottom-0 m-auto"
                />

                <h4 className="text-[#404040]  leading-loose text-center font-bold text-xl md:text-5xl mt-10 relative z-30  ">
                    UI/UX Designer
                </h4>
            </div>
            <div className="flex justify-center -translate-y-20 ">
                <div className='w-5/6 md:w-4/5 bg-white p-5 md:p-10 xl:p-20 flex flex-col gap-5 shadow-xl'>
                    <h1 className='text-3xl font-semibold'>Job Description</h1>
                    <p>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.
                    </p>
                    <p>
                    Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
                    </p>
                    <h1 className='text-3xl font-semibold'>Responsibilities</h1>
                    <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {responsibilities.map((item, index)=>(<div key={index} className='flex gap-2 items-center py-3'>
                            <div className='bg-[#DCE7F9] rounded-full p-1'><IoMdCheckmark /></div>
                            <p>{item}</p>
                        </div>))}
                    </div>
                    <h1 className='text-3xl font-semibold'>Requirements</h1>
                    <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {requirements.map((item, index)=>(<div key={index} className='flex gap-2 items-center py-3'>
                            <div className='bg-[#DCE7F9] rounded-full p-1'><IoMdCheckmark /></div>
                            <p>{item}</p>
                        </div>))}
                    </div>
                </div>
            </div>
            <div>
                <JobInfo title={"More Job Opportunities"}/>
            </div>
        </div>
    )
}

export default Detailspage