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
		<section className="bg-black px-8 pt-10 pb-12 lg:pt-16 lg:pb-52 lg:px-0">
			<h2 className="pb-12 lg:pb-24 text-center">Metodología</h2>
			<div>
				<MetodologiaCard
					icon={<PaperSVG />}
					scrollNumber={{desktop: 3000, mobile: 3515}}
					scrollPosition={scrollPosition}
					title={"Estudio de necesidades"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
				/>
				<MetodologiaCard
					icon={<MonitorSVG />}
					scrollNumber={{desktop: 3280, mobile: 3992}}
					scrollPosition={scrollPosition}
					title={"Diseño"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					revert
				/>
				<MetodologiaCard
					icon={<PaperArrowsSVG />}
					scrollNumber={{desktop: 3560, mobile: 4495}}
					scrollPosition={scrollPosition}
					title={"Revisiones"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
				/>
				<MetodologiaCard
					icon={<CodeMonitorSVG />}
					scrollNumber={{desktop: 3840, mobile: 4957}}
					scrollPosition={scrollPosition}
					title={"Fase de programación"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
					revert
				/>
				<MetodologiaCard
					icon={<RefreshMonitorSVG />}
					scrollNumber={{desktop: 4120, mobile: 5447}}
					scrollPosition={scrollPosition}
					title={"Puesta en marcha"}
					description={"Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. "}
				/>
				<MetodologiaCard
					icon={<MonitorPuzzleSVG />}
					scrollNumber={{desktop: 4400, mobile: 5927}}
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
