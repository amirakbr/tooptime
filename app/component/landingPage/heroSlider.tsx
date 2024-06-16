'use client';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { text } from 'stream/consumers';
import Image from 'next/image';

register();
SwiperCore.use([Autoplay, Pagination, Navigation]);

const sliderConfigData = [
  {
    img: '/football.png',
    text: 'با کیفیت ترین زمین های فوتبال سرپوشیده شده',
  },
  {
    img: '/football.png',
    text: 'با کیفیت ترین زمین های فوتبال سرپوشیده شده',
  },
  {
    img: '/football.png',
    text: 'با کیفیت ترین زمین های فوتبال سرپوشیده شده',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 250000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="w-full h-full"
      onSlideChange={(e) => {
        console.log(e, 'e');
      }}
    >
      {sliderConfigData.map(({ img, text }) => (
        <SwiperSlide className="bg-slate-500 relative max-h-[30rem] relative">
          <span className='text-xl'>

          </span>
          <Image width={1000} height={1000} src={img} alt={'tst'} className="object-cover object-center !w-full !h-[30rem]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
