'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdCheckmark } from "react-icons/io";
import { requirements } from '@/components/careers/constants';
import { responsibilities } from '@/components/careers/constants';
import JobInfo from '@/components/careers/JobInfo';
import { Formik } from 'formik';
import * as Yup from 'yup';


const Detailspage = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const validationSchema = Yup.object({  // Now using 'Yup' instead of 'yup'
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
        resume: Yup.mixed().required('Resume is required')
    });

    // Initialize form values
    const initialValues = {
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        resume: null,
        message: ''
    }

    // Handle form submission
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    }
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
                        {responsibilities.map((item, index) => (<div key={index} className='flex gap-2 items-center py-3'>
                            <div className='bg-[#DCE7F9] rounded-full p-1'><IoMdCheckmark color='58a0ea' /></div>
                            <p>{item}</p>
                        </div>))}
                    </div>
                    <h1 className='text-3xl font-semibold'>Requirements</h1>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {requirements.map((item, index) => (<div key={index} className='flex gap-2 items-center py-3'>
                            <div className='bg-[#DCE7F9] rounded-full p-1'><IoMdCheckmark color='58a0ea' /></div>
                            <p>{item}</p>
                        </div>))}
                    </div>
                    <div className=' mt-3'>
                        <button onClick={handleModal} className='bg-blue-600 hover:bg-blue-700 transition-colors duration-100 ease-in-out rounded-full px-5 py-2 text-white'>Apply Now</button>
                    </div>

                </div>
            </div>


            <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-300 z-50
    ${modalOpen ? 'bg-opacity-50 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'}`}
            >
                <div
                    className={`bg-white p-5 rounded-md shadow-lg w-4/5 md:w-1/3 transform transition-all duration-300 ease-in-out
        ${modalOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Apply</h2>
                        <button
                            onClick={handleModal}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit, handleChange, values, setFieldValue }) => (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        onChange={handleChange}
                                        value={values.fullName}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        onChange={handleChange}
                                        value={values.phone}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                                        Resume
                                    </label>
                                    <input
                                        type="file"
                                        name="resume"
                                        id="resume"
                                        onChange={(event) => {
                                            setFieldValue("resume", event.currentTarget.files[0]);
                                        }}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        onChange={handleChange}
                                        value={values.message}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

            <div>
                <JobInfo title={"More Job Opportunities"} />
            </div>
        </div>
    )
}

export default Detailspage