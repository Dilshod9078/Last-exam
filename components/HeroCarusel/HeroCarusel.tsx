"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './hero.css';

import { Pagination } from 'swiper/modules';
import { Button } from '../Button';
import { BtnArrowIcon } from '../../assets/Icons';

interface HeroType {
    id: number;
    textTop: string;
    title: string;
    description: string;
  }

export default function HeroMobile() {
    const heroData = [
        {
          id:1,
          textTop: "WELCOME TO GREENSHOP",
          title:"LET'S MAKE A BETTER",
          description: "We are an online plant shop offering a wide range"
        },
        {
          id:2,
          textTop: "WELCOME TO GREENSHOP",
          title:"LET'S MAKE A BETTER",
          description: "We are an online plant shop offering a wide range"
        },
        {
          id:3,
          textTop: "WELCOME TO GREENSHOP",
          title:"LET'S MAKE A BETTER",
          description: "We are an online plant shop offering a wide range"
        }
      ]
  return (
    <div className='md:hidden'>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {heroData.map((item: HeroType) => (
          <SwiperSlide key={item.id} className='hero-mobile pt-[24px] flex items-center justify-start pb-[26px]'>
            <div className='w-[206px] text-left'>
              <p className='mb-[7px] text-[11px] font-medium leading-[16px]'>{item.textTop}</p>
              <h2 className='mb-[3px] font-black text-[24px] leading-[29px] text-[#3D3D3D]'>{item.title} <span className='text-[#46A358]'>PLANET</span></h2>
              <p className='mb-[10px] font-normal text-[12px] leading-[18px]'>{item.description}</p>
              <Button position='next' icon={<BtnArrowIcon/>} btnBg={true} title='SHOP NOW'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

