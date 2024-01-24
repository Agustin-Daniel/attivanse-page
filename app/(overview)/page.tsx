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
