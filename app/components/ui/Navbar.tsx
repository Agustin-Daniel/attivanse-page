'use client'
import Image from 'next/image'
import { BurgerSVG } from './icons';
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";


export const Navbar = () => {

    const [burger, setBurger] = useState(false)

	const animationPropsBurger = {
		initial: { opacity: 0, x:428 },
		animate: { opacity: 1, x:0 },
		exit: { opacity: 0, x:428 },
		transition: { duration: 0.3 }
	  } 

  return (
    <nav className='z-10 w-full max-w-[1920px] top-10 px-6 absolute flex items-center justify-between md:px-12 lg:pl-28 lg:pr-40 lg:top-16'>
        <Image className='h-[46px] w-[240px]' width={240} height={46} alt='logo-attivanse' src="/img/attivanse-logo.png" />
        <button className='focus:outline-none lg:hidden'>
        <div onClick={() => setBurger(true)}><BurgerSVG /></div>
        </button>
        <ul className='hidden gap-10 text-lg font-medium lg:flex'>
            <li><a className='hover:underline' href="#servicios">Servicios</a></li>
            <li><a className='hover:underline' href="#metodologia">Metodología</a></li>
            <li><a className='hover:underline' href="#precios">Precios</a></li>
            <li><a className='hover:underline' href="#contacto">Contacto</a></li>
        </ul>

        {/* Mobile */}
        <AnimatePresence>
        {
            burger &&
                <motion.div {...animationPropsBurger} className='flex flex-col gap-10 bg-gray absolute pt-10 px-6 top-[-40px] left-0 h-[100vh] w-full md:px-12 lg:hidden'>
                <div className='flex justify-between items-center'>
                    <Image className='h-[46px] w-[240px]' width={240} height={46} alt='logo-attivanse' src="/img/attivanse-logo.png" />
                    <div onClick={() => setBurger(false)}><BurgerSVG /></div>
                </div>
                <ul className='flex flex-col text-lg font-medium'>
                    <li className='border-b-[1px] border-blue hover:text-blue'><a className='w-full block pt-4 pb-3' href="#servicios">Servicios</a></li>
                    <li className='border-b-[1px] border-blue hover:text-blue'><a className='w-full block pt-4 pb-3' href="#metodologia">Metodología</a></li>
                    <li className='border-b-[1px] border-blue hover:text-blue'><a className='w-full block pt-4 pb-3' href="#precios">Precios</a></li>
                    <li className='border-b-[1px] border-blue hover:text-blue'><a className='w-full block pt-4 pb-3' href="#contacto">Contacto</a></li>
                </ul>
                </motion.div>
        }
            </AnimatePresence>
    </nav>
  )
}
