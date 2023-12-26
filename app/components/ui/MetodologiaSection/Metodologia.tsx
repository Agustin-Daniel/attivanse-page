"use server"
import { MetodologiaCard } from "./MetodologiaCard";
import { CodeMonitorSVG, MonitorSVG, PaperArrowsSVG, PaperSVG, RefreshMonitorSVG, MonitorPuzzleSVG } from "../icons"
import { ScrollProvider } from "@/app/context/ScrollContext";


export const Metodologia = () => {

  return (
		<ScrollProvider>
			<section id="metodologia" className="bg-black px-8 pt-10 pb-12 lg:pt-16 lg:pb-52 lg:px-0">
				<h2 className="pb-12 lg:pb-24 text-center">Metodología</h2>
				<div>
					<MetodologiaCard
						icon={<PaperSVG />}
						scrollNumber={{desktop: 3000, mobile: 3515}}
						title={"Estudio de necesidades"}
						description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					/>
					<MetodologiaCard
						icon={<MonitorSVG />}
						scrollNumber={{desktop: 3280, mobile: 3992}}
						title={"Diseño"}
						description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
						revert
					/>
					<MetodologiaCard
						icon={<PaperArrowsSVG />}
						scrollNumber={{desktop: 3560, mobile: 4495}}
						title={"Revisiones"}
						description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					/>
					<MetodologiaCard
						icon={<CodeMonitorSVG />}
						scrollNumber={{desktop: 3840, mobile: 4957}}
						title={"Fase de programación"}
						description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
						revert
					/>
					<MetodologiaCard
						icon={<RefreshMonitorSVG />}
						scrollNumber={{desktop: 4120, mobile: 5447}}
						title={"Puesta en marcha"}
						description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					/>
					<MetodologiaCard
						icon={<MonitorPuzzleSVG />}
						scrollNumber={{desktop: 4400, mobile: 5927}}
						title={"Addons & Integración"}
						description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
						lineOff
						revert
					/>
				</div>
			</section>
		</ScrollProvider>
	);
}
