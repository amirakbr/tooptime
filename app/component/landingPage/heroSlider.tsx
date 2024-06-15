"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

register();
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="w-full h-full"
    >
      <SwiperSlide className="bg-slate-500 relative">testr</SwiperSlide>
      <SwiperSlide className="bg-slate-500 relative">testr</SwiperSlide>
      <SwiperSlide className="bg-slate-500 relative">testr</SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
