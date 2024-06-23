import Image from 'next/image'
import React from 'react'
import ReadMore from './ReadMore'

function Posts() {
  return (
    <div>
        <div className='text-center mb-[35px]'>
        <h2 className='text-[#3D3D3D] text-[30px] leading-[16px] font-bold mb-[15px]'>Our Blog Posts</h2>
        <p className='text-[#727272] text-[14px] leading-[24px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <ul className='flex items-center justify-between'>
            <li className='w-[268px] bg-[#FBFBFB]'>
                <Image src={'/img1.png'} alt='flowers img' width={268} height={195} priority={true}/>
                <div className='pt-[9px] pr-[11px] pb-[12px] pl-[15px]'>
                     <span className='text-[14px] text-[#46A358] leading-[16px] font-medium inline-block mb-[4px]'>September 12  I Read in 6 minutes</span>
                     <h3 className='font-bold mb-[4px] text-[#3D3D3D] text-[20px] leading-[26px]'>Cactus & Succulent Care Tips</h3>
                     <p className='text-[#727272] text-[14px] leading-[22px] mb-[9px]'>Cacti are succulents are easy care plants for any home or patio. </p>
                     <ReadMore/>
                </div>
            </li>
            <li className='w-[268px] bg-[#FBFBFB]'>
                <Image src={'/img2.png'} alt='flowers img' width={268} height={195} priority={true}/>
                <div className='pt-[9px] pr-[11px] pb-[12px] pl-[15px]'>
                     <span className='text-[14px] text-[#46A358] leading-[16px] font-medium inline-block mb-[4px]'>September 13  I Read in 2 minutes</span>
                     <h3 className='font-bold mb-[4px] text-[#3D3D3D] text-[20px] leading-[26px]'>Top 10 Succulents for Your Home</h3>
                     <p className='text-[#727272] text-[14px] leading-[22px] mb-[9px]'>Best in hanging baskets. Prefers medium to high light.</p>
                     <ReadMore/>
                </div>
            </li>
            <li className='w-[268px] bg-[#FBFBFB]'>
                <Image src={'/img3.png'} alt='flowers img' width={268} height={195} priority={true}/>
                <div className='pt-[9px] pr-[11px] pb-[12px] pl-[15px]'>
                     <span className='text-[14px] text-[#46A358] leading-[16px] font-medium inline-block mb-[4px]'>September 15  I Read in 3 minutes</span>
                     <h3 className='font-bold mb-[4px] text-[#3D3D3D] text-[20px] leading-[26px]'>Cactus & Succulent Care Tips</h3>
                     <p className='text-[#727272] text-[14px] leading-[22px] mb-[9px]'>Cacti and succulents thrive in containers and because most are.. </p>
                     <ReadMore/>
                </div>
            </li>
            <li className='w-[268px] bg-[#FBFBFB]'>
                <Image src={'/img4.png'} alt='flowers img' width={268} height={195} priority={true}/>
                <div className='pt-[9px] pr-[11px] pb-[12px] pl-[15px]'>
                     <span className='text-[14px] text-[#46A358] leading-[16px] font-medium inline-block mb-[4px]'>September 15  I Read in 2 minutes</span>
                     <h3 className='font-bold mb-[4px] text-[#3D3D3D] text-[20px] leading-[26px]'>Best Houseplants  Room by Room</h3>
                     <p className='text-[#727272] text-[14px] leading-[22px] mb-[9px]'>The benefits of houseplants are endless. In addition to.. </p>
                     <ReadMore/>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Posts