"use server"
import Image from "next/image"
import MotionP from "./motion/MotionP"
import Motionli from "./motion/MotionLi"
import { CheckSVG } from "./icons";
import { ReactElement} from "react";
import MotionDiv from "./motion/MotionDiv";
import clsx from "clsx";
import Link from "next/link";

const variantsP = {
    initial: { opacity: 0, y: -20 },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.7,
      },
    },
};

type Prop = {
    icon: ReactElement;
    title: string;
    description: string;
    list: string[];
    revert: boolean;
    img: string;
}

export const ServiciosCard: React.FC<Prop> = ({ icon, title, description, list, revert, img }) => {



  return (
    !revert ?
    <div className="bg-black w-full flex justify-center">
      <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
        <MotionDiv
          className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end"
          variants={variantsP}
          whileInView="animation"
          initial="initial"
          viewport={{ once: true }}
        >
          <div className="service-icon">{icon}</div>
          <h3>{title}</h3>
        </MotionDiv>
        <MotionDiv
          className="w-full max-w-[368px] mb-12 lg:row-span-2 lg:mb-0 lg:w-[42vw] lg:max-w-[550px] justify-self-end"
          variants={variantsP}
          whileInView="animation"
          initial="initial"
          viewport={{ once: true }}
        >
          <Image src={img} width={606} height={502} alt="design image" />
        </MotionDiv>
        <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:max-w-[378px] text-pretty">
          <MotionP
            className="mb-10"
            variants={variantsP}
            whileInView="animation"
            initial="initial"
            viewport={{ once: true }}
          >
            {description}
          </MotionP>
          <ul className="flex flex-col gap-4 w-fit">
            {list.map((text, i) => (
              <Motionli
                className="flex gap-5"
                key={i + text}
                whileInView="animation"
                viewport={{ once: true }}
                custom={i}
                initial="initial"
              >
                <CheckSVG className="min-w-6" height={24} width={24} />
                {
                  text === "Posicionamiento web internacional con SEO Hyperlocal"
                  ? <Link href="/addons-integrations" className="text-[#FEBD29] hover:text-blue">Posicionamiento web internacional con SEO Hyperlocal</Link>
                  : text
                }
              </Motionli>
            ))}
          </ul>
        </div>
      </div>
    </div>
    :
    <div className="bg-lightblack w-full flex justify-center">
    <div className="flex items-center flex-col pb-16 pt-11 px-8 lg:px-[7rem] lg:grid lg:justify-center lg:grid-cols-2 lg:max-w-[1300px] lg:w-full">
      <MotionDiv
        className="w-full flex gap-3 items-center mb-8 justify-center lg:gap-5 lg:justify-start lg:self-end lg:w-[378px] lg:justify-self-end"
        variants={variantsP}
        whileInView="animation"
        initial="initial"
        viewport={{ once: true }}
      >
      <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
      </MotionDiv>
      <MotionDiv
        className="w-full max-w-[368px] mb-12 lg:mb-0 lg:row-start-1 lg:row-end-3 lg:w-[42vw] lg:max-w-[550px] justify-self-end"
        variants={variantsP}
        whileInView="animation"
        initial="initial"
        viewport={{ once: true }}
      >
        <Image src={img} width={606} height={502} alt="technology image" />
      </MotionDiv>
      <div className="w-full max-w-[301px] flex flex-col lg:self-start lg:justify-self-end lg:max-w-[378px]">
        <MotionP
          className="mb-10"
          variants={variantsP}
          whileInView="animation"
          initial="initial"
          viewport={{ once: true }}
        >
          {description}
        </MotionP>
        <ul className="flex flex-col gap-4 w-fit">
          {list.map((text, i) => (
            <Motionli 
              className="flex gap-5"
              key={i + text}
              whileInView="animation"
              viewport={{ once: true }}
              custom={i}
              initial="initial"
            >
              <CheckSVG className="min-w-6" height={24} width={24} />{text}
            </Motionli>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}