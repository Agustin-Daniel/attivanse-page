
'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Prop = {
	// `icon` es un elemento JSX que se renderiza como un icono en el componente.
	icon:JSX.Element
	 // `scrollNumber` es el valor de desplazamiento en el eje Y que determina cuándo cambiar el color del círculo.
	scrollNumber:number,
	 // `scrollPosition` es la posición actual de desplazamiento en el eje Y.
	scrollPosition:number, 
	 // `title` es el titulo de la card.
	title:string,
	 // `description` es la descripción de la card.
	description:string,
	 // `lineOff` quia la linea de la card.
	lineOff?:boolean
}

export const MetodologiaCard = ({ icon, scrollNumber, scrollPosition, title, description, lineOff = false }: Prop) => {

	const [scaleFactor, setScaleFactor] = useState(0)

	useEffect(() => {
		setScaleFactor(scrollPosition > scrollNumber ? 1 : 0)
	}, [scrollPosition, scrollNumber])


  return (
		<div className="flex justify-center gap-16 pt-3">
			<div className="flex justify-end w-[378px] mt-[-17px]">{icon}</div>
			<div className="flex flex-col items-center gap-3">
				<motion.div
					id="circle"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					style={{
						transition: "transform 0.8s ease",
					}}
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
							stroke={scrollPosition > scrollNumber ? "#2970EC" : "#DDDDDD"}
							strokeWidth="5"
						/>
						<circle
							cx="21"
							cy="21"
							r="5"
							fill={scrollPosition > scrollNumber ? "#2970EC" : "#AEB6C5"}
						/>
						{/* change fill to 2970EC */}
					</svg>
				</motion.div>
				{!lineOff && (
					<motion.div
						className="relative"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<div id="line" className="h-[238px] w-[3px] bg-grayline"></div>
						<div
							id="line"
							className="h-[238px] w-[3px] bg-blue absolute top-0 z-10"
							style={{
								transform: `scaleY(${scaleFactor})`,
								transformOrigin: "top",
								transition: "transform 0.8s ease",
							}}
						></div>
					</motion.div>
				)}
			</div>
			<div className="w-[378px]">
				<h3 className="mb-[27px]">{title}</h3>
				<p className="text-coldgray">{description}</p>
			</div>
		</div>
	);
}
