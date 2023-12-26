"use client"
import { motion, Variants, MotionProps, Transition } from 'framer-motion';

interface MotionPProps {
  variants: Variants;
  whileInView: MotionProps["whileInView"];
  transition?: Transition;
  viewport?: any;
  custom?: number;
  initial: MotionProps["initial"];
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}


const MotionP: React.FC<MotionPProps> = ({ variants, whileInView="animation", viewport, custom, initial="initial", children, className, style, id, transition }) => {
  return (
    <motion.p 
        id={id}
        className={className}
        variants={variants}
        whileInView={whileInView}
        transition={transition}
        viewport={viewport}
        custom={custom}
        initial={initial}
        style={style}
    >
      { children }
    </motion.p>
  );
};

export default MotionP;