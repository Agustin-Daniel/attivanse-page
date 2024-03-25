"use client"
import { useHandleResize } from "@/hooks/useHandleResize";
import Image from "next/image";
import { worksans } from "../fonts";
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const cards = [
    {
        title: "Diseño de Primer Orden",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        // image: "image"
    },
    {
        title: "Posicionamiento Internacional",
        description: "Cierre ventas en el exterior siendo visible en todos los buscadores del mundo.",
        // image: "image"
    },
    {
        title: "Todo es Programable",
        description: "Todo lo que mostramos es apenas un poco de lo que podesmos hacer, el cielo es el limite.",
        // image: "image"
    },
    {
        title: "Seguridad ante Todo",
        description: "Impida ataques de DOSS, spam y de haking con nuestra arquitectura.",
        // image: "image"
    },
    {
        title: "Venda mas Rapido",
        description: "Agilice las ventas de sus productos con un sistema de venta personalizado.",
        // image: "image"
    },
    {
        title: "Presupuestos a un Click",
        description: "Emita presupuestos de manera automática directamente desde su web.",
        // image: "image"
    },
    {
        title: "Blogs Personalizados",
        description: "Genere valor agregado a su marca con un blog totalmente personalizado.",
        // image: "image"
    },
    {
        title: "Sofware a Medida",
        description: "Podemos crear literalmente LO QUE SEA, hasta si lo desea una pagina como Netflix.",
        // image: "image"
    }, 
]


export const SwiperBeneficios = () => {

    const key = useHandleResize();

  return (
        <Swiper
        key={key}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
            delay: 1000,
        }}
        speed={2000}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
            // when window width is >= 1024px
            1600: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        // when window width is >= 768px
            1100: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        750: {
            slidesPerView: 2,
            spaceBetween: 10
            },

        500: {
            slidesPerView: 2,
            spaceBetween: 0
            },
        }}
        >
        {
            cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="px-4 cursor-pointer active:cursor-grab">
                        <div className=" border ring-[1px] ring-coldgray p-6 rounded-lg min-h-[204px]">
                            <div className="">
                                <Image
                                    className="w-[40px]"
                                    src="/img/icons/medal-green.png"
                                    alt="hero"
                                    width={62}
                                    height={89}
                                />
                            </div>
                            <h5 className="text-lg font-bold mt-[5px]">
                                {card.title}
                            </h5>
                            <p className={clsx(worksans.className, "leading-relaxed text-base text-lightwhite")}>
                                {card.description}
                            </p>
                        </div>
                        </div>
                    </SwiperSlide>
            ))
        }
    </Swiper>
  )
}
