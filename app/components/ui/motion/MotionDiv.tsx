"use client"
import { useIsSmall } from '@/hooks/utils/utils';
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
  custom?: number;
  id?: string;
}


const MotionDiv: React.FC<ParentComponentProps> = ({ children, variants, animate, initial="initial", className, viewport, whileInView="animation", style, id, transition, custom }) => {
  

  const waterfall = {
    initial: { opacity: 0, y: -15 },
    animation: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.5,
      },
    }),
  };

  const isMobile = useIsSmall()

  const realVariants = !!variants ? variants : waterfall


  return (
    <motion.div
        key={isMobile.toString()}
        id={id}
        className={className}
        variants={realVariants}
        whileInView={isMobile ? "" : whileInView}
        transition={transition}
        animate={isMobile ? "" : animate}
        custom={custom}
        viewport={viewport}
        initial={isMobile ? "" : initial}
        style={style}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;