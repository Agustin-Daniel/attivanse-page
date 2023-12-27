"use client"
import { useHandleResize } from "@/hooks/useHandleResize";
import Image from "next/image";
import { worksans } from "../fonts";
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const cards = [
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
    },
    {
        title: "Capture clientes potenciales",
        description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
        image: "image"
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
                        <div className=" border ring-[1px] ring-coldgray p-6 rounded-lg">
                            <div className="">
                                <Image
                                    className="w-[80px] h-[64px]"
                                    src="/img/reviews-thin.png"
                                    alt="hero"
                                    width={106}
                                    height={85}
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
