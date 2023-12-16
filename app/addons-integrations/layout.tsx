"use client"
import { useIsSmall } from "@/hooks/utils/utils";
import { motion } from "framer-motion"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const isMobile = useIsSmall()

    const variants =
    {
        initialMobile: { opacity: 0, x: 0, y: 0 },
        initialDeskop: { opacity: 0, x: 0, y: -200 },
        enter: { opacity: 1, x: 0, y: 0 },
    }


  return (
    <main className="flex bg-black justify-center z-20">
        <motion.section
            key={isMobile.toString()}
            variants={variants}
            initial={isMobile ? "initialMobile" : "initialDeskop"}
            animate="enter"
            transition={{ type: 'linear', duration: 1 }}
            className="text-gray-600 body-font pt-24"
        >
        {children}
        </motion.section>
    </main>
  )
}