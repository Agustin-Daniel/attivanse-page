"use client"
import { motion, Variants, MotionProps } from 'framer-motion';

interface MotionliProps {
  variants?: Variants;
  whileInView: MotionProps["whileInView"];
  viewport: { once: boolean };
  custom?: number;
  initial: MotionProps["initial"];
  className?: string;
  children: React.ReactNode;
}


const Motionli: React.FC<MotionliProps> = ({ variants, whileInView="animation", viewport, custom, initial="initial", children, className }) => {
    
    
    const waterfall = {
        initial: { opacity: 0, y: -15 },
        animation: (i:number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2 + 0.5,
            duration: 0.5,
          },
        }),
      };

    const realVariants = !!variants ? variants : waterfall



  return (
    <motion.li 
        className={className}
        variants={realVariants}
        whileInView={whileInView}
        viewport={viewport}
        custom={custom}
        initial={initial}
    >
      { children }
    </motion.li>
  );
};

export default Motionli;