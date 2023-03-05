import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface Iprops {
  children: React.ReactNode;
  variants?: Variants | undefined;
}

const boxVariant = {
  visible: { transition: { duration: 2 }, y:  100 },
  hidden: { y: -100 },
};

const MotionOnScroll = ({ children, variants }: Iprops) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <StyledBox className='box' ref={ref} variants={ variants } initial='hidden' animate={control}>
      {children}
    </StyledBox>
  );
};

export default MotionOnScroll;

const StyledBox = styled(motion.div)``;
