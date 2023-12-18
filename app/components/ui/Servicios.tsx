"use client"
import Image from "next/image"
import {PenSVG, CodeSVG, AddonsSVG, MegaphoneSVG, CheckSVG} from "./icons"
import { motion } from 'framer-motion';

export const Servicios = () => {


  const variants = {
    hidden: { opacity: 0, y: -15 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // incrementa el delay para cada elemento
        duration: 0.5,
      },
    }),
  };




  return (
    <section id="servicios" className="flex flex-col bg-black lg:items-center">
        <h2 className="text-center mt-20">Servicios</h2>
        <div className="bg-black w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"><div className="service-icon"><PenSVG /></div><h3>Diseño</h3></div>
              <Image quality={100} className="w-[301px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[495px] justify-self-end" src="/img/design.png" width={495} height={487} alt="design image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                {['Diseñador experto dedicado', 'Diseño acorde a su marca', 'Estudio de la competencia', 'Description of the features'].map((text, i) => (
                  <motion.li 
                    className="flex gap-5"
                    key={i + text}
                    variants={variants}
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    initial="hidden"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </motion.li>
                ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-gray w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] bg-gray lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:w-[378px] lg:justify-self-end"><div className="service-icon"><CodeSVG /></div><h3>Tecnologia</h3></div>
              <Image quality={100} className="w-[368px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/technology.png" width={611} height={487} alt="technology image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                {['Sitio web ultra rápido', 'Protección contra ataques de DDOS', 'Filtros anti-spam', 'Seguridad de CloudFlare'].map((text, i) => (
                  <motion.li 
                    className="flex gap-5"
                    key={i + text}
                    variants={variants}
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    initial="hidden"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </motion.li>
                ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-black w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"><div className="service-icon"><AddonsSVG /></div><h3>Agregados</h3></div>
              <Image quality={100} className="w-[297px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[487px] justify-self-end" src="/img/addons.png" width={504} height={519} alt="addons image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                {['ADA (Web inclusiva)', 'Chat bot online', 'SEO Hyperlocal (por paises)', 'Calendly'].map((text, i) => (
                  <motion.li 
                    className="flex gap-5"
                    key={i + text}
                    variants={variants}
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    initial="hidden"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </motion.li>
                ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-gray w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] bg-gray lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="lg:w-[378px] flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:justify-self-end"><div className="service-icon"><MegaphoneSVG /></div><h3>Marketing</h3></div>
              <Image quality={100} className="w-[355px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/marketing.png" width={561} height={489} alt="marketing image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                {['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum',].map((text, i) => (
                  <motion.li 
                    className="flex gap-5"
                    key={i + text}
                    variants={variants}
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    initial="hidden"
                  >
                    <CheckSVG height={24} width={24} />{text}
                  </motion.li>
                ))}
                </ul>
              </div>
          </div>
        </div>
    </section>
  )
}
