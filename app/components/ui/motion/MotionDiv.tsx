"use client"
import { motion, Variants, MotionProps, Transition } from 'framer-motion';

interface ParentComponentProps {
  children: React.ReactNode;
  variants?: Variants;
  animate?: string | MotionProps["animate"];
  initial?: string | MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: Transition;
  viewport?: any;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}


const MotionDiv: React.FC<ParentComponentProps> = ({ children, variants, animate, initial, className, viewport, whileInView, style, id, transition }) => {
  


  return (
    <motion.div
        id={id}
        className={className}
        variants={variants}
        whileInView={whileInView}
        transition={transition}
        animate={animate}
        viewport={viewport}
        initial={initial}
        style={style}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;