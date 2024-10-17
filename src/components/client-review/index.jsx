import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ClientReviews = () => {
  return (
    <div>
      <div className="relative  bg-clientReview bg-cover bg-no-repeat">
        <div className="absolute inset-0 opacity-80 bg-primary"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <div className="  text-center  relative  ">
            <h1 className="text-[60px] font-bold mb-20      ">
              Our Client Says
            </h1>
          </div>
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <Image
                src={"/assets/icons/opening.png"}
                alt="icon"
                className=" mb-20"
                width={35}
                height={90}
              />
            </motion.div>

            <p className="max-w-[500px] text-[20px] text-center mx-4">
              Content Players Withdrawal Hasn’t Been Processed Winfest Casino
              Piracy And The Legend Of Blackbeard Freispiele Spielsaal Spiele
              Anna Spielbank Erreichbar
            </p>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <Image
                className=" mt-36"
                src={"/assets/icons/closing.png"}
                alt="icon"
                width={55}
                height={90}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}  t
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="  mt-5 flex flex-col items-center"
          >
            <div>
              <Image
                src={"/assets/images/review/rounded.png"}
                width={70}
                height={70}
                alt="image"
              />
            </div>

            <h1 className="  text-[22px] my-3">Amit Tiwari, Hyderabad</h1>
            <div className=" flex justify-between">
              <div className="  size-3 rounded-full bg-white"></div>
              <div className="  mx-3 size-3 rounded-full bg-[#919191]"></div>
              <div className="  size-3 rounded-full bg-white"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
