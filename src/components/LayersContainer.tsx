import styled, { css } from "styled-components";

const halfSection = css`
  @media (min-width: 750px) {
    width: 50%;
  }
`;
const center = css`
 justify-content: center;
 align-items: center;
`;
const centerTop = css`
 justify-content: flex-start;
 align-items: center;
`;
const centerBottom = css`
 justify-content: flex-end;
 align-items: center;
`;
const leftTop = css`
 justify-content: flex-start;
 align-items: flex-start;
`;
const leftCenter = css`
 justify-content: center;
 align-items: flex-start;
`;
const leftBottom = css`
 justify-content: flex-end;
 align-items: flex-start;
`;
const rightTop = css`
 justify-content: flex-start;
 align-items: flex-start;
`;
const rightCenter = css`
 justify-content: center;
 align-items: flex-end;
`;
const rightBottom = css`
 justify-content: flex-end;
 align-items: flex-end;
`;


interface IProps {
  image?: string;
  align?: string;
  halfSection?: boolean;
  justify?: string;
  children?: React.ReactNode;
}

const LayersContainer = ( props: IProps ) => {
  const { children, ...rest } = props;
  return (
    <PictureContainer {...rest} >
      <SomePicture  {...rest} />
      <OverlapedContainer  {...rest} >
        {children}
      </OverlapedContainer>
    </PictureContainer>
  );
};

export default LayersContainer;

const PictureContainer = styled.div<IProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.halfSection && halfSection}
`;
const SomePicture = styled.img.attrs<IProps>((props) => ({
  src: `./images/${props.image}`,
  alt: "layersContainer",
}))`
  max-width: 100%;
  height: auto;
`;
const OverlapedContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  ${ props => props.center && center };
  ${ props => props.centerTop && centerTop };
  ${ props => props.centerBottom && centerBottom };
  ${ props => props.leftCenter && leftCenter };
  ${ props => props.leftTop && leftTop };
  ${ props => props.leftBottom && leftBottom };
  ${ props => props.rightCenter && rightCenter };
  ${ props => props.rightTop && rightTop };
  ${ props => props.rightBottom && rightBottom };
  flex-direction: column;
`;
