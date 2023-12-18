import React from 'react'
import { PriceCard } from './PriceCard'

const cards = [
    {
        title:"STARTER",
        premium: false,
        popular: false,
        img:"/img/price-img-1.png",
        price: {base: "299", monthly: "25"},
        description:"Lörem ipsum astronas preniriröv, om gytt. Frågestrejka nyl av göra",
        features: [
            "Description of the features",
            "Description of the features",
            "Description of the features"
        ]
    },
    {
        title:"SEMI-CUSTOM",
        premium: false,
        popular: true,
        img:"/img/price-img-2.png",
        price: {base: "499", monthly: "25"},
        description:"Lörem ipsum astronas preniriröv, om gytt. Frågestrejka nyl av göra",
        features: [
            "Description of the features",
            "Description of the features",
            "Description of the features"
        ]
    },
    {
        title:"CUSTOM",
        premium: true,
        popular: false,
        img:"/img/price-img-3.png",
        price: {base: "799", monthly: "25"},
        description:"Lörem ipsum astronas preniriröv, om gytt. Frågestrejka nyl av göra",
        features: [
            "Description of the features",
            "Description of the features",
            "Description of the features"
        ]
    },
]

export const Pricing = () => {
  return (
    <section id='precios' className='bg-black pt-16 pb-20'>
        <h2 className='text-center'>Pricing</h2>
        <div className='flex flex-col gap-24 items-center mt-20 lg:gap-[2%] lg:flex-row lg:justify-center'>
            {
                cards.map((card, index) => (
                    <PriceCard key={index} {...card} />
                ))
            }
        </div>
    </section>
  )
}
