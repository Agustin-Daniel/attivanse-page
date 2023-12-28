import Link from "next/link";
import MotionDiv from "./motion/MotionDiv";



export const Header = () => {

	const variantsText = {
		hidden: { opacity: 0, y: -30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
			delay: 0.3,
			duration: 1,
			},
		},
	};

	const variantsButton = {
		hidden: { opacity: 0, y: -30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
			delay: 0.5,
			duration: 1,
			},
		},
	};

	return (
		<header
			className="bg-header-img-480 bg-top bg-no-repeat px-6 flex pt-[11rem] w-full h-[502px] sm:bg-header-img-768 md:bg-left lg:bg-top md:bg-header-img-1920 md:px-12 lg:h-[106vh] lg:max-h-[1178px] lg:pl-28 lg:pt-0 lg:items-center"
		>
			<div className="flex flex-col gap-10 max-w-[440px]">
				<MotionDiv
					variants={variantsText}
					animate="visible"
					initial="hidden"
				>
					<h1 className="lg:w-[630px]">
						Tu empresa posicionada internacionalmente
						{/* Existimos para ayudar a nuestros clientes a crecer */}
						{/* Tu empresa a la vista de todo el mundo */}
						{/* Cierra ventas al rededor del mundo */}
					</h1>
				</MotionDiv>
				<MotionDiv
					variants={variantsButton}
					animate="visible"
					initial="hidden"
				>
					<Link
						role="button"
						className="btn-primary"
						href="#contacto"
						aria-label="Programa una reunión"
					>
						Programa una reunión
					</Link>
				</MotionDiv>
			</div>
		</header>
	);
};
