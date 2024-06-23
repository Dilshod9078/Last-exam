import { EmailIcons, Facebook, Instagramm, Linkedin, Location, PhoneIcons, Twitter, Youtube } from '@/assets/Icons'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='container'>
       <div className='bg-[#FBFBFB]'>
        <div className='pt-[25px] pr-[25px] pb-[24px] pl-[23px] flex items-center justify-between'>
           <ul className='flex items-center space-x-[32px]'>
             <li className='flex items-center'>
                <div className='mr-[34px] w-[204px]'>
                <img src={'/Garden.svg'} alt="garden image" width={77} height={95} />
                <strong className='mt-[17px] inline-block font-bold text-[17px] leading-[16px] text-[#3D3D3D] mb-[9px]'>Garden Care</strong>
                <p className='text-[#727272] text-[14px] leading-[22px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <span className='block w-[1px] h-[187px] bg-[#46A3581A]'></span>
             </li>
             <li className='flex items-center'>
                <div className='mr-[34px] w-[204px]'>
                <img src={'/plant.svg'} alt="garden image" width={77} height={95} />
                <strong className='mt-[17px] inline-block font-bold text-[17px] leading-[16px] text-[#3D3D3D] mb-[9px]'>Plant Renovation</strong>
                <p className='text-[#727272] text-[14px] leading-[22px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <span className='block w-[1px] h-[187px] bg-[#46A3581A]'></span>
             </li>
             <li className='flex items-center'>
                <div className='w-[204px]'>
                <img src={'/watering.svg'} alt="garden image" width={77} height={95} />
                <strong className='mt-[17px] inline-block font-bold text-[17px] leading-[16px] text-[#3D3D3D] mb-[9px]'>Watering Graden</strong>
                <p className='text-[#727272] text-[14px] leading-[22px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
             </li>
           </ul>
           <div className="w-[364px]">
              <strong className='inline-block text-[#3D3D3D] text-[18px] leading-[16px] font-bold mb-[18px]'>Would you like to join newsletters?</strong> 
              <form className='mb-[17px] w-full'>
              <label className='w-full flex items-center justify-between bg-[#fff] pl-[11px] rounded-tl-[6px] rounded-bl-[6px]'>
                <input className='outline-none bg-transparent placeholder:text-[#ACACAC] placeholder:text-[14px] placeholder:leading-[16px]' type="email" required placeholder='enter your email address...' />
                <button className='bg-[#46A358] w-[85px] py-[12px] duration-300 hover:opacity-80 text-[#fff] text-[18px] leading-[16px] font-bold rounded-tr-[6px] rounded-br-[6px]'>Join</button>
              </label>  
              </form>
              <p className='text-[#727272] text-[13px] leading-[22px] font-normal text-justify'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
           </div>
        </div>
        <div className='bg-[#46A3581A] pt-[25px] pb-[19px] pl-[23px] flex items-center'>
            <a className='inline-block mr-[87px]' href="/">
              <img src={'/site-logo.svg'} alt="Site logo" width={150} height={35} />
            </a>
             <div className='flex items-center w-[215px] mr-[60px] space-x-[9px]'>
                 <Location/>
                <p className='text-[#3D3D3D] text-[14px] leading-[22px] font-normal'>70 West Buckingham Ave. Farmingdale, NY 11735</p>
             </div>
             <div className='flex items-center mr-[73px] space-x-[10px]'>
                <EmailIcons/>
                <a className='text-[#3D3D3D] text-[14px] leading-[22px] font-normal' href='#'>contact@greenshop.com</a>
             </div>
             <div className='flex items-center space-x-[8px]'>
                <PhoneIcons/>
                <a className='text-[#3D3D3D] text-[14px] leading-[22px] font-normal' href="#">+88 01911 717 490</a>
             </div>
        </div>
        <div className='pt-[33px] pl-[23px] pb-[27px] flex items-start'>
            <div className='mr-[166px]'>
                <strong className='inline-block mb-[8px] text-[#3D3D3D] text-[18px] leading-[16px] font-bold'>My Account</strong>
                <ul>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">My Account</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Our stores</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Contact us</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Career</a>
                    </li>
                     <li>
                       <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Specials</a>
                     </li>
                </ul>
            </div>
            <div className='mr-[129px] w-[137px]'>
                <strong className='inline-block mb-[8px] text-[#3D3D3D] text-[18px] leading-[16px] font-bold'>Help & Guide</strong>
                <ul>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Help Center</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">How to Buy</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Shipping & Delivery</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Product Policy</a>
                    </li>
                     <li>
                       <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">How to Return</a>
                     </li>
                </ul>
            </div>
            <div className='mr-[173px] w-[100px]'>
                <strong className='inline-block mb-[8px] text-[#3D3D3D] text-[18px] leading-[16px] font-bold'>Categories</strong>
                <ul>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">House Plants</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Potter Plants</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Seeds</a>
                    </li>
                    <li>
                      <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Small Plants</a>
                    </li>
                     <li>
                       <a className='text-[#3D3D3D] duration-300 hover:font-semibold font-normal text-[14px] leading-[30px]' href="#">Accessories</a>
                     </li>
                </ul>
            </div>
            <div>
                <strong className='inline-block mb-[20px] text-[#3D3D3D] text-[18px] leading-[16px] font-bold'>Social Media</strong>
              <div className='flex items-center space-x-[10px] mb-[33px]'>
                 <Link href={"#"} className='w-[30px] h-[30px] border-[1px] border-[#46A35833] py-[7px] flex items-center justify-center rounded-[4px]'>
                    <Facebook/>
                 </Link>
                 <Link href={"#"} className='w-[30px] h-[30px] border-[1px] border-[#46A35833] py-[7px] flex items-center justify-center rounded-[4px]'>
                    <Instagramm/>
                 </Link>
                 <Link href={"#"} className='w-[30px] h-[30px] border-[1px] border-[#46A35833] py-[7px] flex items-center justify-center rounded-[4px]'>
                    <Twitter/>
                 </Link>
                 <Link href={"#"} className='w-[30px] h-[30px] border-[1px] border-[#46A35833] py-[7px] flex items-center justify-center rounded-[4px]'>
                    <Linkedin/>
                 </Link>
                 <Link href={"#"} className='w-[30px] h-[30px] border-[1px] border-[#46A35833] py-[7px] flex items-center justify-center rounded-[4px]'>
                    <Youtube/>
                 </Link>
              </div>
              <strong className='inline-block mb-[13px] text-[#3D3D3D] text-[18px] leading-[16px] font-bold'>We accept</strong>
              <img src={'/payment.svg'} alt="Payments icons" width={224} height={26} />
            </div>
        </div>
       <span className='w-full h-[1px] bg-[#46A35833] inline-block'></span>
       </div>
       <p className='text-[14px] pt-[7px] pb-[13px] leading-[30px] text-[#3D3D3D] text-center'>© 2021 GreenShop. All Rights Reserved.</p>
    </div>
    
  )
}

export default Footer