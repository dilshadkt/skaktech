import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { sliderItems } from '@/constants';


const ProductSlider = () => {
    
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
            <Slider {...settings}>
                {sliderItems.map((item) => (<div key={item.id}>
                    <div className=' h-[60vh] xl:h-[100vh] px-2 xl:px-5 rounded-2xl '>
                        <Image src={`/assets/images/${item.img}.jpg`} alt='banner' height={1000} width={1000} quality={100} className='h-full w-full object-cover rounded-2xl overflow-hidden bg-green-600' />
                    </div>
                </div>))}
            </Slider>
        </div>
    )
}
export default ProductSlider