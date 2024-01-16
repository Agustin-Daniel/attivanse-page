"use client"
import { useIsSmall } from '@/hooks/utils/utils';
import { motion, Variants, MotionProps, Transition } from 'framer-motion';

interface MotionliProps {
  variants?: Variants;
  whileInView: MotionProps["whileInView"];
  transition?: Transition;
  viewport: any;
  custom?: number;
  initial: MotionProps["initial"];
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}


const Motionli: React.FC<MotionliProps> = ({ variants, whileInView="animation", viewport, custom, initial="initial", children, className, style, id, transition }) => {
    
    
    const waterfall = {
        initial: { opacity: 0, y: -15 },
        animation: (i:number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2 + 0.4,
            duration: 0.5,
          },
        }),
      };

    const realVariants = !!variants ? variants : waterfall

    const isMobile = useIsSmall()



  return (
    <motion.li
        key={isMobile.toString()}
        id={id} 
        className={className}
        variants={realVariants}
        whileInView={isMobile ? "" : whileInView}
        transition={transition}
        viewport={viewport}
        custom={custom}
        initial={isMobile ? "" : initial}
        style={style}
    >
      { children }
    </motion.li>
  );
};

export default Motionli;