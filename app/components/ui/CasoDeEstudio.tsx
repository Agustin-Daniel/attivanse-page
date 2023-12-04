import Image from "next/image"

export const CasoDeEstudio = () => {
  return (
    <div className="bg-gray px-6 py-12 lg:pl-32 lg:pr-16 lg:py-28">
      <div className="flex flex-col max-w-[380px] gap-10 m-auto lg:flex-row lg:justify-between lg:gap-0 lg:max-w-[1200px]">
        <div className="flex flex-col text-left lg:w-[314px] lg:gap-5">
          <h2 className="mb-8 text-center lg:mb-0 lg:text-left">Caso de estudio</h2>
          <p className="mb-5 text-coldgray text-base lg:mb-0">
            Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade i vusamma. Mipektig sisat fån beda, pres. Dologi bigen, plalig, besk. 
            <br />
            <br />
            Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade
            <br />
            <br />
            Lörem ipsum ser. Pokenad kvasir berat. Pseudov mobevis ponde monedossade
          </p>
          <a className="text-blue underline" href="https://ciudaddemessina.com/">Visitar página</a>
        </div>
        <div className="flex gap-2 lg:gap-8">
          <Image className="w-[42vw] max-w-[181px] lg:w-[20vw] lg:max-w-[323px]" src="/img/new-home.png" width={323} height={529} alt="ciudad de messina fabrica de escobillones home pagina web" />
          <Image className="w-[42vw] max-w-[181px] lg:w-[20vw] lg:max-w-[323px]" src="/img/old-home.png" width={323} height={529} alt="ciudad de messina fabrica de escobillones home pagina web anterior" />
        </div>
      </div>
    </div>
  )
}
