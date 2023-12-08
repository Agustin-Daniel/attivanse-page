"use client"
import Image from "next/image";
import { worksans } from "./fonts";
import clsx from 'clsx';
import { useHandleResize } from "@/hooks/useHandleResize";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const Benefecios = () => {


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

        // {
        //     title: "Cierre ventas en el extranjero",
        //     description: "Cierre ventas en el exterior siendo visible en sus buscadores.",
        //     image: "image"
        // },
        // {
        //     title: "Agilice las ventas de su empresa",
        //     description: "Agilice las ventas de sus productos con un sistema de venta personalizado.",
        //     image: "image"
        // },
        // {
        //     title: "Aumente la productividad de su empresa",
        //     description: "Emita presupuestos de manera automática.",
        //     image: "image"
        // },
        // {
        //     title: "Impida ataques cibernéticos a su empresa",
        //     description: "Impida ataques de DOSS y de haking con nuestra arquitectura.",
        //     image: "image"
        // },
        // {
        //     title: "Retenga a sus clientes potenciales",
        //     description: "Retenga a los clientes potenciales con la rapidez de una SPA y la tecnología de Next.js.",
        //     image: "image"
        // }
    ]

    const key = useHandleResize();

	return (
		<section className="body-font bg-black">
			<div className="w-[90%] max-w-[1450px] pb-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h2 className="mb-2 lg:lg:text-5xl font-bold">
						<strong className="text-[#FEBD29]">Beneficios</strong> de trabajar con nosotros
					</h2>
					<p className="lg:w-1/2 w-full leading-relaxed">
                        Su empresa se beneficiará de nuestra experiencia en el desarrollo de software
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
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
                                    <div className="px-4">
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
				</div>
			</div>
		</section>
	);
};
