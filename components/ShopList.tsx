import React from 'react'

const ShopList = () => {
  return (
    <ul className='mt-[44px] flex items-center justify-between'>
        <li className='w-[220px]'>
            <div className='bg-[#FBFBFB] pt-[20px] px-[4px] pb-[23px] mb-[12px]'>
            <img className='h-[212px] object-cover' src={'/shop-img1.png'} alt="Shop images" width={212} height={212} />
            </div>
            <h3 className='font-normal mb-[4px] text-[#3D3D3D] text-[15px] leading-[16px]'>Beach Spider Lily</h3>
            <strong className='text-[#46A358] text-[16px] leading-[16px] font-bold'>$129.00</strong>
        </li>
        <li className='w-[220px]'>
            <div className='bg-[#FBFBFB] pt-[20px] px-[4px] pb-[23px] mb-[12px]'>
            <img className='h-[212px] object-cover' src={'/shop-img2.png'} alt="Shop images" width={212} height={212} />
            </div>
            <h3 className='font-normal mb-[4px] text-[#3D3D3D] text-[15px] leading-[16px]'>Blushing Bromeliad</h3>
            <strong className='text-[#46A358] text-[16px] leading-[16px] font-bold'>$139.00</strong>
        </li>
        <li className='w-[220px]'>
            <div className='bg-[#FBFBFB] pt-[20px] px-[4px] pb-[23px] mb-[12px]'>
            <img className='h-[212px] object-cover' src={'/shop-img3.png'} alt="Shop images" width={212} height={212} />
            </div>
            <h3 className='font-normal mb-[4px] text-[#3D3D3D] text-[15px] leading-[16px]'>Aluminum Plant</h3>
            <strong className='text-[#46A358] text-[16px] leading-[16px] font-bold'>$179.00</strong>
        </li>
        <li className='w-[220px]'>
            <div className='bg-[#FBFBFB] pt-[20px] px-[4px] pb-[23px] mb-[12px]'>
            <img className='h-[212px] object-cover' src={'/shop-img4.png'} alt="Shop images" width={212} height={212} />
            </div>
            <h3 className='font-normal mb-[4px] text-[#3D3D3D] text-[15px] leading-[16px]'>Bird's Nest Fern</h3>
            <strong className='text-[#46A358] text-[16px] leading-[16px] font-bold'>$99.00</strong>
        </li>
        <li className='w-[220px]'>
            <div className='bg-[#FBFBFB] pt-[20px] px-[4px] pb-[23px] mb-[12px]'>
            <img className='h-[212px] object-cover' src={'/shop-img5.png'} alt="Shop images" width={212} height={212} />
            </div>
            <h3 className='font-normal mb-[4px] text-[#3D3D3D] text-[15px] leading-[16px]'>Chinese Evergreen</h3>
            <strong className='text-[#46A358] text-[16px] leading-[16px] font-bold'>$39.00</strong>
        </li>
    </ul>
  )
}

export default ShopList