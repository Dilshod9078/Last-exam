"use client"
import ShopList from '@/components/ShopList'
import React, { useEffect, useState } from 'react'

const Shop = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <div className='container'>
      {loading ? (
        <div className='flex items-center justify-center w-full'>
          <img src="/loading.gif" alt="Loading" width={400} height={300} />
        </div>
      ) : (
        <div className='flex items-center justify-center flex-col w-full my-[30px]'>
          <h2 className='text-[24px] mb-[20px] font-bold leading-[30px] text-green-700'>Empty...</h2>
          <img
            alt="Empty State Concept"
            width="100%"
            height="100%"
            data-id="4046120"
            data-animated-url="https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/76746dc5bb38600f126a31afb6fb66e4.png"
            srcSet="https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=320x240&amp;vertical=center 320w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=400x300&amp;vertical=center 400w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=450x338&amp;vertical=center 450w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=640x480&amp;vertical=center 640w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=700x525&amp;vertical=center 700w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=800x600&amp;vertical=center 800w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=768x576&amp;vertical=center 768w"
            sizes="(max-width: 100%) 100vw, max(768px, 98vh)"
            src="https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=900x500&amp;vertical=center"
          />
        </div>
      )}
      <div className='py-[128px]'>
       <h3 className='text-[#46A358] mb-[12px] font-bold text-[17px] leading-[16px]'>Releted Products</h3>
        <span className='block w-full h-[0.3px] bg-[#46A35880]'></span>
        <ShopList/>
      </div>
    </div>
  )
}

export default Shop