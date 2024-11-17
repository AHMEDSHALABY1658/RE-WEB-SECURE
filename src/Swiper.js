import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import  image from'./images/image 1.png'
import  image1 from'./images/image-2.png'
import  image2 from'./images/image-3.png'
import  image3 from'./images/image-4.png'
import  image4 from'./images/image-5.png'
import  image5 from'./images/image-6.png'

import './Swiper.css';

export default function MySwiper({ swiperRef }) {
    return (
        <Swiper
            direction={"vertical"}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
            loop={true}
            speed={1150}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            className="mySwiper"
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
        >

            <SwiperSlide><div><img src={image} alt="Image 1" /></div></SwiperSlide>
            <SwiperSlide><div><img src={image1} alt="Image 2" /></div></SwiperSlide>
            <SwiperSlide><div><img src={image2} alt="Image 3" /></div></SwiperSlide>
            <SwiperSlide><div><img src={image3} alt="Image 4" /></div></SwiperSlide>
            <SwiperSlide><div><img src={image4} alt="Image 5" /></div></SwiperSlide>
            <SwiperSlide><div><img src={image5} alt="Image 1" /></div></SwiperSlide>
        </Swiper>
    );
}
