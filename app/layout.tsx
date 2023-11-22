import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Burger from './components/ui/icons/burger'

const manrope = Manrope({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'Attivanse | Diseño web para Empresas',
  description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas.Expertos en SEO, creamos soluciones digitales personalizadas para impulsar tu visibilidad online, aumentar la productividad y fortalecer tu presencia en el mercado. ¡Descubre cómo optimizar tu presencia digital con nosotros!",
  keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-white'>
      <body className={manrope.className}>

        <nav className='z-10 w-full top-10 px-6 absolute flex items-center justify-between md:pl-28 md:pr-40 md:top-16'>
          <Image className='h-[46px] w-[240px]' width={240} height={46} alt='logo-attivanse' src="/img/attivanse-logo.png" />
          <button className='focus:outline-none md:hidden'>
            <Burger />
          </button>
          <ul className='hidden gap-10 text-lg font-medium md:flex'>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#metodologia">Metodología</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  )
}
