import HeaderBanner from "@/components/Banner";
import JobInfo from "@/components/careers/JobInfo";
import Life from "@/components/careers/Life";
import Mission from "@/components/careers/Mission";
import MeetOurTeam from "@/components/meetOurTeam";
import WhatAreSkaktech from "@/components/whatAre";
import Image from "next/image";
import React from "react";

const Careers = () => {
  return (
    <div className=" min-h-screen">
      <HeaderBanner
        image={"/assets/images/Careers.jpg"}
        title={"Accelerate your career with skaktech"}
      />
      <JobInfo title={"Job Vacancies"}/>
      <MeetOurTeam />
      {/* <Mission/> */}
      <Life/>
    </div>
  );
};

export default Careers;
