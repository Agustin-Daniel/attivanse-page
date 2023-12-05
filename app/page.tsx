import { Servicios } from "./components/ui/Servicios";
import { Header } from "./components/ui/Header";
import { Metodologia } from "./components/ui/Metodologia";
import { CasoDeEstudio } from "./components/ui/CasoDeEstudio";
import { Pricing } from "./components/ui/Pricing";
import { Contact } from "./components/ui/Contact";
import { FAQ } from "./components/ui/FAQ";

export default function Home() {
	return (
		<main className="flex justify-center z-20">
			<div className="max-w-[1920px] w-full">
				<Header />
				<Servicios />
				<Metodologia />
				<CasoDeEstudio />
				<Pricing />
				<Contact />
				<FAQ />
			</div>
		</main>
	);
}
