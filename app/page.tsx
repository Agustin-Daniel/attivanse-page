import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center z-20">
			<div className="max-w-[1920px] w-full">
				<header className="bg-header-img-768 md:bg-header-img-1920 px-6 flex pt-36 w-full h-[502px] md:h-[106vh] bg-top bg-no-repeat">
					<div className="flex flex-col gap-12 max-w-[440px] md:gap-8">
						<h1 className="md:w-[630px]">Existimos para ayudar a nuestros clientes a crecer</h1>
						<Link role="button" className="btn-primary w-[207px] md:w-[274px]" href="#contacto">Programa una reunión</Link>
					</div>
				</header>
			</div>
		</main>
	);
}
