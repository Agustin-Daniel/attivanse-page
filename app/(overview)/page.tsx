import { Servicios } from "../components/ui/Servicios";
import { Header } from "../components/ui/Header";
import { Metodologia } from "../components/ui/MetodologiaSection/Metodologia";
import { CasoDeEstudio } from "../components/ui/CasoDeEstudio";
import { Pricing } from "../components/ui/Pricing";
import { Contact } from "../components/ui/Contact";
import { FAQ } from "../components/ui/FAQ";
import { Benefecios } from "../components/ui/BeneficiosSection/Benefecios";
import { Tools } from "../components/ui/ToolsSection/Tools";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: 'Attivanse | Diseño web para Empresas',
	description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones para industrias y fábricas.Expertos en SEO, creamos soluciones digitales personalizadas para impulsar tu visibilidad online, aumentar la productividad y fortalecer tu presencia en el mercado. ¡Descubre cómo optimizar tu presencia digital con nosotros!",
	keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios",
	openGraph: {
	  title: 'Attivanse | Diseño web para Empresas',
	  description: "Potencia el rendimiento de tu empresa con nuestro servicio de diseño web y desarrollo de aplicaciones!",
	  images: [
		{
		  url: "/img/attivanse-og.png",
		  width: 601,
		  height: 301,
		  alt: "attivanse-og-image",
		}
	  ],
	  type: 'website',
	},
  }


export default function Home() {
	return (
		<>
			<Header />
			<Servicios />
			<Tools />
			<Metodologia />
			<CasoDeEstudio />
			<Pricing />
			<Benefecios />
			<Contact />
			<FAQ />
		</>
	);
}
