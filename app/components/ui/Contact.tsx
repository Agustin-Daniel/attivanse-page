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
        <p className={clsx(worksans.className, "mb-10 max-w-[344px] leading-6 lg:mb-12 lg:text-base lg:max-w-[386px]")}>Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i </p>
        <div className='flex justify-center gap-2 sm:gap-4 lg:gap-8'>
          <button className="btn-primary">Hablemos!</button>
          <button className="btn-secondary">Email</button>
        </div>
      </MotionDiv>
    </section>
  )
}
