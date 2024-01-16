"use client"
import { useIsSmall } from '@/hooks/utils/utils';
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
  

    const isMobile = useIsSmall()

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
        key={id + isMobile.toString()}
        id={id}
        className={className}
        variants={variants}
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

export default MotionDivAddons;