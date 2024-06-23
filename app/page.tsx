"use client";

import HeroMobile from '../components/HeroCarusel/HeroCarusel';
import HeroCarusel from '../components/HeroCarusel'
import {RangePrice} from '../components/RangePrice';
import Link from 'next/link';
import Posts from '../components/Posts';
import SummerFlowers from '../components/SummerFlowers';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { URLLOCAL } from '../service/request';
import { DownIcon } from '@/assets/Icons';
import { FlowersProducts } from '../components/FlowersProducts';
import { Pagination, Popover } from 'antd';

interface typeCategory {
  category_id: string;
  category_name: string;
}

interface sizesType {
  sizes_id: string;
  sizes_name: string;
}

interface TagNavType {
  tagNavbar_id: string;
  tagNavbar_name: string;
  path_url: string | null;
}

interface typeFlowers {
  product_id: string;
  product_name: string;
  category_id: string;
  short_description:string;
  product_description: string;
  product_status:string;
  size:[];
  count:number;
  cost:number;
  discount:number;
  tags:[];
  liked:boolean;
  basket:boolean;
  image_url:string;
}
  function Home() {

    const token  = window.localStorage.getItem("token")

    const [loading, setLoading] = useState<boolean>(false)
    const [reRender, setReRender] = useState<boolean>(false)

 const [categoryData, setCategoryData] = useState<Array<typeCategory>>([])
 const sizesData = [
  {
    sizes_id:"1",
    sizes_name:"Small"
  },
  {
    sizes_id:"2",
    sizes_name:"Medium"
  },
  {
    sizes_id:"3",
    sizes_name:"Large"
  }
 ]
 const tagnavData =[
  {
    tagNavbar_id:"1",
    tagNavbar_name:"All Plants",
    path_url:null
  },
  {
    tagNavbar_id:"2",
    tagNavbar_name:"New Arrivals",
    path_url:"new-arrival"
  },
  {
    tagNavbar_id:"3",
    tagNavbar_name:"Sale",
    path_url:"sale"
  }
 ]

 const [flowersData, setFlowersData] = useState<Array<typeFlowers>>([])

 const [handleCategoryId, setHandleCategoryId] = useState<string  | null>(null)
 const [tagNavId, setTagNavId] = useState<string | null>("")
 const [sizeId, setSizeId] = useState<string | null>("")
 const [arr, setArr] = useState<string>('Show')
 const [pagenation, setPagenation] = useState<number>(1)
 const [borderLimit, setBorderLimit] = useState<number>(10)
 const [priceValue, setPriceValue] = useState<Array<number> | null | string>(null)

 const mergedArrow = useMemo(() => {
  if (arr === 'Hide') {
    return false;
  }

  if (arr === 'Show') {
    return true;
  }

  return {
    pointAtCenter: true,
  };
}, [arr]);

  useEffect(() => {
    axios.get(`${URLLOCAL}/categories?page=1&limit=100`).then(res => {
      setCategoryData(res.data.categories);      
    })
  }, [])
  
  useEffect(() => {
    axios.get(`${URLLOCAL}/products`, {
      params:{
        page: pagenation,
        limit: 10,
        name:null,
        category:handleCategoryId,
        size:sizeId,
        status:tagNavId,
        min_price:priceValue ? priceValue[0] : null,
        max_price:priceValue ? priceValue[1] : null,
      },
      headers:  token ? {
        "Authorization": "Bearer " + token
      } : {}
    }).then(res => {
      setLoading(false)
      setBorderLimit(res.data.total_count)
        setFlowersData(res.data.products)
    }).catch(err => {
      setLoading(false)
      console.log(err);
    })
  }, [handleCategoryId, sizeId, priceValue, tagNavId, pagenation, reRender])

  return (
  <main>
    <section className="pt-[12px] pb-[26px]">
        <div className="container px-[24px] md:px-0">
        <HeroCarusel/>
        <HeroMobile/>
        </div>
      </section>
      <section className='pb-[271px]'>
        <div className="container">
          <div className='flex justify-between gap-[50px]'>
            <div className='w-[25%]'>
              <div className=' w-full bg-[#FBFBFB] pt-[14px] pl-[24px] pb-[19px] pr-[18px]'>
                <h2 className='text-[#3D3D3D] mb-[7px] text-[18px] leading-[20px] block font-bold'>Categories</h2>
                <ul className='pl-[12px] mb-[36px]'>
                  {categoryData?.length > 0 && categoryData.map((item:typeCategory) => (
                    <li onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setHandleCategoryId(item.category_name)
                        setSizeId("")
                        setTagNavId("")
                      }, 400);
                    }} key={item.category_id} className=''>
                      <p className={`${handleCategoryId == item.category_name ? "text-green-500 font-bold" : ""} text-[#3D3D3D] leading-[40px]  text-[15px] cursor-pointer duration-200 transition-all hover:scale-110 `}>
                      {item.category_name}
                      </p>
                    </li>
                  ) )}
                </ul>
                <h2 className='text-[#3D3D3D] mb-[20px] text-[18px] leading-[20px] block font-bold'>Price Range</h2>
                <div className='pl-[12px]'>
                  <RangePrice setPriceRange={setPriceValue}/>
                </div>
                <h2 className='text-[#3D3D3D] mb-[7px] mt-[46px] text-[18px] leading-[20px] block font-bold'>Size</h2>
                <ul className='pl-[12px]'>
                  {sizesData?.length > 0 && sizesData.map((item:sizesType) => (
                    <li onClick={() => {
                      setLoading(true)
                      setTimeout(() => {
                        setSizeId(item.sizes_name)
                        setHandleCategoryId("")
                        setTagNavId("")
                      }, 400)
                    }} key={item.sizes_id}>
                      <p className={`${sizeId == item.sizes_name ? "text-green-500 font-bold" : ""} text-[#3D3D3D] flex items-center leading-[40px] cursor-pointer justify-between  text-[15px] duration-200 transition-all hover:scale-110 `}>
                     {item.sizes_name}
                      </p>
                    </li>
                  ) )}
                </ul>
              </div>
              <Link href={'#'}>
                <img className='w-[100%]' src="/Banner.png" alt="Banner image" width={"100%"} height={470} />
              </Link>
            </div>
              <div className='w-[75%]'>
                <div className='flex justify-between'>
                    <ul className='flex items-center space-x-[37px]'>
                      {tagnavData.map((item:TagNavType) => (
                        <li  key={item.tagNavbar_id} onClick={() => {
                          setLoading(true)
                          setTimeout(() => {
                            setTagNavId(item.path_url)
                            setHandleCategoryId("")
                            setSizeId("")
                          }, 400)
                        }} className={`cursor-pointer ${tagNavId == item.path_url ? "text-[#46A358] font-bold border-b-[2px] border-[#46A358]" : ""} text-[15px] text-[#3D3D3D] pb-[7px] leading-[16px]`}>
                          {item.tagNavbar_name}
                        </li>
                      ))}
                    </ul>
                    <Popover placement="bottom" content={<ul className='text-center flex flex-col space-y-3 w-[170px]'>
                      <li className='text-[16px] leading-[20px] font-medium duration-300 hover:text-[#46A358] hover:font-bold cursor-pointer'>Title sorting</li>
                      <li className='text-[16px] leading-[20px] font-medium duration-300 hover:text-[#46A358] hover:font-bold cursor-pointer'>Price sorting</li>
                    </ul>} arrow={mergedArrow}>
                    <div className='flex cursor-pointer items-center space-x-[8px]'>
                      <span className='text-[#3D3D3D] text-[15px] leading-[16px]'>Short by:</span>
                        <div className='flex items-center gap-[5px]'>
                          <span className='text-[#3D3D3D] text-[15px] leading-[16px]'>Default sorting</span>
                          <DownIcon/>
                        </div>
                  </div>
                    </Popover>
               </div>
               <ul className='mt-[33px] flex items-center justify-between flex-wrap gap-[40px]'>
                {loading ? <div className='flex items-center justify-center w-full'>
                     <img src="/loading.gif" alt="Loading" width={400} height={300}/> 
                  </div> 
                : flowersData?.length ? flowersData.map((item:any) => (
                  <FlowersProducts reRender={reRender} setReRender={setReRender} key={item.product_id} item={item}/>
                )): 
                    <div className='flex items-center justify-center flex-col w-full'>
                      <h2 className='text-[24px] mb-[20px] font-bold leading-[30px] text-green-700'>Empty...</h2>
                      <img alt="Empty State Concept" width="100%" height="100%" data-id="4046120" data-animated-url="https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/76746dc5bb38600f126a31afb6fb66e4.png" srcSet="https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=320x240&amp;vertical=center 320w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=400x300&amp;vertical=center 400w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=450x338&amp;vertical=center 450w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=640x480&amp;vertical=center 640w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=700x525&amp;vertical=center 700w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=800x600&amp;vertical=center 800w, https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=768x576&amp;vertical=center 768w" sizes="(max-width: 100%) 100vw, max(768px, 98vh)" src="https://cdn.dribbble.com/users/1117273/screenshots/4046120/media/66030031f22618718ec0c436462cb5a3.png?resize=900x500&amp;vertical=center"/>
                    </div>
                }
               </ul>
               <div className='flex justify-end mt-[90px]'>
               <Pagination onChange={(e) => {
                 setLoading(true)
                 setTimeout(() => {
                   setPagenation(e)
                 }, 400)
               }} defaultCurrent={pagenation} total={borderLimit} />
               </div>
              </div>
          </div>
        </div>
      </section>

      <section className='pb-[138px]'>
        <div className="container">
          <SummerFlowers/>
        </div>   
      </section>
      <section className='pb-[100px]'>
        <div className="container">
            <Posts/>
        </div>
      </section>

  </main>
  );
}

export default Home
