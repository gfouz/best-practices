import { useState } from "react";
import styled from "styled-components";
import { useSnapshot } from "valtio";

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
import { Subtitle } from "components/FramerMotions";
import { AnimatedContainer, AnimatedButton } from "components/FramerMotions";

import GitAlt from "icons/GitAlt";
import Youtube from "icons/Youtube";
//import NodeJs from "icons/NodeJs";

import { Routes } from "../layout/Routes";
import { TitleProps, fetchPdf } from "./constant";
import useMediaQuery from '../../hooks/useMediaQuery';
import {  reactVariant, styledWomanVariant } from "./constant";
import { attached_1, attached_2, experience } from "./constant";


export default function Homepage() {

  const isMobile = useMediaQuery('(max-width: 450px)');
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    fetchPdf();
  };

  return (
    <AboutContainer>
      <AboutHeader bg="#1b1f22" color="#ffffff">
        gfouz-{new Date().getFullYear()}
        <Button st={st} reverse={reverse} />
      </AboutHeader>

      <AboutMain>
        <LayersContainer image="colored.jpg" centerBottom >
        </LayersContainer>
        <SecondaryPictureContainer>
          <AbsoluteContainer>
            <MotionOnScroll variants={reactVariant} column>
              <LightTitle>React JS</LightTitle>
              <LightParagraph>
                I worked in the first phase of a system to generate digital
                certificates for Segurmática which is the information security
                company in Cuba. I participated in the creation or abstraction
                of the database in this case relational using PostgreSQL and
                Sequelize as ORM.
              </LightParagraph>
            </MotionOnScroll>
          </AbsoluteContainer>
          <SecondaryPicture />
        </SecondaryPictureContainer>
        <SecondaryPictureContainer>
          <AbsoluteContainer>
            <OnScrollMotion>
              <LightTitle>Express JS</LightTitle>
              <LightParagraph>
                I worked in the first phase of a system to generate digital
                certificates for Segurmática which is the information security
                company in Cuba. I participated in the creation or abstraction
                of the database in this case relational using PostgreSQL and
                Sequelize as ORM.
              </LightParagraph>
            </OnScrollMotion>
          </AbsoluteContainer>
          <TechnologiesPicture />
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
                color: "#f1f1f1",
                border: "1px solid #64003f",
                backgroundColor: "#fc00a4",
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
      </Aside>
      <Sidebar options={Routes} />
      <Footer bg="#1b1f22" color="#c2c5aa">
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

const MainSubtitle = styled(Subtitle)`
  position: relative;
  bottom: 0.7em;
  color: #f1f1f1;
  font-family: insomnia;
  font-size: 2rem;
  letter-spacing: 2px;
  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

const LightTitle = styled.h1<TitleProps>`
  position: relative;
  color: ${(props) => props.color || "#cccccc"};
  font-family: insomnia;
  font-size: 1.3em;
  letter-spacing: 5px;
  bottom: 0.2em;
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
`;

const DownloadButton = styled(AnimatedButton)`
  color: #222222;
  width: 120px;
  height: 40px;
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
const AbsoluteContainer = styled.div`
  position: absolute;
  padding: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  flex-direction: column;
`;

const SecondaryPictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SecondaryPicture = styled.img.attrs({
  src: "./images/abstract.jpg",
  alt: "forReact",
})`
  max-width: 100%;
  height: auto;
`;
const LightParagraph = styled.p`
  color: #cccccc;
  padding: 10px;
  border-radius: 10px;
  max-width: 600px;
  text-align: justify;
`;
const SidebarPicture = styled.img.attrs({
  src: "./images/sidebar3.jpg",
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
const TechnologiesPicture = styled.img.attrs({
  src: "./images/abstract.jpg",
  alt: "forExpress",
})`
  max-width: 100%;
  height: auto;
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
*/
