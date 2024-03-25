"use server"
import 'swiper/css';
import { SwiperTools } from './SwiperTools';


export const Tools = () => {

	return (
		<section id='tecnologia' className="text-gray-600 body-font bg-black pt-24">
			<div className="container px-5 pb-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h2 className="mb-2 lg:lg:text-5xl font-bold">
						<strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea6ff] to-[#47b9fb]">Tecnologias</strong> que impulsarán su proyecto
					</h2>
					<p className="lg:w-1/2 w-full leading-relaxed">
                        Nuestros desarrollos se basan en las tecnologías más modernas y escalables del mercado.
					</p>
				</div>
                <SwiperTools />
			</div>
		</section>
	);
};
