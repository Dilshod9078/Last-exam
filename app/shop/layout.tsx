'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({children}:any) => {
    const pathname = usePathname()
  return (
    <div className='container'>
          <div className='flex items-center space-x-[5px] mb-[43px] pt-[36px]'>
        <Link className='text-[15px] text-[#3D3D3D] duration-300 hover:font-bold hover:text-[#46A358] leading-[16px]' href={'/'}>Home</Link>
        <span>/</span>
         <button className={`text-[15px] text-[#3D3D3D] duration-300 ${pathname.includes("/order") ? "font-normal hover:font-bold" : "font-bold"} hover:text-[#46A358] leading-[16px]`}>Shop</button>
         <button className='text-[15px] text-[#3D3D3D] duration-300 font-bold hover:text-[#46A358] leading-[16px]'>{pathname.includes("order") ? "/ Shopping cart" :""}</button>
      </div>
        {children}
    </div>
  )
}

export default layout