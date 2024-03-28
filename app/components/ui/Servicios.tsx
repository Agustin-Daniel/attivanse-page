"use server"
import {  PenSVG, CodeSVG, AddonsSVG, MegaphoneSVG, CheckSVG  } from "./icons"
import { ServiciosCard } from "./ServiciosCard";
// import { useRef } from "react";

export const Servicios = () => {

  const cards = [
    {
      icon: <PenSVG />,
      title: "Diseño",
      description: "Nuestros diseños no solo se tratan de verse bien, sino de generar resultados comerciales para tu empresa! Analizamos a fondo la competencia para asegurarnos de que tu diseño se destaque, sea innnovador y unico!",
      list: [
        "Diseñador experto dedicado",
        "Diseño acorde a su marca",
        "Estudio de la competencia",
        "Revisiones sin compromiso",
      ],
      revert: false,
      img: "/img/service-design.webp",
    },
    {
      icon: <CodeSVG />,
      title: "Tecnologia",
      description: "Vamos más allá de lo superficial. Nos especializamos en Next.js para realizar sitios web ultrarrápidos y para proteger tu presencia en línea. Todas nuestras webs son seguras, eficientes e incomparables!",
      list: [
        "Sitio web ultra rápido",
        "Protección contra ataques de DDOS",
        "Filtros anti-spam",
        "Seguridad de CloudFlare",
      ],
      revert: true,
      img: "/img/service-technology.webp",
    },
    {
      icon: <AddonsSVG />,
      title: "Agregados",
      description: "Tu sitio web puede ser mucho más que una simple tarjeta de presentación. Podemos agregarle funcionalidades totalmente escalables que le permitiran a su negocio crecer y expandirse cuando lo desee!.",
      list: [
        "Obten una web mas inclusiva con ADA",
        "Posicionamiento web internacional con SEO Hyperlocal",
        "Se mas eficiente con Chat-Bot online",
        "Diseño de logos y branding",
      ],
      revert: false,
      img: "/img/service-addons.webp",
    },
    {
      icon: <MegaphoneSVG />,
      title: "Marketing",
      description: "Nuestro equipo de marketing digital puede ayudarlo a generar más tráfico, más clientes potenciales y más ventas. Nuestros servicios de marketing digital incluyen SEO, PPC, redes sociales y más!",
      list: [
        "Potentes herramientas de publicación productos y servicios",
        "Configuraciones avanzadas de SEO para una mejor clasificación",
        "Opción social optimizada para Facebook y Google",
        "Formularios de contacto, CTA y más",
      ],
      revert: true,
      img: "/img/service-marketing.webp",
    }
  ]

  return (
    <section id="servicios" className="flex flex-col bg-black lg:items-center">
        <h2 className="text-center mt-20">Desarrollo web premium para fabricas</h2>
        {cards.map((card, index) => (
          <ServiciosCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            list={card.list}
            revert={card.revert}
            img={card.img}
          />
        ))}
    </section>
  )
}
