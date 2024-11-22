import Image from "next/image";
import React from "react";

const MeetOurTeam = () => {
  return (
    <div
      className=" px-5 xl:px-16 md:px-10 lg:px-12 mx-auto  
h-full pt-14 flex flex-col items-center "
    >
      <h3 className="text-2xl md:text-4xl font-medium">Meet Our Team</h3>
      <div
        className="w-full grid  grid-cols-2 md:grid-cols-3 gap-y-4  
   lg:grid-cols-5  gap-x-3 md:gap-x-6 lg:gap-x-10 py-7 md:py-14"
      >
        {new Array(5).fill(" ").map((item, index) => (
          <div
            key={index}
            className="w-full  gap-y-2 md:gap-y-5 flex flex-col  rounded-lg overflow-hidden"
          >
            <div
              className="w-full aspect-square bg-primary
         flex items-center justify-center rounded-lg"
            >
              <Image
                src={`/assets/images/teams/${index + 1}.png`}
                alt="teams"
                width={200}
                height={200}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h5 className=" text-sm md:text-lg font-semibold">
                Melvin Thomas
              </h5>
              <span className="text-xs md:text-base">CEO</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
