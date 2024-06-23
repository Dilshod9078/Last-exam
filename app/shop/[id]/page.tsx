"use client"
import React, { useEffect, useState } from 'react'
import { URLLOCAL } from '@/service/request'
import axios from 'axios'
import ShopList from '@/components/ShopList'
import Link from 'next/link'
import { Avatar, Rate } from 'antd'
import Rating from '@/components/Rating'
import { Email, InstagramIcons, LikeIcons, LinkedinIcons, TwitterIcons } from '@/assets/Icons'
import { Button } from '@/components/Button'

interface TypeSingleData {
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

function page({params}:any) {
  const singleId = params.id
  const [singleDataObj, setSingleDataObj] = useState<TypeSingleData>({
    product_id:"",
    product_name:"",
    category_id:"",
    short_description:"",
    product_description:"",
    product_status:"",
    size:[],
    count:0,
    cost:0,
    discount:0,
    tags:[],
    liked:false,
    basket:false,
    image_url:''
  })

const [image, setImage] = useState<string>("")

  useEffect(() => {
    axios.get(`${URLLOCAL}/product/${singleId}`).then(response => {
      setSingleDataObj(response.data)
      // console.log(response.data)
      setImage(response.data.image_url[0])
    })
  }, [])

  return (
    <div className='container'>

        <div className='flex items-center justify-between mb-[92px]'>

          <div className='w-[573px] h-[448px] flex items-start justify-between overflow-hidden'>
            <div className='w-[100px] overflow-y-auto'>
            {Array.isArray(singleDataObj.image_url) && singleDataObj.image_url.map((item: string, index: number) => (
          <div key={index} className='flex flex-col space-y-[16px]'>
            <img className='cursor-pointer' onClick={() => setImage(item)} src={item} alt="Images" width={100} height={100} />
          </div>
          ))}
            </div>
            <div className='w-[444px] h-[448px] rounded-[7px] bg-[#fbfbfb] pt-[25px] pr-[23px] pb-[15px] pl-[17px]'>
               <img src={image} alt="Images" width={404} height={404} />
            </div>
          </div>

          <div className='w-[573px]'>
                  <h2 className='text-[28px] text-[#3D3D3D] leading-[16px] mb-[21px]'>{singleDataObj?.product_name}</h2>
                  <div className='mb-[13px] flex items-center justify-between'>
                    <p className='text-[#46A358] text-[22px] leading-[16px] font-bold'>${singleDataObj?.cost}</p>
                    <div className='flex items-center space-x-[11px]'>
                     <Rating/>
                     <p className='text-[15px] leading-[16px] text-[#3D3D3D]'>19 Customer Review</p>
                    </div>
                  </div>
                  <span className='block w-full h-[0.3px] bg-[#46A35880] mb-[15px]'></span>
                  <h3 className='text-[#3D3D3D] text-[15px] leading-[16px] font-medium mb-[10px]'>Short Description:</h3>
                  <p className='text-[#727272] text-[14px] leading-[24px] mb-[24px] font-normal'>{singleDataObj?.short_description}</p>
                  <h3 className='text-[#3D3D3D] text-[15px] leading-[16px] font-medium mb-[11px]'>Size:</h3>
                  {Array.isArray(singleDataObj?.size) && singleDataObj.size.slice().map((size: any) => (
                    <div key={size}>
                       <Avatar className='Shop__size' style={{backgroundColor: "white", border:"1px solid #EAEAEA", textAlign:"center", color:"#727272", fontSize:"14px", fontWeight:"medium",}}>{size[0]}</Avatar>
                    </div>
                 ))}
                 <div className='mb-[26px] mt-[23px] flex items-center gap-[26px]'>

                  <div className='flex items-center space-x-[20px]'>
                    <button className='w-[33px] h-[38px] rounded-[31px] bg-[#46A358] text-white text-[28px] leading-[16px] text-center'>-</button>
                    <span>{singleDataObj?.count}</span>
                    <button className='w-[33px] h-[38px] rounded-[31px] bg-[#46A358] text-white text-[28px] leading-[16px] text-center'>+</button>
                  </div>
                  
                  <div className='flex items-center gap-[10px]'>
                    <Button btnBg={false} title='BUY NOW' buttonWidth={130} padB={9} padT={11}/>
                    <button className='w-[130px] rounded-[6px] border-[1px] border-[#46A358] text-center text-[#46A358] pt-[11px] pb-[9px] font-bold text-[14px] leading-[20px]'>ADD TO CART</button>
                    <button className={`w-[40px] rounded-[6px] border-[1px] border-[#46A358] flex items-center justify-center pt-[11px] pb-[9px] font-bold text-[14px] leading-[20px] ${singleDataObj?.liked ? "" : "text-red-500"}`}>
                      <LikeIcons/>
                    </button>
                  </div>

                 </div>
                 <p className='text-[15px] leading-[16px] text-[#e5e5e5] mb-[10px]'>SKU: <span className='text-[#727272] '>1995751877966</span></p>
                 <p className='text-[15px] leading-[16px] text-[#e5e5e5] mb-[11px]'>Categories: <span className='text-[#727272] '>Potter Plants</span></p>
                 <p className='text-[15px] leading-[16px] text-[#e5e5e5] mb-[18px]'>Tags: <span className='text-[#727272] '>{singleDataObj?.tags}</span></p>
                 <div className='flex items-center space-x-[16px]'>
                 <p className='text-[#3D3D3D] text-[15px] leading-[16px] font-medium'>Share this products:</p>
                  <div className='flex items-center space-x-[18px]'>
                    <InstagramIcons/>
                    <TwitterIcons/>
                    <LinkedinIcons/>
                    <Email/>
                  </div>
                 </div>
          </div>

        </div>

        <div className='mb-[127px]'>
        <div className='flex items-start space-x-[30px]'>
        <h3 className="font-bold text-[17px] leading-[16px] text-[#46A358] pb-[12px] inline border-b-[3px] border-[#46A358]">Product Description</h3>
        <p className='text-[#3D3D3D] text-[17px] leading-[16px]'>Reviews (19)</p>
        </div>
        <span className='block w-full h-[0.3px] bg-[#46A35880]'></span>
         <p className='my-[18px] text-[#727272] text-[14px] leading-[22px]'>{singleDataObj?.product_description}</p>
         <h4 className='font-bold text-[#3D3D3D] text-[14px] leading-[24px]'>Living Room:</h4>
         <p className='my-[18px] text-[#727272] text-[14px] leading-[22px] mb-[18px]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <h4 className='font-bold text-[#3D3D3D] text-[14px] leading-[24px]'>Dining Room:</h4>
         <p className='my-[18px] text-[#727272] text-[14px] leading-[22px] mb-[18px]'>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
         <h4 className='font-bold text-[#3D3D3D] text-[14px] leading-[24px]'>Office:</h4>
         <p className='my-[18px] text-[#727272] text-[14px] leading-[22px]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      <div className='pb-[128px]'>
       <h3 className='text-[#46A358] mb-[12px] font-bold text-[17px] leading-[16px]'>Releted Products</h3>
        <span className='block w-full h-[0.3px] bg-[#46A35880]'></span>
        <ShopList/>
      </div>
    </div>
  )
}

export default page