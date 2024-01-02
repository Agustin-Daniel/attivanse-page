"use server"
import { PriceCard } from './PriceCard'
import MotionDiv from './motion/MotionDiv'

const cards = [
    {
        title:"STARTER",
        premium: false,
        popular: false,
        img:"/img/price-img-1.png",
        price: {base: "500", monthly: "129"},
        description:"Sitio web escalable, accesible y rapido lanzamiento.",
        features: [
            "Rapido lanzamiento",
            "Personalizado con tu marca",
            "Formulario personalizado"
        ]
    },
    {
        title:"SEMI-CUSTOM",
        premium: false,
        popular: true,
        img:"/img/price-img-2.png",
        price: {base: "1000", monthly: "129"},
        description:"Un resultado final personalizado un precio más bajo.",
        features: [
            "Posicionamiento web internacional",
            "Página de inicio personalizada",
            "Diseñador senior dedicado",
        ]
    },
    {
        title:"CUSTOM",
        premium: true,
        popular: false,
        img:"/img/price-img-3.png",
        price: {base: "2500", monthly: "129"},
        description:"Hecho desde cero para combinar perfectamente con su marca.",
        features: [
            "Página de inicio a medida",
            "10 páginas interiores personalizadas",
            "Diseñador senior dedicado"
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
        <h2 className='text-center'>Precios</h2>
        <div className='flex flex-col flex-wrap gap-24 items-center mt-20 lg:gap-[2%] lg:flex-row lg:justify-center'>
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
