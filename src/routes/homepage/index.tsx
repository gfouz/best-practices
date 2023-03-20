import { useState } from "react";
import styled from "styled-components";

import AllLinks, { SimpleNavbar } from "components/SimpleNavbar";
import { Footer } from "components/Footer";
import { Headline } from "components/Headline";
import LayersContainer from "components/LayersContainer";
import OnScrollMotion from "components/OnScrollMotion";
import MotionOnScroll from "components/MotionOnScroll";
import { Picture, Subtitle, Paragraph, Span } from "components/FramerMotions";
import { AnimatedContainer, AnimatedButton } from "components/FramerMotions";

import NodeJs from "icons/NodeJs";
import SpyGlass from "icons/SpyGlass";
import GitAlt from "icons/GitAlt";
import Youtube from "icons/Youtube";
import ReactJs from "icons/ReactJs";

import { Routes } from "../layout/Routes";
import { TitleProps, fetchPdf } from "./constant";
import { mainTitleAnimation, finalVariant } from "./constant";
import {
  firstParagraphVariant,
  secondParagraphVariant,
  navbarVariant,
} from "./constant";
import {
  attached_1,
  attached_2,
  attached_3,
  experience,
  nodeJsLogoVariant,
} from "./constant";

function Homepage() {
  return (
    <HomepageContainer>
      <LayersContainer image="blackhole.jpg" center >
        <ImageContainer align="flex-end" justify="flex-end">
          <MainPicture
            src="./images/spider.png"
            alt="resposive"
            transition={{ duration: 0.5, delay: 2.5 }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
          />
        </ImageContainer>
        <ImageContainer>
          <MainPictureTwo
            src="./images/blueplanet.jpg"
            alt="resposive"
            transition={{ duration: 0.5, delay: 4 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </ImageContainer>
        <TitleContainer>
          <MainTitle
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0 }}
            animate={mainTitleAnimation}
          >
            <Span
              transition={{
                duration: 2.5,
                delay: 1,
              }}
              initial={{ color: "#000000" }}
              animate={{ color: "#436EF7" }}
            >
              gfouzJs
            </Span>
          </MainTitle>
          <LogoContainer>
            <SpyGlass fontSize="40px" color="#436EF7" margin="0 5px" />
          </LogoContainer>
        </TitleContainer>
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
            <SecondParagraph dangerouslySetInnerHTML={{ __html: attached_1 }} />
          </MotionOnScroll>
        </ParagraphContainer>
        <LayersContainer image="school.jpg" halfSection centerBottom>
          <MotionOnScroll variants={nodeJsLogoVariant}>
            <NodeJsLogo />
          </MotionOnScroll>
        </LayersContainer>
      </SecondaryArticle>
      <LayersContainer image="coffeecup.png" center>
        <MotionOnScroll variants={finalVariant} >
          <ParagraphContainer>
            <FinalParagraph>
              I worked in the first phase of a system to generate digital
              certificates for Segurmática which is the information security
              company in Cuba. I participated in the creation or abstraction
            </FinalParagraph>
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
  background-color: #000000;
  justify-content: space-evenly;
`;
const Navbar = styled(SimpleNavbar)``;
const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: column;
`;
const TitleContainer = styled.div`
  text-align: left;
`;
const MainTitle = styled(Subtitle)`
  position: relative;
  font-family: iron wall;
  font-size: 10vw;
  margin: 0 1em;
`;
const TitleSpan = styled.span`
  color: #666666;
`;
const AnimatedSpan = styled(Subtitle)`
  color: #8a4af3;
`;
const LogoContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 2;
`;
const ParagraphTitle = styled(Subtitle)``;
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
const ParagraphContainer = styled.article.attrs({ className: "ParagraphContainer"})`
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
const FinalParagraph = styled(FirstParagraph)`

`;
const PictureContainer = styled.div`
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
`;

const MainPicture = styled(Picture)`
  width: 30%;
  height: auto;
`;
const MainPictureTwo = styled(Picture)`
  max-width: 100%;
  height: auto;
`;
const PrimaryPicture = styled.img.attrs({
  src: "./images/freelancer.jpg",
  alt: "Primary",
})`
  max-width: 100%;
  height: auto;
`;
const SecondaryPicture = styled.img.attrs({
  src: "./images/rednode.jpg",
  alt: "NodeJs",
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
const AvatarPicture = styled.img.attrs({
  src: "./images/gfouz.png",
  alt: "gfouz",
})`
  max-width: 100%;
  height: auto;
  float: left;
  margin: -5px 5px;
`;

const FinalPicture = styled.img.attrs({
  src: "./images/waves.jpg",
  alt: "final",
})`
  max-width: 100%;
  height: auto;
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
