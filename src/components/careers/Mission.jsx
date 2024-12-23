import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className='px-5 md:px-10 lg:px-16 py-10'>
        <div className='relative  h-[60vh] md:[50vh] lg:[40vh] w-full'>
            <Image src="/assets/images/missionbg.png" alt='bg' height={300} width={300} className='h-full w-full object-cover'/>
            <div className='absolute inset-0 flex flex-col gap-5'>
                <div className='flex flex-col gap-3 items-start '>
                <h1 className='font-semibold text-3xl'>Mission</h1>
                <p className='w-[80vw]'>Our vision is to become a leading global provider of innovative and reliable software solutions that empower businesses to thrive in a digital world. We aim to transform technology into meaningful tools that simplify processes, enhance productivity, and deliver exceptional value to our clients, fostering a connected, efficient, and sustainable future.</p>
                </div>
                <div className='flex flex-col gap-3 items-end '>
                <h1 className='font-semibold text-3xl'>Vision</h1>
                <p className='w-[80vw] text-right'>Our mission is to deliver high-quality, user-centric software solutions that solve real-world challenges. By combining cutting-edge technologies, creative design, and agile development processes, we help businesses of all sizes achieve their goals. We are committed to building robust, scalable, and efficient systems while maintaining transparency, integrity, and long-term partnerships with our clients.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission