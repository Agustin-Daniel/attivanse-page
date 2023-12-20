"use client"
import { motion, Variants, MotionProps } from 'framer-motion';

interface ParentComponentProps {
  children: React.ReactNode;
  variants: Variants;
  animate: string | MotionProps["animate"];
  initial?: string | MotionProps["initial"];
}

const MotionDiv: React.FC<ParentComponentProps> = ({ children, variants, animate, initial }) => {

  return (
    <motion.div
        variants={variants}
        animate={animate}
        initial={initial}
        viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;