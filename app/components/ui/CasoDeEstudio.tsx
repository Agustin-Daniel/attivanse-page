import clsx from "clsx"
import Image from "next/image"
import { worksans } from "./fonts"

export const CasoDeEstudio = () => {
  return (
    <div className="bg-gray px-6 py-12 lg:pl-32 lg:pr-16 lg:pt-16 lg:pb-24">
      <h2 className="mb-12 lg:mb-20 text-center">Caso de estudio</h2>
      <div>
        <div className="flex flex-col max-w-[380px] gap-10 m-auto lg:flex-row lg:justify-between lg:gap-0 lg:max-w-[1200px]">
          <div className="flex flex-col text-left lg:w-[341px]">
            <h4 className="mb-4 text-xl text-center font-semibold lg:mb-1 lg:text-left lg:text-3xl lg:leading-normal">Ciudad de Messina</h4>
            {/* <div className="w-[120px]"><StarsSVG /></div> */}
            <div className="flex gap-1">
              <a className="w-fit text-[12px] px-2 py-1 font-semibold border-[1px] cursor-pointer text-blue bg-white border-white hover:border-white hover:text-white hover:bg-opacity-0 rounded-[100px]">Semi-Custom Design</a>
              <a className="w-fit text-[12px] px-2 py-1 font-semibold border-[1px] cursor-pointer text-white bg-[#febd1b] border-[#febd1b] hover:border-white hover:text-white hover:bg-opacity-0 rounded-[100px]">Page Content Writing</a>
            </div>
            <p className={clsx(worksans.className, "mb-5 mt-8 lg:mt-5 text-coldgray text-base")}>
              Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. 
              <br />
              <br />
              Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade
              <br />
              <br />
              Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade
            </p>
            <a className={clsx(worksans.className, "text-blue underline hover:text-white w-fit")} target="_blank" href="https://ciudaddemessina.com/">Visitar página</a>
          </div>
          <div className="flex gap-2 lg:gap-8">
            <Image className="w-[42vw] max-w-[181px] lg:w-[20vw] lg:max-w-[323px]" src="/img/new-home.png" quality={100} width={323} height={529} alt="ciudad de messina fabrica de escobillones home pagina web" />
            <Image className="w-[42vw] max-w-[181px] lg:w-[20vw] lg:max-w-[323px]" src="/img/old-home.png" quality={100} width={323} height={529} alt="ciudad de messina fabrica de escobillones home pagina web anterior" />
          </div>
        </div>
      </div>
    </div>
  )
}
