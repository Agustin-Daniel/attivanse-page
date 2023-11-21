import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center z-20">
			<div className="max-w-[1920px] w-full">
				<header className="flex items-center bg-header-img w-full h-[106vh] bg-top bg-no-repeat">
					<div className="flex flex-col pl-28 gap-8">
						<h1 className="w-[630px]">Existimos para ayudar a nuestros clientes a crecer</h1>
						<Link className="btn-primary w-[274px]" href="#contacto">Programa una reunión</Link>
					</div>
				</header>
			</div>
		</main>
	);
}
