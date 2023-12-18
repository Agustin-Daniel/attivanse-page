
import type { Metadata } from 'next'
import Image from 'next/image';
import { worksans } from '../components/ui/fonts';
import clsx from 'clsx';

export const metadata: Metadata = {
    title: 'Attivanse | Addons & Integrations',
    description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas.Expertos en SEO, creamos soluciones digitales personalizadas para impulsar tu visibilidad online, aumentar la productividad y fortalecer tu presencia en el mercado. ¡Descubre cómo optimizar tu presencia digital con nosotros!",
    keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios"
}


export default function Addons() {
    
    
    
    const cards = [
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-smart.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-branding.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-clickmaps.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-page-content.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-blog-assist.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-ada-protect.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-custom-forms.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-hyperlocal-website.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-rrs-mailchimp.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-make-reservations.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-social-management.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-instagram.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-facebook.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-reviews.png"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "/img/addons/addon-plus.png"
        },
    ]



	return (
            <>
                <div className="container px-5 py-24 mx-auto">
                    
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center items-center">

                    {
                            cards.map((card, index) => (
                                    <div key={index} className="p-1 md:p-4 w-1/2 lg:w-1/3 max-w-[600px]">
                                        <div className='cursor-pointer active:cursor-grab border-[1px] border-coldgray rounded-lg'>
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
                                                {card.description}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </>
	);
}