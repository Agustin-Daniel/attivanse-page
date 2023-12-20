"use server"
import Image from "next/image"
import {PenSVG, CodeSVG, AddonsSVG, MegaphoneSVG, CheckSVG} from "./icons"
import Motionli from "./motion/MotionLi";
import MotionP from "./motion/MotionP";
// import { useRef } from "react";

export const Servicios = () => {


  // const scrollRef = useRef(null)


  const variantsP = {
    initial: { opacity: 0, y: -15 },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };


  return (
    <section id="servicios" className="flex flex-col bg-black lg:items-center">
        <h2 className="text-center mt-20">Servicios</h2>
        <div className="bg-black w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
            {/* convertir en div para motion */}
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"><div className="service-icon"><PenSVG /></div><h3>Diseño</h3></div>
              {/* encerrar en div para motion */}
              <Image  className="w-[368px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/service-design.png" width={606} height={502} alt="design image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px]">
                <MotionP
                  className="mb-10"
                  variants={variantsP}
                  whileInView="animation"
                  initial="initial"
                  viewport={{ once: true }}
                >
                  Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.
                </MotionP>
                <ul className="flex flex-col gap-4 w-fit">
                {['Diseñador experto dedicado', 'Diseño acorde a su marca', 'Estudio de la competencia', 'Description of the features'].map((text, i) => (
                  <Motionli
                    className="flex gap-5"
                    key={i + text}
                    whileInView="animation"
                    viewport={{ once: true }}
                    custom={i}
                    initial="initial"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </Motionli>
                ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-lightblack w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] bg-lightblack lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:w-[378px] lg:justify-self-end"><div className="service-icon"><CodeSVG /></div><h3>Tecnologia</h3></div>
              <Image  className="w-[368px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/service-technology.png" width={606} height={502} alt="technology image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
                <MotionP
                  className="mb-10"
                  variants={variantsP}
                  whileInView="animation"
                  initial="initial"
                  viewport={{ once: true }}
                >
                  Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.
                </MotionP>
                <ul className="flex flex-col gap-4 w-fit">
                {['Sitio web ultra rápido', 'Protección contra ataques de DDOS', 'Filtros anti-spam', 'Seguridad de CloudFlare'].map((text, i) => (
                  <Motionli 
                    className="flex gap-5"
                    key={i + text}
                    whileInView="animation"
                    viewport={{ once: true }}
                    custom={i}
                    initial="initial"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </Motionli>
                ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-black w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"><div className="service-icon"><AddonsSVG /></div><h3>Agregados</h3></div>
              <Image  className="w-[297px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[487px] justify-self-end" src="/img/service-addons.png" width={606} height={502} alt="addons image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px]">
                <MotionP
                  className="mb-10"
                  variants={variantsP}
                  whileInView="animation"
                  initial="initial"
                  viewport={{ once: true }}
                >
                  Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.
                </MotionP>
                <ul className="flex flex-col gap-4 w-fit">
                {['ADA (Web inclusiva)', 'Chat bot online', 'SEO Hyperlocal (por paises)', 'Calendly'].map((text, i) => (
                  <Motionli 
                    className="flex gap-5"
                    key={i + text}
                    whileInView="animation"
                    viewport={{ once: true }}
                    custom={i}
                    initial="initial"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </Motionli>
                ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-lightblack w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] bg-lightblack lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="lg:w-[378px] flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:justify-self-end"><div className="service-icon"><MegaphoneSVG /></div><h3>Marketing</h3></div>
              <Image  className="w-[355px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/service-marketing.png" width={606} height={502} alt="marketing image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
                <MotionP
                  className="mb-10"
                  variants={variantsP}
                  whileInView="animation"
                  initial="initial"
                  viewport={{ once: true }}
                >
                  Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.
                </MotionP>
                <ul className="flex flex-col gap-4 w-fit">
                {['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum',].map((text, i) => (
                  <Motionli
                    className="flex gap-5"
                    key={i + text}
                    whileInView="animation"
                    viewport={{ once: true }}
                    custom={i}
                    initial="initial"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </Motionli>
                ))}
                </ul>
              </div>
          </div>
        </div>
    </section>
  )
}
