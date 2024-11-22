"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const testimonials = [
  {
    content: [
      "Content Players Withdrawal Hasn't Been Processed",
      "Winfest Casino Piracy And The Legend Of Blackbeard",
      "Freispiele Spielsaal Spiele Anna Spielbank Erreichbar",
    ],
    author: "Amit Tiwari",
    location: "Hyderabad",
    avatar: "/assets/images/person.png",
  },
  {
    content: [
      "Great service and support team",
      "Quick response to all queries",
      "Highly professional staff",
    ],
    author: "Sarah Chen",
    location: "Singapore",
    avatar: "/assets/images/person.png",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    customPaging: (i) => (
      <div className="w-2 h-2 mx-1 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors" />
    ),
  };

  return (
    <div className="w-full    md:max-w-3xl mx-auto px-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className=" text-white  md:px-8 pt-8 mx-4 my-8">
              <div className="text-center w-full ">
                <h2 className="text-3xl md:text-5xl font-semibold mb-16">
                  Our Client Says
                </h2>
                <div className="space-y-2  w-full  mb-8  relative">
                  {testimonial.content.map((line, i) => (
                    <p key={i} className=" text-sm md:text-lg px-2">
                      {line}
                    </p>
                  ))}
                  <div className="absolute -left-2 md:left-0 -top-5">
                    <Image
                      src={"/assets/svg/qaute.svg"}
                      alt="quates"
                      width={34}
                      height={34}
                      className="w-[20px] md:w-[34px]"
                    />
                  </div>
                  <div className="absolute -right-2 md:right-0 -bottom-5">
                    <Image
                      src={"/assets/svg/qaute.svg"}
                      alt="quates"
                      width={34}
                      height={34}
                      className="rotate-180 w-[20px] md:w-[34px]"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full  w-[40px] md:w-[64px]"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="md:text-xl font-semibold">
                    {testimonial.author}
                  </h3>
                  <p className=" text-xs md:text-sm opacity-80">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
