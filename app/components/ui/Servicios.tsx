"use server"
import {  PenSVG, CodeSVG, AddonsSVG, MegaphoneSVG, CheckSVG  } from "./icons"
import { ServiciosCard } from "./ServiciosCard";
// import { useRef } from "react";

export const Servicios = () => {

  const cards = [
    {
      icon: <PenSVG />,
      title: "Diseño",
      description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.",
      list: [
        "Diseñador experto dedicado",
        "Diseño acorde a su marca",
        "Estudio de la competencia",
        "Description of the features",
      ],
      revert: false,
      img: "/img/service-design.png",
    },
    {
      icon: <CodeSVG />,
      title: "Tecnologia",
      description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.",
      list: [
        "Sitio web ultra rápido",
        "Protección contra ataques de DDOS",
        "Filtros anti-spam",
        "Seguridad de CloudFlare",
      ],
      revert: true,
      img: "/img/service-technology.png",
    },
    {
      icon: <AddonsSVG />,
      title: "Agregados",
      description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.",
      list: [
        "ADA (Web inclusiva)",
        "Chat bot online",
        "SEO Hyperlocal (por paises)",
        "Calendly",
      ],
      revert: false,
      img: "/img/service-addons.png",
    },
    {
      icon: <MegaphoneSVG />,
      title: "Marketing",
      description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk.",
      list: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
      revert: true,
      img: "/img/service-marketing.png",
    }
  ]

  return (
    <section id="servicios" className="flex flex-col bg-black lg:items-center">
        <h2 className="text-center mt-20">Servicios</h2>
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
