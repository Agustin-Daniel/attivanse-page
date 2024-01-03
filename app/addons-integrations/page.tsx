import type { Metadata } from 'next'
import Image from 'next/image';
import { worksans } from '../components/ui/fonts';
import clsx from 'clsx';
import MotionDivAddons from './MotionDivAddons';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Attivanse | Addons & Integrations',
    description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas.Expertos en SEO, creamos soluciones digitales personalizadas para impulsar tu visibilidad online, aumentar la productividad y fortalecer tu presencia en el mercado. ¡Descubre cómo optimizar tu presencia digital con nosotros!",
    keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios"
}

const cards = [
    {
        title: "Smart Assist",
        description: "Soporte técnico 24/7 para tu sitio web. Nuestro equipo de expertos está listo para ayudarte con cualquier problema que tengas con tu sitio web.",
        image: "/img/addons/addon-smart.png",
        slug: "smart-assist"
    },
    {
        title: "Logo Design & Branding Guide",
        description: "¿Listo para una cambio? Nuestro equipo de diseñadores gráficos creará un branding profesional para su empresa.",
        image: "/img/addons/addon-branding.png",
        slug: "branding-guide"
    },
    {
        title: "Click Maps",
        description: "Lo haremos visible en el mapa de Google para que sus clientes potenciales puedan encontrarlo fácilmente.",
        image: "/img/addons/addon-clickmaps.png",
        slug: "click-maps"
    },
    {
        title: "Page Content Writing",
        description: "Expertos en SEO y Copywriting escribirán el contenido de su sitio web para que pueda obtener más clientes potenciales y ventas.",
        image: "/img/addons/addon-page-content.png",
        slug: "page-content-writing"
    },
    {
        title: "Blog Assist Writing",
        description: "Expertos en SEO y Copywriting escribirán blogs para su sitio web para que pueda obtener más clientes potenciales y ventas.",
        image: "/img/addons/addon-blog-assist.png",
        slug: "blog-assist-writing"
    },
    {
        title: "ADA Protect",
        description: "¡Una empresa inclusiva! Hacemos que su sitio web sea accesible para personas con discapacidades visuales y auditivas.",
        image: "/img/addons/addon-ada-protect.png",
        slug: "ada-protect"
    },
    {
        title: "Custom Forms",
        description: "Agregue formularios personalizados de cualquier tipo a su sitio web para capturar clientes potenciales.",
        image: "/img/addons/addon-custom-forms.png",
        slug: "custom-forms"
    },
    {
        title: "Hyperlocal Website",
        description: "Posiciona tu sitio web en los primeros lugares de idiomas especificos para que tus clientes puedan encontrarte fácilmente.",
        image: "/img/addons/addon-hyperlocal-website.png",
        slug: "hyperlocal-website"
    },
    {
        title: "RSS To Mailchimp",
        description: "Conecte su sitio web con Mailchimp para que pueda enviar correos electrónicos a sus clientes potenciales.",
        image: "/img/addons/addon-rrs-mailchimp.png",
        slug: "rss-to-mailchimp"
    },
    {
        title: "Make Reservations",
        description: "Organiza reuniones directamente desde tu sitio web con Calendly ¡No más correos electrónicos de ida y vuelta!",
        image: "/img/addons/addon-make-reservations.png",
        slug: "make-reservations"
    },
    {
        title: "Social Management",
        description: "Chat en vivo, respuestas automaticas y mucho mas con nuestro servicio de social management.",
        image: "/img/addons/addon-social-management.png",
        slug: "social-management"
    },
    {
        title: "Instagram Feed",
        description: "Muestre su feed de Instagram en su sitio web para que sus clientes puedan ver sus últimas publicaciones.",
        image: "/img/addons/addon-instagram.png",
        slug: "instagram-feed"
    },
    {
        title: "Facebook Live Chat",
        description: "Hable con sus clientes potenciales en tiempo real con nuestro servicio de chat en vivo de Facebook.",
        image: "/img/addons/addon-facebook.png",
        slug: "facebook-live-chat"
    },
    {
        title: "ShowReviews",
        description: "Muestre las reseñas de Google en su sitio web para generar confianza en sus clientes potenciales.",
        image: "/img/addons/addon-reviews.png",
        slug: "showreviews"
    },
    {
        title: "More Addons",
        description: "¿Necesitas algo más? ¡Contáctanos! Podemos hacer cualquier cosa que necesites para tu sitio web empresarial.",
        image: "/img/addons/addon-plus.png",
        slug: "more-addons"
    },
]

export default function Addons() {
    
    //*agregar price


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
                                                    {card.description}
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