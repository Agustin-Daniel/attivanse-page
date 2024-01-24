"use server"
import clsx from 'clsx'
import { worksans } from './fonts';
import MotionDiv from './motion/MotionDiv';

const variants = {
  initial: { opacity: 0 },
  animation: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
};


export const Contact = () => {
  return (
    <section id='contacto' className="bg-lightblack py-16 bg-contact-mobile bg-right bg-no-repeat text-center flex flex-col items-center lg:py-28 lg:bg-contact-deskop">
      <MotionDiv
        className='text-center flex flex-col items-center'
        variants={variants}
        whileInView="animation"
        initial="initial"
        viewport={{ once: true }}
      >
        <p className="mb-4 font-normal lg:mb-3 lg:font-medium">Comencemos</p>
        <h4 className="mb-8 text-lg leading-normal lg:mb-[19px] lg:text-[38px]">Contanos sobre tu proyecto</h4>
        <p className={clsx(worksans.className, "mb-10 max-w-[344px] leading-6 lg:mb-12 lg:text-base lg:max-w-[386px]")}>
          {/* #1 en transformación digital para internacionalización de empresas */}
          Nuestro unico objetivo es ayudarlo a crecer y posicionarse globalmente
        </p>
        <div className='flex justify-center gap-2 sm:gap-4 lg:gap-8'>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=541144948334&text=Hola%20Attivanse!%20😃%20"><button className="btn-primary">Hablemos!</button></a>
          <a href="mailto:hello@attivanse.com?subject=CONSULTA%20WEB%20😃"><button className="btn-secondary">Email</button></a>
        </div>
      </MotionDiv>
    </section>
  )
}
