import type { Metadata } from 'next'
import { Navbar } from './components/ui/Navbar'
import './globals.css'
import { manrope } from './components/ui/fonts'
import { Footer } from './components/ui/Footer'



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
    <html lang="en" className='text-white scroll-smooth'>
      <body className={manrope.className} style={{maxWidth: "1920px"}}> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
