import type { Metadata } from 'next'
import Image from 'next/image';
import { worksans } from '../components/ui/fonts';
import clsx from 'clsx';
import MotionDivAddons from './MotionDivAddons';
import Link from 'next/link';
import { addonsData } from '../data/addonsData';
import { truncateText } from '../utils/truncateText';

export const metadata: Metadata = {
    title: 'Attivanse | Addons & Integrations',
    description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas.Expertos en SEO, creamos soluciones digitales personalizadas para impulsar tu visibilidad online, aumentar la productividad y fortalecer tu presencia en el mercado. ¡Descubre cómo optimizar tu presencia digital con nosotros!",
    keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios"
}


export default function Addons() {
    
    //*agregar price
    const cards = addonsData;

	return (
            <>
                <div className="container px-5 py-24 mx-auto">
                    
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="text-white">Escale su Web con Nuestros <strong className="text-[#FEBD29]">Addons Premium</strong></h1>
                        <p className="max-w-[705px] mt-3 text-xl">Agregue cualquiera de nuestros complementos exclusivos a su web cuando lo desee! Nuestras paginas web son completamente escalables</p>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center items-center">

                    {
                            cards.map((card, i) => (
                                    <MotionDivAddons
                                        key={i + card.title}
                                        className="p-4 w-full 530:w-1/2 lg:w-1/3 max-w-[600px]"
                                        animate="visible"
                                        viewport={{ once: true }}
                                        custom={i}
                                        initial="hidden"
                                    >
                                        <div className='cursor-pointer active:cursor-grab border-[1px] border-coldgray rounded-lg'>
                                            <Link href={`/addons-integrations/${card.slug}`}>
                                            <div className="">
                                                <Image
                                                    className="rounded-tl-lg rounded-tr-lg"
                                                    src={card.image}
                                                    alt="hero"
                                                    width={600}
                                                    height={280}
                                                />
                                            </div>
                                                <div className='p-6'>
                                                <h5 className="text-lg font-bold mt-[5px]">
                                                    {card.title}
                                                </h5>
                                                <p className={clsx(worksans.className, "leading-relaxed text-base text-lightwhite")}>
                                                    {truncateText(card.description, 140)}
                                                </p>
                                            </div>
                                            </Link>
                                        </div>
                                    </MotionDivAddons>
                            ))
                        }
                    </div>
                </div>
            </>
	);
}