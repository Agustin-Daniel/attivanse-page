import Link from "next/link";



export const Header = () => {
	
	return (
		<header
			className="bg-header-img-480 bg-top bg-no-repeat px-6 flex pt-[11rem] w-full h-[502px] sm:bg-header-img-768 md:bg-left lg:bg-top md:bg-header-img-1920 md:px-12 lg:h-[106vh] lg:max-h-[1178px] lg:pl-28 lg:pt-0 lg:items-center"
		>
			<div className="flex flex-col gap-8 max-w-[440px]">
				<h1 className="lg:w-[630px]">
					Existimos para ayudar a nuestros clientes a crecer
				</h1>
				<Link
					role="button"
					className="btn-primary"
					href="#contacto"
				>
					Programa una reunión
				</Link>
			</div>
		</header>
	);
};
