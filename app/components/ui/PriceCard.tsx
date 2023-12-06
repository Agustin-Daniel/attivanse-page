import Image from 'next/image'
import React from 'react'
import { CheckSVG } from './icons'
import clsx from 'clsx'
import { worksans } from './fonts'

type Prop = {
    title:string,
    premium:boolean,
    popular:boolean,
    img:string,
    price:{base:string, monthly:string},
    description:string,
    features:string[]
}

export const PriceCard = ({title, img, price, description, features, premium, popular}: Prop) => {


  return (
    <div className='flex relative flex-col items-center w-[326px] px-8 pb-14 rounded-[25px] border-coldgray border-[0.5px]'>
        <Image className='mt-[-34px] mb-7 rounded-t-[25px]' src={img} alt={title} width={279} height={163} />
        <h4  className='mb-3 text-blue font-normal'>{title}</h4>
        {
            popular && <span className='bg-[#FEBD1B] absolute top-[93px] text-xs py-[6px] px-5 text-black font-extrabold rounded'>MOST POPULAR</span>
        }
        <p className={clsx(worksans.className, 'mb-9 w-fit text-center lg:text-base')}>{description}</p>
        <div className='flex flex-col items-center w-[255px] justify-center rounded-[18px] border-coldgray border-[1px] mb-7 py-2'>
            <span className='text-[38px] font-bold leading-normal'>${price.base}</span>
            <span className={clsx(worksans.className, 'leading-normal text-lightwhite')}>+ ${price.monthly} por mes</span>
        </div>
        <ul className="flex flex-col gap-4 w-fit">
            {
                features.map((feature, index) => (
                    <li key={index} className={clsx(
                        worksans.className,
                        'flex gap-3 lg:text-base',
                        premium && 'font-semibold'


                    )}><CheckSVG height={24} width={24} />{feature}</li>
                ))
            }
        </ul>
    </div>
  )
}
