"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useHandleResize } from "@/hooks/useHandleResize";
import MotionDiv from "../motion/MotionDiv";

export const SwiperTools = () => {

    const key = useHandleResize();

    const cards = [
        {
            title: "Babel",
            image: "/img/tools/babel-img.png"
        },
        {
            title: "Cloudflare",
            image: "/img/tools/cloudflare-img.png"
        },
        {
            title: "Git",
            image: "/img/tools/git-img.png"
        },
        {
            title: "Nextjs",
            image: "/img/tools/next-img.png"
        },
        {
            title: "Reactjs",
            image: "/img/tools/react-img.png"
        },
        {
            title: "Typescript",
            image: "/img/tools/typescript-img.png"
        },
        {
            title: "Webpack",
            image: "/img/tools/webpack-img.png"
        },
    ]

    const variants = {
        initial: { opacity: 0 },
        animation: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 1,
          },
        },
    };

  return (
    <MotionDiv
        className="flex flex-wrap justify-around -m-4 gap-20"
        variants={variants}
        whileInView="animation"
        initial="initial"
        viewport={{ once: true }}
    >
    <Swiper
        key={key}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        speed={2000}
        freeMode={true}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
          }}
        >
        {
            cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col items-center cursor-pointer active:cursor-grab">
                        <Image className="w-[100px] lg:w-[148px]"  width={148} height={148} src={card.image} alt={`${card.title}-icon`} />
                        <h3 className="mt-1 lg:text-base">{card.title}</h3>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
    </MotionDiv>
  )
}
