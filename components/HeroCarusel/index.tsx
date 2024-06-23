"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './hero.css';

import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from '../Button';

interface HeroType {
  id: number;
  textTop: string;
  title: string;
  description: string;
}

export default function App() {
  const heroData = [
    {
      id:1,
      textTop: "WELCOME TO GREENSHOP",
      title:"LET'S MAKE A BETTER",
      description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
    },
    {
      id:2,
      textTop: "WELCOME TO GREENSHOP",
      title:"LET'S MAKE A BETTER",
      description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
    },
    {
      id:3,
      textTop: "WELCOME TO GREENSHOP",
      title:"LET'S MAKE A BETTER",
      description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
    }
  ]
  return (
    <>
    <div className='hidden md:block'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {heroData.map((item:HeroType) => (
          <SwiperSlide key={item.id} className='pt-[68px] pb-[85px] bg-[#F5F5F580]'>
              <div className=' w-[420px] text-left lg:w-[580px]'>
                <p className='text-[#3D3D3D] text-[14px] leading-[16px] font-medium mb-[7px]'>{item.textTop}</p>
                <h2 className='text-[#3D3D3D] font-black text-[40px] lg:text-[70px] '>{item.title} <span className='text-[#46A358]'>PLANET</span></h2>
                <p className='lg:text-[14px] lg:leading-[24px] text-[13px] leading-[16px] text-[#727272] mb-[30px] lg:mb-[44px]'>{item.description}</p>
                <Button btnBg={false} title='SHOP NOW' buttonWidth={140} padB={10} padT={11}/>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}
