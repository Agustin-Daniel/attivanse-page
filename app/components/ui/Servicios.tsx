import Image from "next/image"
import {PenSVG, CodeSVG, AddonsSVG, MegaphoneSVG, CheckSVG} from "./icons"

export const Servicios = () => {
  return (
    <section id="servicios" className="flex flex-col bg-black lg:items-center">
        <h2 className="text-center mt-20">Servicios</h2>
        <div className="bg-black w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"><div className="service-icon"><PenSVG /></div><h3>Diseño</h3></div>
              <Image quality={100} className="w-[301px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[495px] justify-self-end" src="/img/design.png" width={495} height={487} alt="design image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Diseñador experto dedicado</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Diseño acorde a su marca</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Estudio de la competencia</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Description of the features</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-gray w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] bg-gray lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:w-[378px] lg:justify-self-end"><div className="service-icon"><CodeSVG /></div><h3>Tecnologia</h3></div>
              <Image quality={100} className="w-[368px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/technology.png" width={611} height={487} alt="technology image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Sitio web ultra rápido</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Protección contra ataques de DDOS</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Filtros anti-spam</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Seguridad de CloudFlare</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-black w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"><div className="service-icon"><AddonsSVG /></div><h3>Agregados</h3></div>
              <Image quality={100} className="w-[297px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[487px] justify-self-end" src="/img/addons.png" width={504} height={519} alt="addons image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />ADA (Web inclusiva)</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Chat bot online</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />SEO Hyperlocal (por paises)</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Calendly</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="bg-gray w-full flex justify-center">
          <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] bg-gray lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
              <div className="lg:w-[378px] flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:justify-self-end"><div className="service-icon"><MegaphoneSVG /></div><h3>Marketing</h3></div>
              <Image quality={100} className="w-[355px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end" src="/img/marketing.png" width={561} height={489} alt="marketing image" />
              <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
                <p className="mb-10">Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.</p>
                <ul className="flex flex-col gap-4 w-fit">
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Lorem ipsum</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Lorem ipsum</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Lorem ipsum</li>
                  <li className="flex gap-5"><CheckSVG height={24} width={24} />Lorem ipsum</li>
                </ul>
              </div>
          </div>
        </div>
    </section>
  )
}
