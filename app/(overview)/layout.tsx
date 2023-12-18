"use client"
import { motion } from 'framer-motion';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
    }
    

  return (
    <main className="flex justify-center z-20 bg-black">
    <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', duration: 0.5 }}
        className="max-w-[1920px] w-full"
    >
        {children}
    </motion.div>
    </main>
  )
}