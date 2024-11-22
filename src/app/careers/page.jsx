import HeaderBanner from "@/components/Banner";
import MeetOurTeam from "@/components/meetOurTeam";
import WhatAreSkaktech from "@/components/whatAre";
import Image from "next/image";
import React from "react";

const Careers = () => {
  return (
    <div className=" min-h-screen">
      <HeaderBanner
        image={"/assets/images/teams.jpg"}
        title={"Accelerate your career with skaktech"}
      />
      <MeetOurTeam />
      <WhatAreSkaktech />
    </div>
  );
};

export default Careers;
