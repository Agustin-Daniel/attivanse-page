import Image from 'next/image'
import React from 'react'
import { CheckSVG } from './icons'

type Prop = {
    title:string,
    img:string,
    price:{base:string, monthly:string},
    description:string,
    features:string[]
}

export const PriceCard = ({title, img, price, description, features}: Prop) => {


  return (
    <div className='flex flex-col items-center w-[320px] px-8 pb-14 rounded-[25px] border-coldgray border-[0.5px]'>
        <Image className='mt-[-34px] mb-7 rounded-t-[25px]' src={img} alt={title} width={279} height={163} />
        <h4  className='mb-3 text-blue'>{title}</h4>
        <p className='mb-9 w-fit text-center lg:text-base'>{description}</p>
        <div className='flex flex-col items-center w-[255px] justify-center rounded-[18px] border-coldgray border-[1px] mb-7 py-2'>
            <span className='text-[38px] font-semibold leading-normal'>${price.base}</span>
            <span className='leading-normal text-lightwhite'>+ ${price.monthly} por mes</span>
        </div>
        <ul className="flex flex-col gap-4 w-fit">
            {
                features.map((feature, index) => (
                    <li key={index} className="flex gap-3 lg:text-base"><CheckSVG height={24} width={24} />{feature}</li>
                ))
            }
        </ul>
    </div>
  )
}
