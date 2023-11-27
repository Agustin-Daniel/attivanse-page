'use client'
import { CodeMonitorSVG, MonitorSVG, PaperArrowsSVG, PaperSVG, RefreshMonitorSVG, MonitorPuzzleSVG } from "./ui/icons"
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";


export const Metodologia = () => {



    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });

    // const [isScaling, setIsScaling] = useState(false);

    // useEffect(() => {
    //     console.log(scrollYProgress);
        
    //   }, [scrollYProgress]);
      
    // const { scrollYProgress } = useScroll();


  return (
		<section className="bg-black pt-16 pb-96">
			<h2 className="pb-24 text-center">Metodología</h2>
			<div>
				<div ref={ref} className="flex justify-center gap-16">
					<div className="flex justify-end w-[378px] mt-[-17px]"><PaperSVG /></div>
					<div className="flex flex-col items-center gap-3">
						<motion.div
							id="circle"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="41"
								height="41"
								viewBox="0 0 41 41"
								fill="none"
							>
								<circle
									cx="20.5"
									cy="20.5"
									r="18"
									fill="#DDDDDD"
									stroke="#DDDDDD"
                                    // change stocke to 2970EC
									strokeWidth="5"
								/>
								<circle cx="21" cy="21" r="5" fill="#AEB6C5" />
                                {/* change fill to 2970EC */}
							</svg>
						</motion.div>
						<motion.div id="line" className="h-[238px] w-[3px] bg-grayline" style={{ scaleY: scrollYProgress, originY: 0 }}></motion.div>
					</div>
					<div className="w-[378px]">
						<h3 className="mb-[27px]">Estudio de necesidades</h3>
						<p className="text-coldgray">
							Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde
							monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi
							bigen, plalig, besk.
						</p>
					</div>
				</div>





				{/* <div>
					<MonitorSVG />
					<div>
						<div>circle</div>
						<div>line</div>
					</div>
					<div>
						<h3>Diseño</h3>
						<p>
							Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde
							monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi
							bigen, plalig, besk.
						</p>
					</div>
				</div>
				<div>
					<PaperArrowsSVG />
					<div>
						<div>circle</div>
						<div>line</div>
					</div>
					<div>
						<h3>Revisiones</h3>
						<p>
							Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde
							monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi
							bigen, plalig, besk.
						</p>
					</div>
				</div>
				<div>
					<CodeMonitorSVG />
					<div>
						<div>circle</div>
						<div>line</div>
					</div>
					<div>
						<h3>Fase de programación </h3>
						<p>
							Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde
							monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi
							bigen, plalig, besk.
						</p>
					</div>
				</div>
				<div>
					<RefreshMonitorSVG />
					<div>
						<div>circle</div>
						<div>line</div>
					</div>
					<div>
						<h3>Puesta en marcha</h3>
						<p>
							Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde
							monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi
							bigen, plalig, besk.
						</p>
					</div>
				</div>
				<div>
					<MonitorPuzzleSVG />
					<div>
						<div>circle</div>
						<div>line</div>
					</div>
					<div>
						<h3>Addons & Integración</h3>
						<p>
							Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde
							monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi
							bigen, plalig, besk.
						</p>
					</div>
				</div> */}
			</div>
		</section>
	);
}
