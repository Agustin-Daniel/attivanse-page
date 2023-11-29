'use client'
import { useEffect, useState } from "react";
import { MetodologiaCard } from "./MetodologiaCard";
import { CodeMonitorSVG, MonitorSVG, PaperArrowsSVG, PaperSVG, RefreshMonitorSVG, MonitorPuzzleSVG } from "./icons"


export const Metodologia = () => {

	const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
          console.log(scrollPosition);
          
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosition]);


  return (
		<section className="bg-black pl-11 pr-8 pt-16 pb-96 lg:pr-0 lg:pl-0">
			<h2 className="pb-24 text-center">Metodología</h2>
			<div>
				<MetodologiaCard
					icon={<PaperSVG />}
					scrollNumber={3000}
					scrollPosition={scrollPosition}
					title={"Estudio de necesidades"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
				/>
				<MetodologiaCard
					icon={<MonitorSVG />}
					scrollNumber={3280}
					scrollPosition={scrollPosition}
					title={"Diseño"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					revert
				/>
				<MetodologiaCard
					icon={<PaperArrowsSVG />}
					scrollNumber={3560}
					scrollPosition={scrollPosition}
					title={"Revisiones"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
				/>
				<MetodologiaCard
					icon={<CodeMonitorSVG />}
					scrollNumber={3840}
					scrollPosition={scrollPosition}
					title={"Fase de programación"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					revert
				/>
				<MetodologiaCard
					icon={<RefreshMonitorSVG />}
					scrollNumber={4120}
					scrollPosition={scrollPosition}
					title={"Puesta en marcha"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
				/>
				<MetodologiaCard
					icon={<MonitorPuzzleSVG />}
					scrollNumber={4400}
					scrollPosition={scrollPosition}
					title={"Addons & Integración"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					lineOff
					revert
				/>
			</div>
		</section>
	);
}
