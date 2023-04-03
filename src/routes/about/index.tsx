import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSnapshot } from "valtio";
import { useScroll, useMotionValueEvent } from 'framer-motion';

import { switcher } from "components/store";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Aside } from "components/Aside";
import Sidebar from "components/Sidebar";
import Button from "components/Button";
import { Headline } from "components/Headline";
import OnScrollMotion from "components/OnScrollMotion";
import MotionOnScroll from "components/MotionOnScroll";
import LayersContainer from "components/LayersContainer";
import { AnimatedContainer, AnimatedButton } from "components/FramerMotions";

import GitAlt from "icons/GitAlt";
import Youtube from "icons/Youtube";
//import NodeJs from "icons/NodeJs";

import { Routes } from "../layout/Routes";
import { fetchPdf } from "./constant";
//import useMediaQuery from 'hooks/useMediaQuery';
import {  reactVariant } from "./constant";
import { attached_1, attached_2, experience, about_react, about_express } from "./constant";


export default function About() {

  //const isMobile = useMediaQuery('(max-width: 450px)');
  const[position, setPosition]= useState(0);
  const [colors, setColors]= useState('red');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
            setPosition(latest)
            console.log("Page scroll: ", latest)
      })
  
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    fetchPdf();
  };
  useEffect(()=>{
    position < 600 && setColors("red");
    position > 600 && setColors("blue");
    position > 700 && setColors("black");
    position > 800 && setColors("yellow");
    position > 900 && setColors("green");
    position > 1000 && setColors("gradient");
  }, [position]);
  return (
    <AboutContainer>
      <AboutHeader bg="#232323" color="#ffffff">
        gfouz-{new Date().getFullYear()}
        <Button st={st} reverse={reverse} />
      </AboutHeader>

      <AboutMain>
        <LayersContainer image="goldfish.jpg" ></LayersContainer>
        <SecondaryPictureContainer>
          <SecondaryPicture />
          <SecondaryArticle>
            <MotionOnScroll variants={reactVariant} column>
              <PrimaryTitle>React JS</PrimaryTitle>
              <PrimaryParagraph dangerouslySetInnerHTML={{ __html: about_react }}></PrimaryParagraph>
            </MotionOnScroll>
            <OnScrollMotion>
              <SecondaryTitle>Express JS</SecondaryTitle>
              <SecondaryParagraph dangerouslySetInnerHTML={{ __html: about_express }}></SecondaryParagraph>
            </OnScrollMotion>
          </SecondaryArticle>
        </SecondaryPictureContainer>
      </AboutMain>

      <Aside bg="#efece7">
        <PictureContainer>
          <AbsoluteContainer>
            <DownloadButton
              transition={{ duration: 2.5, delay: 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                color: "#222222",
                backgroundColor: "#fff000",
                transition: { duration: 0.2 },
              }}
              onClick={handleClick}
              onMouseEnter={() => {
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
              {show ? "download" : "curriculum"}
            </DownloadButton>
          </AbsoluteContainer>
          <AnimatedBox
            initial={{}}
            animate={{ rotateX: [180, 360] }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <SidebarPicture />
          </AnimatedBox>
        </PictureContainer>
        <ProfileCard>
          <Headline upper bolder>
            Overview
          </Headline>
          <p> {attached_1} </p>
        </ProfileCard>

        <ProfileCard>
          <SidebarAvatar />
          <p> {attached_2} </p>
        </ProfileCard>

        <Headline center bolder>
          PKI System
        </Headline>
        <ProfileCard>
          <Es6LiteralString dangerouslySetInnerHTML={{ __html: experience }} />
        </ProfileCard>

        <RemoteLinks>
          <YoutubeLink>
            YouTube Channel
            <Youtube fontSize="30px" color="#c40550" />
          </YoutubeLink>
          <GithubLink>
            Github Projects
            <GitAlt fontSize="30px" color="#222222" />
          </GithubLink>
        </RemoteLinks>
        <Sticky className={colors}><h1>{ position }</h1></Sticky>

      </Aside>
      <Sidebar options={Routes} />
      <Footer bg="#232323" color="#c2c5aa">
        Portfolio &copy; {new Date().getFullYear()}
      </Footer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background-color: #1b1f22;
  @font-face {
    font-family: "insomnia";
    src: local("insomnia"), url("./fonts/insomnia.ttf") format("truetype");
    font-weight: bolder;
    font-display: block;
  }
  display: grid;
  grid-template-areas:
    "header "
    "main"
    "aside"
    "footer";
  grid-template-columns: 1fr;

  @media (min-width: 750px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "header  header  header"
        "main    main    aside"
        "footer  footer  footer";
    }
  }
  .red {
    background-image: linear-gradient(90deg, #200122 0%, #6f0000 100%);
  }
  .blue {
    background-image: linear-gradient(90deg, #20002c 0%, #cbb4d4 100%);
  }
  .black {
    background-image: linear-gradient(90deg, #304352 0%, #d7d2cc 100%);
  }
  .yellow {
    color: #ffffff;
    background-image: linear-gradient(90deg, #ba8b02 0%, #181818 100%);
  }
  .green {
    background-image: linear-gradient(90deg, #34e89e 0%, #0f3443 100%);
  }
  .gradient {
    background-image: linear-gradient(90deg, #000046 0%, #1cb5e0 100%);
  }
`;
const AboutHeader = styled( Header )`
  padding: 1.3em;
`;
const AboutMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrimaryTitle = styled.h1`
  position: relative;
  color: #444444;
  font-family: calibri;
  font-size: 1.3em;
  letter-spacing: 5px;
  bottom: 0.2em;
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
`;
const SecondaryTitle = styled(PrimaryTitle)`
  color: #ffffff;
`;
const PrimaryParagraph = styled.p`
  color: #444444;
  font-weight: 550;
  max-width: 600px;
  text-align: justify;
  font-family: calibri;
  letter-spacing: 1.5px; 
`;
const SecondaryParagraph = styled(PrimaryParagraph)`
  color: #f1f1f1;
`;
const DownloadButton = styled(AnimatedButton)`
  color: #222222;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-family: calibri;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 10;
  background-color: #f1f1f1;
  box-shadow: 1px 1px 10px #000000;
`;
const AnimatedBox = styled(AnimatedContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Es6LiteralString = styled.p`
  text-align: left;
  a {
    font-family: calibri;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`;
const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AbsoluteContainer = styled.article`
  position: absolute;
  padding: 0 1em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SecondaryArticle = styled(AbsoluteContainer)`
  justify-content: space-evenly;
`;
const SecondaryPictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SecondaryPicture = styled.img.attrs({
  src: "./images/grass.jpg",
  alt: "forReact",
})`
  max-width: 100%;
  height: auto;
`;
const SidebarPicture = styled.img.attrs({
  src: "./images/threecolors.jpg",
  alt: "laptop",
})`
  max-width: 100%;
  height: auto;
`;
const SidebarAvatar = styled.img.attrs({
  src: "./images/gfouz2.png",
  alt: "gfouz",
})`
  max-width: 100%;
  height: auto;
  float: left;
  margin: -5px 5px;
`;

const ProfileCard = styled.div`
  text-align: left;
  color: #555555;
  border: none;
  max-width: 600px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: calibri;
  background-color: #efece7;
`;
const RemoteLinks = styled.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: signika;
  background-color: #efece7;
`;
const YoutubeLink = styled.a.attrs({
  href: "https://youtube.com/@giovanifouz5033",
})`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`;
const GithubLink = styled.a.attrs({ href: "https://github.com/gfouz" })`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`;
const Sticky = styled.div`
  position: sticky;
  top:600px;
  width: 150px;
  height: 60px;
  line-height: 60px;
  color: #ffffff;
  border-radius: 10px;
  margin: 1em 0;
`;


// git config user.name gfouz
// git config user.email gfouz1975@gmail.com
// git config user.password
/*
import { motion, useAnimation, Variants } from "framer-motion";

const svgVariants = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
}
const pathVariants = {
  visible: { transition: { duration: 3 }, pathLength: 1 },
  hidden: { pathLength: 0 },
}
c3b59b
fef7b8
0F4312
758793
*/

