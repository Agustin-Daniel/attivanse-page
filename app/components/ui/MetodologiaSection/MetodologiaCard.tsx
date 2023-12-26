'use server'
import clsx from 'clsx';
import { worksans } from '../fonts';
import { CircleLine } from './CircleLine';

type Prop = {
	// `icon` es un elemento JSX que se renderiza como un icono en el componente.
	icon:JSX.Element
	 // `scrollNumber` es el valor de desplazamiento en el eje Y que determina cuándo cambiar el color del círculo.
	scrollNumber?:{
		mobile:number,
		desktop:number
	},
	 // `title` es el titulo de la card.
	title:string,
	 // `description` es la descripción de la card.
	description:string,
	 // `lineOff` quia la linea de la card.
	lineOff?:boolean
	 // `revert` cambia la orientacion.
	revert?:boolean
}

export const MetodologiaCard = ({
	icon,
	scrollNumber = { mobile: 0, desktop: 0 },
	lineOff = false,
	title,
	description,
	revert = false,
}: Prop) => {

	return (
		<div
			className={clsx(
				"grid grid-cols-min-min-content grid-rows-fr-fr-content mt-3 gap-x-9 lg:gap-9 lg:flex justify-center",
				{
					"flex-row-reverse": revert,
				}
			)}
		>
			<div
				className={clsx("flex lg:mt-[-17px] col-[2/2] row-[2/2] lg:w-full", {
					"lg:justify-end": !revert,
				})}
			>
				<div className="w-[120px] lg:w-[141px] h-fit">{icon}</div>
			</div>
			<div
				className={clsx("flex flex-col items-center gap-3 col-[1/1] row-[1/3]")}
			>
				<CircleLine scrollNumber={scrollNumber} lineOff={lineOff} />
			</div>
			<div
				className={clsx(
					"flex flex-col justify-end gap-6 lg:w-full lg:justify-start mt-3 lg:mt-0",
					{
						"lg:text-right lg:items-end": revert,
					}
				)}
			>
				<h3>{title}</h3>
				<p className={clsx(worksans.className, "text-coldgray mb-8 w-[60vw] max-w-[335px] lg:max-w-none lg:w-[378px]")}>
					{description}
				</p>
			</div>
		</div>
	);
};
