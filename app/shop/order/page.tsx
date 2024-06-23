"use client"
import { Button } from '@/components/Button';
import ShopList from '@/components/ShopList';
import { URLLOCAL } from '@/service/request';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface OrderProductType {
    basket: boolean;
    category_id: string;
    cost: number;
    count: number;
    discount: number;
    image_url: string[];
    liked: boolean;
    product_description: string;
    product_id: string;
    product_name: string;
    product_status: string;
    short_description: string;
    size: string[];
    tags: string[];
  }

const OrderProduct: React.FC = () => {
    const token = window.localStorage.getItem("token");
    const [arrayBasket, setArrayBasket] = useState<OrderProductType[]>([]);
    const [err, setErr] = useState<string | null>(null);

    const Total = arrayBasket.reduce((list, item) => list + item.cost * item.count, 0)
    const DiscountTotal = arrayBasket.reduce((list, item) => list + item.discount * item.count, 0)
    const result = Total - DiscountTotal
    const servicePrice = 16.00
    const AllTotal = Total + servicePrice - result

    useEffect(() => {
      axios
        .get(`${URLLOCAL}/basket`, {
          params: {
            page: 1,
            limit: 100,
          },
          headers: {
            "Authorization": `Bearer ` + token,
          },
        })
        .then((response) => {
            setArrayBasket(response.data.ProductId);
        })
        .catch((err) => {
          setErr(err.message);
          console.error("There was an error!", err);
        });
    }, [token]);

    const incPrice = (productId: string) => {
        setArrayBasket((plus) =>
          plus.map((item) =>
            item.product_id === productId
              ? { ...item, count: item.count + 1 }
              : item
          )
        );
      };
    
      const decPrice = (productId: string) => {
        setArrayBasket((minus) =>
          minus.map((item) =>
            item.product_id === productId && item.count > 1
              ? { ...item, count: item.count - 1 }
              : item
          )
        );
      };

   const handleOrderStore = () => {
    const orderStore = arrayBasket
    const basketArr = window.localStorage.setItem("basketArr", JSON.stringify(orderStore))
   }

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {err && <p className="text-red-500">{err}</p>}
      <div className="flex items-start justify-between mb-[87px]">
      <table className='w-[65%]'>
                    <thead className='border-b-[0.3px] border-[#46A358]'>
                        <tr className='h-[40px]'>
                            <th className='text-start font-medium text-[16px] leading-[16px] text-[#3D3D3D] w-[280px]'>Products</th>
                            <th className='text-start font-medium text-[16px] leading-[16px] text-[#3D3D3D] '>Price</th>
                            <th className='text-start font-medium text-[16px] leading-[16px] text-[#3D3D3D] '>Quantity</th>
                            <th className='text-start font-medium text-[16px] leading-[16px] text-[#3D3D3D] '>Total</th>
                            <th className='text-start font-medium text-[16px] leading-[16px] text-[#3D3D3D] '></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrayBasket.map((item: OrderProductType) => (
                                <tr key={item.product_id}>
                                    <td className='w-[280px]'>
                                        <div className='flex items-center gap-[14px]'>
                                            <img src={item.image_url[0]} alt="" width={70} height={70} />
                                            <div>
                                                <strong className='font-medium text-[16px] leading-[16px] text-[#3D3D3D]'>{item.product_name}</strong>
                                                <p className='font-normal text-[14px] leading-[16px] opacity-[0.7] text-[#3D3D3D]'>SKU: <span>1995751877966</span></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' font-medium text-[16px] leading-[16px] text-[#727272]'>${item.cost}.00</td>
                                    <td className=''>
                                        <div className='flex items-center gap-[11px]'>
                                            <span
                                                onClick={() => decPrice(item.product_id, )}
                                                className='cursor-pointer text-white w-[22px] h-[25px] rounded-[31px] bg-[#46A358] flex items-center justify-center'
                                            >-</span>
                                            <span className='font-normal text-[17px] leading-[10px] text-[#3D3D3D]'>{item.count}</span>
                                            <span
                                                onClick={() => incPrice(item.product_id, )}
                                                className='cursor-pointer text-white w-[22px] h-[25px] rounded-[31px] bg-[#46A358] flex items-center justify-center'
                                            >+</span>
                                        </div>
                                    </td>
                                    <td className=' font-bold text-[16px] leading-[16px] text-[#46A358]'>${item.cost * item.count}.00</td>
                                    <td className='text-start'>
                                        <button>
                                            <img src="/trash.svg" alt="" width={24} height={24} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='w-[28%]'>
                    <h2 className='h-[40px] flex items-center border-b-[0.3px] border-[#46A358] mb-[11px] font-bold text-[18px] leading-[16px] text-[#3D3D3D]'>Cart Totals</h2>
                    <p className='font-normal text-[14px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Coupon Apply</p>
                    <label className='w-full flex justify-between h-[42px] border-2 border-[#46A358] rounded-[8px] mb-[30px]'>
                        
                    <input className='py-[12px] px-[9px] ml-[4px] outline-none' type="text" placeholder='Enter coupon code here...' />
                        <Button buttonWidth={102} padT={12} padB={12} btnBg={false} title='Apply' />
                    </label>
                    <ul className='flex flex-col gap-[10px]'>
                        <li className='flex justify-between'>
                            <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Subtotal</p>
                            <p className='font-medium text-[18px] leading-[16px] text-[#3D3D3D]'>${Total.toFixed(2)}</p>
                        </li>
                        <li className='flex justify-between'>
                            <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Coupon Discount</p>
                            <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D]'>- ${result}</p>
                        </li>
                        <li className='flex justify-between'>
                            <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Shipping</p>
                            <p className='font-medium text-[18px] leading-[16px] text-[#3D3D3D]'>${servicePrice.toFixed(2)}</p>
                        </li>
                        <li className='flex justify-end font-normal text-[12px] leading-[16px] text-[#46A358] cursor-pointer'>View shipping charge</li>
                        <li className='flex justify-between mt-[15px]'>
                            <p className='font-bold text-[16px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Total</p>
                            <p className='font-bold text-[18px] leading-[16px] text-[#46A358]'>${AllTotal.toFixed(2)}</p>
                        </li>
                    </ul>
                    <div className='flex flex-col mt-[30px]'>
                        <Link href={`/shop/chekout`}>
                            <Button onclick={handleOrderStore} buttonWidth={332} padB={12} padT={12} btnBg={false} title='Proceed to checkout' />
                        </Link>
                        <Button buttonWidth={332} padT={12} padB={12} btnBg={true} title='Continue Shopping' />
                    </div>
                </div>
            </div>
            <div className='pb-[128px]'>
       <h3 className='text-[#46A358] mb-[12px] font-bold text-[17px] leading-[16px]'>You may be interested in</h3>
        <span className='block w-full h-[0.3px] bg-[#46A35880]'></span>
        <ShopList/>
      </div>
      </div>
  )
}

export default OrderProduct