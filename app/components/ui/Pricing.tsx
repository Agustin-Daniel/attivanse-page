"use server"
import { PriceCard } from './PriceCard'
import MotionDiv from './motion/MotionDiv'

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

const variantsCardLeft = {
	initial: { opacity: 0, y: -20 },
	animation: {
	  opacity: 1,
      y: 0,
	  transition: {
		delay: 0.2,
		duration: 0.8,
	  },
	},
};


const variantsCardRight = {
    initial: { opacity: 0, y: -20 },
	animation: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.8,
        },
	},
};

const variantsCardCenter = {
    initial: { opacity: 0, y: -20 },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
      },
    },
};

export const Pricing = () => {
  return (
    <section id='precios' className='bg-black pt-16 pb-20'>
        <h2 className='text-center'>Pricing</h2>
        <div className='flex flex-col gap-24 items-center mt-20 lg:gap-[2%] lg:flex-row lg:justify-center'>
            {
                cards.map((card, index) => (
                    <MotionDiv
                        key={index + card.title}
                        variants={
                            index === 0 ? variantsCardLeft :
                            index === 1 ? variantsCardCenter :
                            variantsCardRight
                          }
                        whileInView="animation"
                        initial="initial"
                        viewport={{ once: true }}
                    >
                        <PriceCard {...card} />
                    </MotionDiv>
                ))
            }
        </div>
    </section>
  )
}
