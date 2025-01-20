import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurCaseStudy from '../OurCaseStudy';
import { sliderData } from '@/constants';

import './index.css'

const MySlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        customPaging: (i) => (
            <div className="custom-dot "></div>
        ),
    };

    return (
        <div>
            <h1 className='text-4xl md:text-5xl text-center text-[#268BBF] py-5 md:py-10 xl:py-20 font-medium'>Our <span className='font-bold'>Case Study</span></h1>
            <Slider {...settings}>
                {sliderData.map((item) => (<div key={item.id}>
                    <OurCaseStudy heading={item.heading} desc={item.desc} />
                </div>))}
            </Slider>
        </div>


    )
}

export default MySlider