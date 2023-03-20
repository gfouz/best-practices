import React from "react";
import styled, { css } from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const column = css`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

interface Iprops {
  children: React.ReactNode;
  variants?: Variants | undefined;
}

const boxVariant = {
  visible: { transition: { duration: 2 }, y: 100 },
  hidden: { y: -100 },
};

const MotionOnScroll = ({ children, variants, width, column }: Iprops) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <StyledBox 
       ref={ref} 
       variants={variants} 
       initial="hidden" 
       animate={control}
       width={width}
       column
       >
      {children}
    </StyledBox>
  );
};

export default MotionOnScroll;

const StyledBox = styled(motion.div).attrs({className: "MotionOnScroll"})`
  width: ${ props => props.width };
  display: flex;
  justify-content: center;
  ${ props => (props.column && column) };
`;
