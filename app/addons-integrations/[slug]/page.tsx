import { StarFill } from '@/app/components/ui/atoms/stars/StarFill';
import { worksans } from '@/app/components/ui/fonts';
import { addonsData } from '@/app/data/addonsData';
import { getAddonBySlug } from '@/app/data/getAddonBySlug';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';


export async function generateStaticParams() {
  const addons = await addonsData
  
  return addons.map((addon:any) => ({
        slug: addon.slug,
  }));
}

export const dynamicParams = false

export async function generateMetadata({params: {slug}}: {params: {slug: string}}) {
  const addon = getAddonBySlug(slug);

  return {
      title: `Attivanse | ${addon?.title} Addon`,
      description: addon?.description,
      keywords: "diseño web, diseño web para empresas, diseño web para industrias, diseño web para fábricas, diseño web para pymes, diseño web para emprendedores, diseño web para negocios, diseño web para comercios, diseño web para tiendas online, diseño web para ecommerce, diseño web para profesionales, diseño web para servicios",
      category: 'technology',
      openGraph: {
        title: `Attivanse | ${addon?.title} Addon`,
        description: addon?.description,
        images: addon?.image,
      }
      //! hacer por imagenes o arreglar el error de que no se vean las imagenes
  };
}

export default function Page({ params }: { params: { slug: string } }) {
    
    //*agregar price
    
    const addon = getAddonBySlug(params.slug);
    
	return (
      <section className="overflow-hidden">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
              <h2 className="text-sm tracking-widest text-[#FEBD29]">PREMIUM ADDON</h2>
              <h1 className="">{addon?.title}</h1>
          <div className="mx-auto flex flex-col gap-9 mt-9 items-center">
            <Image
              src={ addon?.image ? addon?.image : "" }
              alt={ `${addon?.title} addon}` }
              width={600}
              height={280}
            />
            <div className="w-full max-w-[600px]">
            <h1 className="text-2xl font-medium mb-1">¿Cuales son los beneficios?</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <span className="ml-3">{ addon?.reviews } Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
              { 
                addon?.description.split('/n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                )) 
              }
              </p>
              <section>
              <div className="mx-auto flex gap-16 py-16 flex-wrap">
                {
                  addon?.list.map((addon, index) => (
                <div key={index + addon.title} className="flex w-full relative items-center">
                  <div className="flex-grow flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-12 h-24 rounded-full inline-flex items-center justify-center">
                      <Image src="/img/icons/medal-green.png" alt="check-icon" width={81} height={81} />
                    </div>
                    <div className="flex-grow sm:pl-6 sm:mt-0">
                      <h3 className="font-medium mb-1 text-xl text-[#FEBD29]">{ addon.title }</h3>
                      <p className="leading-relaxed">{ addon.description }</p>
                    </div>
                  </div>
                </div>))
                }

              </div>
            </section>
            <div className="flex mt-6 items-center border-b-2 border-gray-100 mb-5"></div>
              <div className="flex items-center">
                <span className={clsx(worksans.className, 'leading-normal text-lightwhite font-medium text-xl h-fit')}>{`${addon?.price === "Free" ? "¡Gratis!" : addon?.price }${addon?.monthly ? "/mes" : ""}`}</span>
                <button className="flex ml-auto text-white bg-blue py-2 px-6 rounded hover:bg-white hover:text-black">Lo quiero!</button>
                <button className="flex ml-4 text-white border-[1px] py-2 px-6 rounded hover:bg-white hover:text-black">Hablemos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
	);
}