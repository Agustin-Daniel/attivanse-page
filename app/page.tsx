"use client"
import { Servicios } from "./components/ui/Servicios";
import { Header } from "./components/ui/Header";
import { Metodologia } from "./components/ui/Metodologia";
import { CasoDeEstudio } from "./components/ui/CasoDeEstudio";
import { Pricing } from "./components/ui/Pricing";
import { Contact } from "./components/ui/Contact";
import { FAQ } from "./components/ui/FAQ";
import { Benefecios } from "./components/ui/Benefecios";
import { Tools } from "./components/ui/Tools";
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
}



export default function Home() {
	return (
		<main className="flex justify-center z-20 bg-black">
			<motion.div
				variants={variants}
				initial="hidden"
				animate="enter"
				transition={{ type: 'linear', duration: 0.3 }}
				className="max-w-[1920px] w-full"
			>
				<Header />
				<Servicios />
				<Tools />
				<Metodologia />
				<CasoDeEstudio />
				<Pricing />
				<Benefecios />
				<Contact />
				<FAQ />
			</motion.div>
		</main>
	);
}
