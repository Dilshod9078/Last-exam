import React from 'react'
import { Button } from './Button'

function SummerFlowers() {
  return (
    <div className='flex items-center justify-between'>
        <div className='Summer__wrapper pr-[30px] pt-[37px] pb-[40px] bg-[#FBFBFB] w-[586px] flex items-center justify-end'>
            <div className=' w-[292px] flex items-end flex-col'>
                 <div className='w-[165px] mb-[16px] '>
                    <h2 className='font-black text-[#3D3D3D] text-[18px] leading-[24px] text-end'>SUMMER CACTUS & SUCCULENTS</h2>
                 </div>
                <p className='text-[#727272] text-[14px] mb-[24px] leading-[24px] text-end'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <Button title='Find More' btnBg={false} buttonWidth={140} position='next' padB={10} padT={10}/>
            </div>
        </div>
        <div className='wrapper__inner pr-[30px] pt-[37px] pb-[40px] bg-[#FBFBFB] w-[586px] flex items-center justify-end'>
            <div className=' w-[292px] flex items-end flex-col'>
                 <div className='w-[165px] mb-[16px] '>
                    <h2 className='font-black text-[#3D3D3D] text-[18px] leading-[24px] text-end'>STYLING TRENDS &  MUCH MORE</h2>
                 </div>
                <p className='text-[#727272] text-[14px] mb-[24px] leading-[24px] text-end'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <Button title='Find More' btnBg={false} buttonWidth={140} position='next' padB={10} padT={10}/>
            </div>
        </div>
    </div>
  )
}

export default SummerFlowers