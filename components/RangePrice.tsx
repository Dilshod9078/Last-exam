"use client"
import { Slider } from 'antd'
import React, { useState } from 'react'
import { Button } from './Button'

interface PriceRangeType {
  setPriceRange:(values:number[]) => void;
}

export const RangePrice:React.FC<PriceRangeType> = ({setPriceRange}) => {
    const [price, setPrice] = useState<number[]>([39, 500]) 

  const onChangeComplete = (values: number[]) => {
    setPrice(values)
    setPriceRange(values)
  }  
  return (
   <>
    <Slider
      range
      min={39}
      max={1400}
      step={1}
      defaultValue={price}
      onChangeComplete={onChangeComplete}
    />
        <p className='flex items-center mt-[15px] space-x-[7px]'>
            <span className='text-[15px] leading-[16px] text-[#3b3b3b] font-normal'>Price: </span>
            <strong className='text-[15px] leading-[16px] text-[#46A358] font-bold'>{price[0]}$ - {price[price.length - 1]}$</strong>
        </p>
        <div className='mt-[16px]'>
          <Button btnBg={false} title='Filter' buttonWidth={90} padT={8} padB={7}/>
        </div>
   </>
  )
}
