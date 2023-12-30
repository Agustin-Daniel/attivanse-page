"use server"
import { MetodologiaCard } from "./MetodologiaCard";
import { CodeMonitorSVG, MonitorSVG, PaperArrowsSVG, PaperSVG, RefreshMonitorSVG, MonitorPuzzleSVG } from "../icons"
import { ScrollProvider } from "@/app/context/ScrollContext";

const metodologiaData = [
	{
	  icon: <PaperSVG />,
	  scrollNumber: { desktop: 3000, mobile: 3515 },
	  title: "Estudio de necesidades",
	  description: "Antes que nada realizamos un análisis profundo para entender las necesidades exclusivas de tu empresa. Identificamos lo que te destacan y creamos estrategias personalizadas.",
	},
	{
	  icon: <MonitorSVG />,
	  scrollNumber: { desktop: 3280, mobile: 3992 },
	  title: "Diseño",
	  description: "El diseño es la clave para el éxito. En esta etapa nuestro equipo de diseñadores se dedicara a que su sitio web sea atractivo, intuitivo y fácil de usar.",
	  revert: true,
	},
	{
	  icon: <PaperArrowsSVG />,
	  scrollNumber: { desktop: 3560, mobile: 4495 },
	  title: "Revisiones",
	  description: "Realizamos revisiones en conjunto para asegurarnos de que todo cumple con sus expectativas. De no ser asi se realizaran los cambios necesarios sin ningun tipo de compromiso!",
	},
	{
	  icon: <CodeMonitorSVG />,
	  scrollNumber: { desktop: 3840, mobile: 4957 },
	  title: "Fase de programación",
	  description: "En esta fase se desarrolla el sitio web, se implementan las funcionalidades, se desarrollan testeos de seguridad y se optimiza el rendimiento.",
	  revert: true,
	},
	{
	  icon: <RefreshMonitorSVG />,
	  scrollNumber: { desktop: 4120, mobile: 5447 },
	  title: "Puesta en marcha",
	  description: "Todo listo! se realiza una prueba final para asegurarnos de que todo funciona correctamente. Luego de esto se publica el sitio web.",
	},
	{
	  icon: <MonitorPuzzleSVG />,
	  scrollNumber: { desktop: 4400, mobile: 5927 },
	  title: "Addons & Integraciónes",
	  description: "¿Te olvidate de algo? No te preocupes! Tu sitio web es completamente escalable! Siempre estamos atentos a las ultimas tendencias para que este por encima de la competencia.",
	  lineOff: true,
	  revert: true,
	},
  ];


export const Metodologia = () => {

  return (
		<ScrollProvider>
			<section id="metodologia" className="bg-black px-8 pt-10 pb-12 lg:pt-16 lg:pb-52 lg:px-0">
				<h2 className="pb-12 lg:pb-24 text-center">Nuestros Pasos a Serguir</h2>
				<div>
				{metodologiaData.map((data, index) => (
					<MetodologiaCard
						key={index}
						icon={data.icon}
						scrollNumber={data.scrollNumber}
						title={data.title}
						description={data.description}
						revert={data.revert}
						lineOff={data.lineOff}
					/>
				))}
				</div>
			</section>
		</ScrollProvider>
	);
}
