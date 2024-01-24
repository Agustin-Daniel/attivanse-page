import { Navbar } from './components/ui/Navbar'
import './globals.css'
import { manrope } from './components/ui/fonts'
import { Footer } from './components/ui/Footer'
import { WhatsAppButton } from './components/ui/atoms/WhatsAppButton'
import { ScrollProvider } from "@/app/context/ScrollContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-white scroll-smooth'>
      <head>
        <meta name="theme-color" content="#2970EC" />
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
