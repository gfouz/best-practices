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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const OnScrollMotion = ({ children, variants }: Iprops) => {
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
    <StyledBox className='box' ref={ref} variants={ variants || boxVariant } initial='hidden' animate={control}>
      {children}
    </StyledBox>
  );
};

export default OnScrollMotion;

const StyledBox = styled(motion.div)``;
