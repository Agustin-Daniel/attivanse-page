"use server"
import 'swiper/css';
import { SwiperBeneficios } from './SwiperBeneficios';


export const Benefecios = () => {

	return (
		<section className="body-font bg-black">
			<div className="w-[90%] max-w-[1450px] pb-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h2 className="mb-2 lg:lg:text-5xl font-bold">
						<strong className="text-[#FEBD29]">Beneficios</strong> de trabajar con los #1
					</h2>
					<p className="lg:w-1/2 w-full leading-relaxed">
                        Somos los mejores en posicionamiento internacional de empresas
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
                    <SwiperBeneficios />
				</div>
			</div>
		</section>
	);
};
