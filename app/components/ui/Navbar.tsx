'use client'
import Image from 'next/image'
import { BurgerSVG } from './icons';
import { useContext, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollContext } from '@/app/context/ScrollContext';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';


    const animationPropsBurger = {
        initial: { opacity: 0, x:428 },
        animate: { opacity: 1, x:0 },
        exit: { opacity: 0, x:428 },
        transition: { duration: 0.3 }
      } 

      const links = [
        { href: "/addons-integrations", text: "Addons", link: true },
        { href: "/#metodologia", text: "Metodología", link: false },
        { href: "/#precios", text: "Precios", link: false },
        { href: "/#contacto", text: "Contacto", link: false },
      ];

export const Navbar = () => {

    const pathname = usePathname();

    const scrollPosition = useContext(ScrollContext);

    const [burger, setBurger] = useState(false)

    const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <nav className={cn(
        'z-50 w-full max-w-[1920px] top-10 px-6 absolute flex items-center justify-between md:px-12 lg:pl-28 lg:pr-40 lg:top-16',
        isTablet && scrollPosition > 485 && 'fixed top-0 py-10 bg-black'
    )}>
        <Link href="/"><Image className='lg:h-[46px] lg:w-[240px]'  width={264} height={51} alt='logo-attivanse' src="/img/attivanse-logo.png" /></Link>
        <button className='focus:outline-none lg:hidden'>
        <div onClick={() => setBurger(true)}><BurgerSVG /></div>
        </button>
        <ul className='hidden gap-10 text-lg font-medium lg:flex'>
            {
            pathname === '/' ?
            links.map((link, index) => (
                !link.link
                ?
                <li key={index}>
                    <a className='hover:underline' href={link.href}>{link.text}</a>
                </li>
                :
                <li key={index}>
                    <Link className='hover:underline' href={link.href}>{link.text}</Link>
                </li>
            ))
            :
            links.map((link, index) => (
                <li key={index}>
                    <Link className='hover:underline' href={link.href}>{link.text}</Link>
                </li>
            ))
            }
            </ul>
        {/* Mobile */}
        <AnimatePresence>
        {
            burger &&
                <motion.div {...animationPropsBurger} className='flex fixed flex-col gap-10 bg-gray pt-10 px-6 top-0 left-0 h-[100vh] w-full md:px-12 lg:hidden'>
                <div className='flex justify-between items-center'>
                    <Image className='cursor-pointer lg:h-[46px] lg:w-[240px]'  width={264} height={51} alt='logo-attivanse' src="/img/attivanse-logo.png" />
                    <div className='cursor-pointer' onClick={() => setBurger(false)}><BurgerSVG /></div>
                </div>
                <ul className='flex flex-col text-lg font-medium'>
                {
                    pathname === '/' ?
                    links.map((link, index) => (
                        !link.link
                        ?
                        <li key={index} onClick={() => setBurger(false)} className='border-b-[1px] border-blue hover:text-blue'>
                            <a className='w-full block pt-4 pb-3' href={link.href}>{link.text}</a>
                        </li>
                        :
                        <li key={index} onClick={() => setBurger(false)} className='border-b-[1px] border-blue hover:text-blue'>
                            <Link className='w-full block pt-4 pb-3' href={link.href}>{link.text}</Link>
                        </li>
                    ))
                    :
                    links.map((link, index) => (
                        <li key={index} onClick={() => setBurger(false)} className='border-b-[1px] border-blue hover:text-blue'>
                            <Link className='w-full block pt-4 pb-3' href={link.href}>{link.text}</Link>
                        </li>
                    ))
                }
                </ul>
                </motion.div>
        }
        </AnimatePresence>
    </nav>
  )
}
