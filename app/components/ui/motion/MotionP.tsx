"use client"
import { motion, Variants, MotionProps } from 'framer-motion';

interface MotionPProps {
  variants: Variants;
  whileInView: MotionProps["whileInView"];
  viewport: { once: boolean };
  custom?: number;
  initial: MotionProps["initial"];
  className?: string;
  children: React.ReactNode;
}


const MotionP: React.FC<MotionPProps> = ({ variants, whileInView="animation", viewport, custom, initial="initial", children, className }) => {
  return (
    <motion.p 
        className={className}
        variants={variants}
        whileInView={whileInView}
        viewport={viewport}
        custom={custom}
        initial={initial}
    >
      { children }
    </motion.p>
  );
};

export default MotionP;