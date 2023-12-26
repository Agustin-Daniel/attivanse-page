import { Servicios } from "../components/ui/Servicios";
import { Header } from "../components/ui/Header";
import { Metodologia } from "../components/ui/MetodologiaSection/Metodologia";
import { CasoDeEstudio } from "../components/ui/CasoDeEstudio";
import { Pricing } from "../components/ui/Pricing";
import { Contact } from "../components/ui/Contact";
import { FAQ } from "../components/ui/FAQ";
import { Benefecios } from "../components/ui/Benefecios";
import { Tools } from "../components/ui/ToolsSection/Tools";


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
