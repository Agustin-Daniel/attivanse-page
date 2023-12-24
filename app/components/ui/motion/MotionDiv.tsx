"use client"
import { motion, Variants, MotionProps } from 'framer-motion';

interface ParentComponentProps {
  children: React.ReactNode;
  variants: Variants;
  animate: string | MotionProps["animate"];
  initial?: string | MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  viewport?: { once: boolean };
  className?: string;
}

const MotionDiv: React.FC<ParentComponentProps> = ({ children, variants, animate, initial, className, viewport, whileInView }) => {

  return (
    <motion.div
        className={className}
        variants={variants}
        whileInView={whileInView}
        animate={animate}
        viewport={viewport}
        initial={initial}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;