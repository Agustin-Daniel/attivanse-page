import { Navbar } from './components/ui/Navbar'
import './globals.css'
import { manrope } from './components/ui/fonts'
import { Footer } from './components/ui/Footer'
import { WhatsAppButton } from './components/ui/atoms/WhatsAppButton'
import { ScrollProvider } from "@/app/context/ScrollContext";
import { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Attivanse | Diseño web para Empresas',
	description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas ¡Descubre cómo optimizar tu presencia digital con nosotros!",
	keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios",
	openGraph: {
	  title: 'Attivanse | Diseño web para Empresas',
	  description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones!",
    url: "/",
    siteName: 'Attivanse',
	  images: [
		{
		  url: "https://attivanse.com/img/attivanse-og.png",
		  width: 600,
		  height: 300,
		  alt: "attivanse-og-image",
		}
	  ],
	  type: 'website',
	},
  
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "image": "https://attivanse.com/img/attivanse-og.png",
    "url": "https://attivanse.com/",
    "logo": "https://attivanse.com/img/attivanse-blue-logo.png",
    "name": "Attivanse",
    "description": "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas",
    "email": "hello@attivanse.com",
    "telephone": "+54-11-44948334",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Argentina",
      "addressCountry": "AR",
      "postalCode": "1886"
    },
  }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-white scroll-smooth'>
      <head>
        <meta name="theme-color" content="#2970EC" />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={manrope.className} style={{maxWidth: "1920px"}}>
        <ScrollProvider>
         <Navbar />
        </ScrollProvider>
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}
