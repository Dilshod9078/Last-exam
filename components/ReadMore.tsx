import Link from 'next/link'
import React from 'react'
import {ArrowExit} from '../assets/Icons'

function ReadMore() {
  return (
    <Link className='flex items-center space-x-[3px] text-[#3D3D3D] text-[14px] leading-[16px] font-medium duration-300 hover:text-[#46A358]' href={'#'}>
        <span>Read More</span>
        <ArrowExit/>
    </Link>
  )
}

export default ReadMore