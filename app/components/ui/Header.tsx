import Link from "next/link";


export const Header = () => {
	return (
		<header className="bg-header-img-768 bg-top bg-no-repeat px-6 flex pt-36 w-full h-[502px] md:bg-left lg:bg-top md:bg-header-img-1920 md:px-12 lg:h-[106vh] lg:pl-28 lg:pt-0 lg:items-center">
			<div className="flex flex-col gap-12 max-w-[440px] md:gap-8">
				<h1 className="lg:w-[630px]">
					Existimos para ayudar a nuestros clientes a crecer
				</h1>
				<Link
					role="button"
					className="btn-primary w-[207px] lg:w-[274px]"
					href="#contacto"
				>
					Programa una reunión
				</Link>
			</div>
		</header>
	);
};
