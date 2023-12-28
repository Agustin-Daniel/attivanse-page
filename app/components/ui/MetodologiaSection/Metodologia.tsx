"use server"
import { MetodologiaCard } from "./MetodologiaCard";
import { CodeMonitorSVG, MonitorSVG, PaperArrowsSVG, PaperSVG, RefreshMonitorSVG, MonitorPuzzleSVG } from "../icons"
import { ScrollProvider } from "@/app/context/ScrollContext";

const metodologiaData = [
	{
	  icon: <PaperSVG />,
	  scrollNumber: { desktop: 3000, mobile: 3515 },
	  title: "Estudio de necesidades",
	  description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. ",
	},
	{
	  icon: <MonitorSVG />,
	  scrollNumber: { desktop: 3280, mobile: 3992 },
	  title: "Diseño",
	  description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. ",
	  revert: true,
	},
	{
	  icon: <PaperArrowsSVG />,
	  scrollNumber: { desktop: 3560, mobile: 4495 },
	  title: "Revisiones",
	  description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. ",
	},
	{
	  icon: <CodeMonitorSVG />,
	  scrollNumber: { desktop: 3840, mobile: 4957 },
	  title: "Fase de programación",
	  description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. ",
	  revert: true,
	},
	{
	  icon: <RefreshMonitorSVG />,
	  scrollNumber: { desktop: 4120, mobile: 5447 },
	  title: "Puesta en marcha",
	  description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. ",
	},
	{
	  icon: <MonitorPuzzleSVG />,
	  scrollNumber: { desktop: 4400, mobile: 5927 },
	  title: "Addons & Integración",
	  description: "Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. ",
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
