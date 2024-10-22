import { industriesWeServe } from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const Industries = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
    
  return (
    <div>
        <h1 className=" text-[30px] sm:text-[40px] lg:text-[60px] text-center text-primary">
          <span className=" font-medium">Industries</span>
          <span className=" font-bold ml-2">we serve</span>
        </h1>
        <div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid px-5 md:px-16   my-10 gap-16 sm:grid-cols-3 grid-cols-3 lg:py-10 lg:grid-cols-6 place-items-center items-center"
          >
            {industriesWeServe.map((item) => (
              <motion.li
                variants={itemVariants}
                className="flex flex-col  content-center justify-center items-center cursor-pointer"
                key={item.id}
                whileHover={{ translateY: "-10px" }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  className=" mb-1 md:mb-0 object-contain  "
                  src={`/assets/icons/${item.icon}`}
                  alt={item.title}
                  width={26}
                  height={25}
                />
                <span
                  className={` ${
                    item.id === 18 ? "  text-nowrap" : ""
                  }text-black text-[12px] md:text-[16px] md:px-5 font-normal       pt-5 md:mt-0 text-center whitespace-normal`}
                >
                  {item.title}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
    </div>
  )
}
