import { StarFill } from '@/app/components/ui/atoms/stars/StarFill';
import { StarOutline } from '@/app/components/ui/atoms/stars/StarOutline';
import type { Metadata } from 'next'
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Attivanse | Addons & Integrations',
    description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas.Expertos en SEO, creamos soluciones digitales personalizadas para impulsar tu visibilidad online, aumentar la productividad y fortalecer tu presencia en el mercado. ¡Descubre cómo optimizar tu presencia digital con nosotros!",
    keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios"
}

export default function Page({ params }: { params: { slug: string } }) {
    
    //*agregar price


	return (
      <section className="overflow-hidden">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
              <h2 className="text-sm tracking-widest text-[#FEBD29]">PREMIUM ADDON</h2>
              <h1 className="">Smart Assist</h1>
          <div className="mx-auto flex flex-col gap-9 mt-9 items-center">
            <Image
              className=''
              src="/img/addons/addon-smart.png"
              alt='XD'
              width={600}
              height={280}
            />
            <div className="w-full max-w-[600px]">
            <h1 className="text-2xl font-medium mb-1">¿Cuales son los beneficios?</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <span className="ml-3">23 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage.</p>
              <section className="text-gray-600 body-font">
              <div className="py-9 mx-auto flex flex-wrap">
                <div className="flex relative pt-10 pb-20 items-center">
                  <div className="flex-grow flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-12 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h3 className="font-medium title-font text-gray-900 mb-1 text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ea6ff] to-[#47b9fb]">Shooting Stars</h3>
                      <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-20 items-center">
                  <div className="flex-grow flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-12 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h3 className="font-medium title-font text-gray-900 mb-1 text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ea6ff] to-[#47b9fb]">The Catalyzer</h3>
                      <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-20 items-center">
                  <div className="flex-grow flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-12 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h3 className="font-medium title-font text-gray-900 mb-1 text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ea6ff] to-[#47b9fb]">The 400 Blows</h3>
                      <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex mt-6 items-center border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button className="flex ml-auto text-white bg-blue py-2 px-6 rounded hover:bg-white hover:text-black">Lo quiero!</button>
                <button className="flex ml-4 text-white border-[1px] py-2 px-6 rounded hover:bg-white hover:text-black">Hablemos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
	);
}