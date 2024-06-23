
import { Basketicon, LikeIcons, Searchicon } from '@/assets/Icons';
import { Context } from '@/context/context';
import { URLLOCAL } from '@/service/request';
import axios from 'axios';
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

interface typeFlowers {
  item: any;
  setReRender:(key:boolean) => void;
  reRender?:boolean;
}


export const FlowersProducts:React.FC<typeFlowers> = ({item, setReRender, reRender}) => {
  
const {refresh, setRefresh} = useContext(Context)

  const likedClick = (id:string) => {
    axios.post(`${URLLOCAL}/like/${id}`, {} , {
      headers: {
        "Authorization" : "Bearer " + window.localStorage.getItem("token")
      }
    } ).then(res => {
      setReRender(!reRender)
      toast.success('Added to the favorites!')
    }).catch(err => {
      console.log(err); 
    })
  }

  const basketClick = (id:string) => {
    axios.post(`${URLLOCAL}/basket`,{
      productId: id
    }, {
       headers: {
         "Authorization" : "Bearer " + window.localStorage.getItem("token")
       }
    } ).then(res => {
      setReRender(!reRender)
      setRefresh(!refresh)
      toast.success('Added to cart!')
    })
  }

  return (
    <li className=' w-[258px]'>
      <Toaster position="top-center" reverseOrder={false}/>
                <div className='bg-[#FBFBFB] pt-[31px] px-[4px] pb-[19px]  overflow-hidden flowers__wrap relative'>
                  <Link href={`/shop/${item.product_id}`} >
                   <img className="h-[250px] mb-[10px]" src={item.image_url ? item.image_url[0] : ""} alt="Flowers image" width={250} height={250} />
                  </Link>
                <ul className='flex items-center space-x-[26px] mt-2 flowers__icons duration-300 absolute justify-center right-0 -bottom-[40px] left-0'>
                  <li onClick={() => basketClick(item.product_id)} className={`w-[35px] h-[35px] bg-[#FFFFFF] rounded-[4px] flex items-center justify-center ${ item.basket ? "text-[green]" : ""}`}>
                    <Basketicon/>
                  </li>
                  <li onClick={() => likedClick(item.product_id)} className={`w-[35px] h-[35px] bg-[#FFFFFF] cursor-pointer rounded-[4px] flex items-center justify-center ${item.liked ? "text-red-500" : ""}`}>
                    <LikeIcons/>
                  </li>
                  <li className='w-[35px] h-[35px] bg-[#FFFFFF] rounded-[4px] flex items-center justify-center'>
                    <Searchicon/>
                  </li>
                </ul>
                </div>
                <div className='mt-[12px]'>
                <p className='text-[#3D3D3D] text-[16px] leading-[16px] mb-[6px]'>{item.product_name}</p>
                 <p className='text-[#46A358] text-[18px] leading-[16px] font-bold'>{item.cost}</p>
                </div>
              
    </li>
  )
}
