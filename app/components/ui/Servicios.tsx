import Image from "next/image"
import PenSVG from "./icons/PenSVG"
import CodeSVG from "./icons/CodeSVG"
import AddonsSVG from "./icons/AddonsSVG"
import MegaphoneSVG from "./icons/MegaphoneSVG"




export const Servicios = () => {
  return (
    <section className="flex flex-col bg-gray">
        <h2>Servicios</h2>
        <div>
            <div><div className="service-icon"><PenSVG /></div><h3>Diseño</h3></div>
            <Image src="" alt="" />
            <p></p>
            <ul>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
            </ul>
        </div>
        <div>
            <div><div className="service-icon"><CodeSVG /></div><h3>Tecnologia</h3></div>
            <Image src="" alt="" />
            <p></p>
            <ul>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
            </ul>
        </div>
        <div>
            <div><div className="service-icon"><AddonsSVG /></div><h3>Agregados</h3></div>
            <Image src="" alt="" />
            <p></p>
            <ul>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
            </ul>
        </div>
        <div>
            <div><div className="service-icon"><MegaphoneSVG /></div><h3>Marketing</h3></div>
            <Image src="" alt="" />
            <p></p>
            <ul>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
              <li>*check*</li>
            </ul>
        </div>
    </section>
  )
}
