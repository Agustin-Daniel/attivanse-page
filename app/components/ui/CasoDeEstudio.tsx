"use server"
import clsx from "clsx"
import Image from "next/image"
import { worksans } from "./fonts"
import { SemiCustomDesing } from "./atoms/web-labels/SemiCustomDesing";
import { PageContentWriting } from "./atoms/web-labels/PageContentWriting";
import MotionDiv from "./motion/MotionDiv";
import { HyperlocalWebsite } from "./atoms/web-labels/HyperlocalWebsite";

const variantsText = {
	initial: { opacity: 0, x: -30 },
	animation: {
	  opacity: 1,
	  x: 0,
	  transition: {
		delay: 0.2,
		duration: 0.8,
	  },
	},
};

const variantsImg = {
	initial: { opacity: 0, x: 30 },
	animation: {
	  opacity: 1,
    x: 0,
	  transition: {
		delay: 0.6,
		duration: 0.8,
	  },
	},
};

export const CasoDeEstudio = () => {
  return (
    <div className="bg-lightblack px-6 py-12 lg:pl-32 lg:pr-16 lg:pt-16 lg:pb-24">
      <h2 className="mb-12 lg:mb-20 text-center">Caso de estudio</h2>
      <div>
        <div className="flex flex-col max-w-[380px] gap-10 m-auto lg:flex-row lg:justify-between lg:gap-0 lg:max-w-[1100px]">
          <MotionDiv
            className="flex flex-col text-left lg:w-[407px]"
            variants={variantsText}
            whileInView="animation"
            initial="initial"
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-xl text-center font-semibold lg:mb-1 lg:text-left lg:text-[38px] lg:leading-normal">Ciudad de Messina</h4>
            <div className="mb-5 mt-2 lg:mt-1">
              <p className={clsx(worksans.className, "text-coldgray text-base")}>
              Transformamos una página web de nivel básico hecha con Wordpress en una de primera clase! Comenzamos realizando un diseño moderno e impactante que cumpla con sus necesidades y las de sus clientes potenciales, luego realizamos un profundo análisis SEO internacional, asegurándonos de que la misma pueda posicionarse en el exterior.
              </p>
            </div>
            <a className={clsx(worksans.className, "text-blue underline hover:text-white w-fit")} target="_blank" href="https://ciudaddemessina.com/">Visitar página</a>
          </MotionDiv>
          <MotionDiv
            className=""
            variants={variantsImg}
            whileInView="animation"
            initial="initial"
            viewport={{ once: true }}
          >
            <a target="_blank" className="flex flex-col justify-center align-middle" href="https://ciudaddemessina.com/">            
              <Image className="w-full" src="/img/ciudad-de-messina.png" width={498} height={296} alt="ciudad de messina fabrica de escobillones home pagina web" />
            </a>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
