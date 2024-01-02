"use client"
import { motion, MotionProps, Transition } from 'framer-motion';

interface ParentComponentProps {
  children: React.ReactNode;
  animate?: string | MotionProps["animate"];
  initial?: string | MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: Transition;
  viewport?: any;
  className?: string;
  style?: React.CSSProperties;
  custom?: number;
  id?: string;
}


const MotionDivAddons: React.FC<ParentComponentProps> = ({ children, animate, initial="initial", className, viewport, whileInView="animation", style, id, transition, custom }) => {
  

const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: (i:number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.3, // incrementa el delay para cada elemento
        duration: 1,
        },
    }),
    };

  return (
    <motion.div
        id={id}
        className={className}
        variants={variants}
        whileInView={whileInView}
        transition={transition}
        animate={animate}
        custom={custom}
        viewport={viewport}
        initial={initial}
        style={style}
    >
      {children}
    </motion.div>
  );
};

export default MotionDivAddons;