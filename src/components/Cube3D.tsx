import styled, { keyframes } from 'styled-components';
import { sides } from 'constants';

const spin = keyframes`
  from { transform: rotateY(0); }
  to { transform: rotateY(360deg); }
  `;

const Cube3d = (props) => {
  

  return (
    <Wrap >
      <Cube>
        <Front>
          <Image src='./images/pink.jpg' />
        </Front>
        <Back>
          <Image src='./images/pink.jpg' />
        </Back>
        <Top>
          <Image src='./images/pink.jpg' />
        </Top>
        <Bottom>
          <Image src='./images/pink.jpg' />
        </Bottom>
        <Left>
          <Image src='./images/pink.jpg' />
        </Left>
        <Right>
          <Image src='./images/pink.jpg' />
        </Right>
      </Cube>
    </Wrap>
  );
};

export default Cube3d;  

const Wrap = styled.div`
  width: 100%;
  position: sticky;
  top: 300px;
  perspective: 500px;
  perspective-origin: 80% 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
`;

const Cube = styled.div`
  position: relative;
  margin: 0 0 4em 0;
  width: 100px;
  transform-style: preserve-3d;
  animation: ${ spin } 10s forwards ease-in-out;
  animation-iteration-count: infinite;
  div {
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid #222222;
      }  
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    animation-play-state: paused;
  }
`;
const Front = styled.div`
  transform: translateZ(50px);
`;
const Back = styled.div`
  transform: translateZ(-50px) rotateY(180deg);
`;
const Left = styled.div`
  transform: rotateY(270deg) translateX(-50px);
  transform-origin: center left;
`;
const Right = styled.div`
  transform: rotateY(-270deg) translateX(50px);
  transform-origin: top right;
`;
const Top = styled.div`
  transform: rotateX(-90deg) translateY(-50px);
  transform-origin: top center;
`;
const Bottom = styled.div`
  transform: rotateX(90deg) translateY(50px);
  transform-origin: bottom;
`;
const Image = styled.img.attrs({ alt: '3DPicture' })`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
