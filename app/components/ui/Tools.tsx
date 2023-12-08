import Image from "next/image";
import { worksans } from "./fonts";
import clsx from 'clsx';

export const Tools = () => {

    const cards = [
        {
            title: "Babel",
            image: "/img/tools/babel-img.png"
        },
        {
            title: "Cloudflare",
            image: "/img/tools/cloudflare-img.png"
        },
        {
            title: "Git",
            image: "/img/tools/git-img.png"
        },
        {
            title: "Nextjs",
            image: "/img/tools/next-img.png"
        },
        {
            title: "Reactjs",
            image: "/img/tools/react-img.png"
        },
        {
            title: "Typescript",
            image: "/img/tools/typescript-img.png"
        },
        {
            title: "Webpack",
            image: "/img/tools/webpack-img.png"
        },
    ]


	return (
		<section className="text-gray-600 body-font bg-black pt-24">
			<div className="container px-5 pb-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h2 className="mb-2 lg:lg:text-5xl font-bold">
						<strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea6ff] to-[#47b9fb]">Tecnologias</strong> que impulsarán su negocio
					</h2>
					<p className="lg:w-1/2 w-full leading-relaxed">
                        Nuestros desarrollos se basan en las tecnologías más modernas y escalables del mercado.
					</p>
				</div>
				<div className="flex flex-wrap justify-around -m-4 gap-20">
                    {
                        cards.map((card, index) => (
                            <div className="flex flex-col items-center" key={index}>
                                <Image quality={100} width={148} height={148} src={card.image} alt={`${card.title}-icon`} />
                            </div>
                        ))
                    }
				</div>
			</div>
		</section>
	);
};
