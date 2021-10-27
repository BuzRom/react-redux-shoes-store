import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper.min.css'

export default function Slider() {
   SwiperCore.use([Autoplay]);

   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={1}
         loop={true}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false
         }}
      >
         <SwiperSlide> <div className='slide'><img src="img/slider/slide-1.png" alt="slide" /></div></SwiperSlide>
         <SwiperSlide> <div className='slide'><img src="img/slider/slide-2.png" alt="slide" /></div></SwiperSlide>
         <SwiperSlide> <div className='slide'><img src="img/slider/slide-3.png" alt="slide" /></div></SwiperSlide>
      </Swiper>
   )
}
