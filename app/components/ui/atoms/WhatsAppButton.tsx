"use client"
import { motion } from "framer-motion"
import Image from "next/image";


export const WhatsAppButton = () => {

  const AnimatedProps = {
    initial:{ opacity: 0, y: 20 },
    animate:{ opacity: 0.7, y:0, transition: { delay: 3 } },
    transition:{ duration: 0.3 },
  }

  return (
    <div>
        <motion.a
            className="flex bg-[rgb(59,141,56)] items-center justify-center w-16 h-16 rounded-s-full fixed bottom-2 left-2 opacity-70 z-50 scale-75 rounded-full xl:bottom-[25px] xl:left-[25px] xl:scale-100"
            href="https://api.whatsapp.com/send?phone=5491144948334"
            rel="noreferrer"
            target='_blank'
            {...AnimatedProps}
        >
        <Image className="w-8 h-8" width={32} height={32} src='/img/whatsapp.png' alt="boton chat Whatsapp" />
        </motion.a>
    </div>
  );
};