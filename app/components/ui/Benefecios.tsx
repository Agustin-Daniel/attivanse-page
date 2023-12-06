import Image from "next/image";
import { worksans } from "./fonts";
import clsx from 'clsx';

export const Benefecios = () => {

    



    const cards = [
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "image"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "image"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "image"
        },
        {
            title: "Capture clientes potenciales",
            description: "Atraiga más clientes con un hermoso sitio web que siga los valores de su marca.",
            image: "image"
        },

        // {
        //     title: "Cierre ventas en el extranjero",
        //     description: "Cierre ventas en el exterior siendo visible en sus buscadores.",
        //     image: "image"
        // },
        // {
        //     title: "Agilice las ventas de su empresa",
        //     description: "Agilice las ventas de sus productos con un sistema de venta personalizado.",
        //     image: "image"
        // },
        // {
        //     title: "Aumente la productividad de su empresa",
        //     description: "Emita presupuestos de manera automática.",
        //     image: "image"
        // },
        // {
        //     title: "Impida ataques cibernéticos a su empresa",
        //     description: "Impida ataques de DOSS y de haking con nuestra arquitectura.",
        //     image: "image"
        // },
        // {
        //     title: "Retenga a sus clientes potenciales",
        //     description: "Retenga a los clientes potenciales con la rapidez de una SPA y la tecnología de Next.js.",
        //     image: "image"
        // }
    ]


	return (
		<section className="text-gray-600 body-font bg-black">
			<div className="container px-5 pb-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h1 className="mb-2">
						<strong className="text-[#FEBD29]">Beneficios</strong> de trabajar con nosotros
					</h1>
					<p className="lg:w-1/2 w-full leading-relaxed">
                        Su empresa se beneficiará de nuestra experiencia en el desarrollo de software
					</p>
				</div>
				<div className="flex flex-wrap -m-4">

                    {
                        cards.map((card, index) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                                <div className="border border-gray-200 p-6 rounded-lg">
                                    <div className="">
                                        <Image
                                            className="w-[80px] h-[64px]"
                                            src="/img/reviews-thin.png"
                                            alt="hero"
                                            width={106}
                                            height={85}
                                        />
                                    </div>
                                    <h5 className="text-lg font-bold mt-[5px]">
                                        {card.title}
                                    </h5>
                                    <p className={clsx(worksans.className, "leading-relaxed text-base text-lightwhite")}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
				</div>
			</div>
		</section>
	);
};
