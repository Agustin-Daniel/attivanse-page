import Image from "next/image"
import {PenSVG, CodeSVG, AddonsSVG, MegaphoneSVG, CheckSVG} from "./icons"

export const Servicios = () => {
  return (
    <section className="flex flex-col bg-gray">
        <h2 className="text-center mt-20 mb-8">Servicios</h2>
        <div className="flex items-center flex-col gap-1">
            <div className="flex gap-1 items-center"><div className="service-icon"><PenSVG /></div><h3>Diseño</h3></div>
            <Image src="/img/design.png" width={495} height={487} alt="design image" />
            <div className="flex flex-col gap-3">
              <p className="w-[301px]">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
              <ul className="">
                <li className="flex gap-1"><CheckSVG height={24} width={24} />Diseñador experto dedicado</li>
                <li className="flex gap-1"><CheckSVG height={24} width={24} />Diseño acorde a su marca</li>
                <li className="flex gap-1"><CheckSVG height={24} width={24} />Estudio de la competencia</li>
                <li className="flex gap-1"><CheckSVG height={24} width={24} />Description of the features</li>
              </ul>
            </div>
        </div>
        <div>
            <div><div className="service-icon"><CodeSVG /></div><h3>Tecnologia</h3></div>
            <Image src="/img/technology.png" width={611} height={487} alt="technology image" />
            <p>Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
            <ul>
              <li><CheckSVG height={24} width={24} />Sitio web ultra rápido</li>
              <li><CheckSVG height={24} width={24} />Protección contra ataques de DDOS</li>
              <li><CheckSVG height={24} width={24} />Filtros anti-spam</li>
              <li><CheckSVG height={24} width={24} />Seguridad de CloudFlare</li>
            </ul>
        </div>
        <div>
            <div><div className="service-icon"><AddonsSVG /></div><h3>Agregados</h3></div>
            <Image src="/img/addons.png" width={504} height={519} alt="addons image" />
            <p>Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
            <ul>
              <li><CheckSVG height={24} width={24} />ADA (Web inclusiva)</li>
              <li><CheckSVG height={24} width={24} />Chat bot online</li>
              <li><CheckSVG height={24} width={24} />SEO Hyperlocal (por paises)</li>
              <li><CheckSVG height={24} width={24} />Calendly</li>
            </ul>
        </div>
        <div>
            <div><div className="service-icon"><MegaphoneSVG /></div><h3>Marketing</h3></div>
            <Image src="/img/marketing.png" width={561} height={489} alt="marketing image" />
            <p>Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
            <ul>
              <li><CheckSVG height={24} width={24} />Lorem ipsum</li>
              <li><CheckSVG height={24} width={24} />Lorem ipsum</li>
              <li><CheckSVG height={24} width={24} />Lorem ipsum</li>
              <li><CheckSVG height={24} width={24} />Lorem ipsum</li>
            </ul>
        </div>
    </section>
  )
}
