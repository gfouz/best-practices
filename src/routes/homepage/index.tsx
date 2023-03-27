//import { useState } from "react";
import styled from "styled-components";

import { Footer } from "components/Footer";
import LayersContainer from "components/LayersContainer";
import AllLinks, { SimpleNavbar } from "components/SimpleNavbar";

import MotionOnScroll from "components/MotionOnScroll";
import { Subtitle, Paragraph  } from "components/FramerMotions";

import Wxplorer from 'components/Wxplorer';
import SpyGlass from 'icons/SpyGlass';

import useMediaQuery from './useMediaQuery';

import { mainTitleVariants, finalVariant, navbarVariant } from "./constant";
import { firstParagraphVariant, secondParagraphVariant } from "./constant";
import {
  attached_1,
  attached_2,
  attached_3,
  nodeJsLogoVariant,
} from "./constant";

function Homepage() {
  
  const isMobile = useMediaQuery('(max-width: 700px)');
  return (
    <HomepageContainer>
      <LayersContainer image="redplanet.jpg" center >
      
        <Wxplorer 
          fill='#c4b7b4' 
          strokeColor='#c4b7b4' 
          width={ isMobile ? '100' : undefined }
          height={ isMobile ? '100' : undefined }
          /> 
         <MainTitle
           variants={mainTitleVariants} 
           initial='initial'
           animate='animate'
          >
            
          fouzJs
         </MainTitle>
  
    
      </LayersContainer>
      <MotionOnScroll variants={navbarVariant}>
        <AutoNavbar>
          <Navbar>
            <AllLinks />
          </Navbar>
        </AutoNavbar>
      </MotionOnScroll>
      <PrimaryArticle>
        <PictureContainer>
          <PrimaryPicture />
        </PictureContainer>
        <ParagraphContainer>
          <MotionOnScroll variants={firstParagraphVariant}>
            <FirstParagraph dangerouslySetInnerHTML={{ __html: attached_1 }} />
          </MotionOnScroll>
        </ParagraphContainer>
      </PrimaryArticle>

      <SecondaryArticle>
        <ParagraphContainer>
          <MotionOnScroll variants={secondParagraphVariant}>
            <SecondParagraph dangerouslySetInnerHTML={{ __html: attached_2 }} />
          </MotionOnScroll>
        </ParagraphContainer>
        <LayersContainer image="school.jpg" halfSection centerBottom>
          <MotionOnScroll variants={nodeJsLogoVariant}>
            <NodeJsLogo />
          </MotionOnScroll>
        </LayersContainer>
      </SecondaryArticle>
      <LayersContainer image="coffeecup.png" center>
        <MotionOnScroll variants={finalVariant}>
          <ParagraphContainer>
            <FinalParagraph dangerouslySetInnerHTML={{ __html: attached_3 }}></FinalParagraph>
          </ParagraphContainer>
        </MotionOnScroll>
      </LayersContainer>
      <HomepageFooter>
        <SmallText>gfouz</SmallText>
        {<SpyGlass fontSize="15px" color="#f2f2f2" />}
        <SmallText>portfolio</SmallText>
        {new Date().getFullYear()}
      </HomepageFooter>
    </HomepageContainer>
  );
}

export default Homepage;

const HomepageContainer = styled.div`
  @font-face {
    font-family: "insomnia";
    src: local("insomnia"), url("./fonts/insomnia.ttf") format("truetype");
    font-weight: bolder;
    font-display: block;
  }
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const AutoNavbar = styled.div`
  font-weight: bolder;
  color: #f2f2f2;
  letter-spacing: 2px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #14191f;
  justify-content: space-evenly;
`;
const Navbar = styled(SimpleNavbar)``;

const MainTitle = styled(Subtitle)`
  color: #c4b7b4;
  font-family: iron wall;
  font-size: 8vw;
`;

const PrimaryArticle = styled.article`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const SecondaryArticle = styled(PrimaryArticle)`
  @media (max-width: 749px) {
    flex-direction: column-reverse;
  }
`;
const ParagraphContainer = styled.article.attrs({
  className: "ParagraphContainer",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555555;
  font-weight: bolder;
  font-family: calibri;
  padding: 1em;
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
  @media (min-width: 900px) {
    padding: 2em 3.5em;
  }
`;
const FirstParagraph = styled(Paragraph)`
  text-align: left;
  color: #444444;
  max-width: 600px;
  a {
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`;
const SecondParagraph = styled(FirstParagraph)``;
const FinalParagraph = styled(FirstParagraph)``;
const PictureContainer = styled.div`
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
`;


const PrimaryPicture = styled.img.attrs({
  src: "./images/freelancer.jpg",
  alt: "Primary",
})`
  max-width: 100%;
  height: auto;
`;

const NodeJsLogo = styled.img.attrs({
  src: "./images/rednodejs.png",
  alt: "NodeJs",
})`
  width: 300px;
  height: auto;
  position: relative;
  bottom: 10px;
`;

const HomepageFooter = styled(Footer)`
  color: #ffffff;
  background-color: #014a3c;
`;
const SmallText = styled.span`
  margin: 0 5px;
`;
//#8bc34a
// #EEEEEE #FFD368 #393D46 #212832

/*

 const MainTitle = styled(AnimatedText)`
  font-family: iron wall;
  font-size: 3em;
  @media (min-width: 500px) {
    font-size: 5em;
  }
`;*/
