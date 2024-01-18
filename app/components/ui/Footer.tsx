import Image from "next/image"
import clsx from 'clsx'
import { worksans } from './fonts'
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className={clsx(worksans.className, "bg-lightblack flex flex-col gap-9 px-6 pt-8 pb-12 lg:px-32 lg:pt-12 lg:pb-9")}>

      <div className="flex flex-col md:flex-row md:justify-between gap-9">
        
        <section className="flex flex-col gap-6">
        <Link href="/">
          <Image src="/img/attivanse-blue-logo.png" alt="attivanse blue icon" width={236} height={45} />
        </Link>
        <p className="text-sm font-normal w-[203px]">
          Tu empresa posicionada internacionalmente
        </p>
        </section>

        <div className="flex flex-col gap-9 md:flex-row">

          <section className="flex flex-col gap-2">
            <h3 className="text-base font-medium">Contáctanos</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal"><a target="_blank" href="https://api.whatsapp.com/send?phone=541144948334">+54-11-44948334</a></li>
              <li className="text-sm font-normal"><a href="mailto:hello@attivanse.com?subject=CONSULTA%20WEB%20😃">hello@attivanse.com</a></li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-base font-medium">Secciones</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal"><Link href="/#servicios">Servicios</Link></li>
              <li className="text-sm font-normal"><Link href="/addons-integrations">Addons</Link></li>
              <li className="text-sm font-normal"><Link href="/#metodologia">Metodología</Link></li>
              <li className="text-sm font-normal"><Link href="/#precios">Precios</Link></li>
              <li className="text-sm font-normal"><Link href="/#contacto">Contacto</Link></li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-base font-medium">Redes Sociales</h3>
            <ul className="flex gap-2">
              <li className="text-sm font-normal"><a href="#"><Image src="/img/icons/lin-icon.png"  alt="linkedin icon" width={32} height={32} /></a></li>
              <li className="text-sm font-normal"><a href="#"><Image src="/img/icons/instagram-icon.png"  alt="instagram icon" width={32} height={32} /></a></li>
            </ul>
          </section>

        </div>

      </div>

        <div>
          <div className="w-full h-[1px] bg-[#44484A]"></div>
          <p className="pt-7 text-sm font-normal text-[#44484A]">Copyright © {new Date().getFullYear()}. All Right Reserverd</p>
        </div>

    </footer>
  )
}
