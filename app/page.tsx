import { Servicios } from "./components/ui/Servicios";
import { Header } from "./components/ui/Header";
import { Metodologia } from "./components/ui/Metodologia";
import { CasoDeEstudio } from "./components/CasoDeEstudio";

export default function Home() {
	return (
		<main className="flex justify-center z-20">
			<div className="max-w-[1920px] w-full">
				<Header />
				<Servicios />
				<Metodologia />
				<CasoDeEstudio />
			</div>
		</main>
	);
}
