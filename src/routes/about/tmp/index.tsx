import { useState } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
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
import { Subtitle, AnimatedParagraph } from "components/FramerMotions";
import { AnimatedContainer, AnimatedButton } from "components/FramerMotions";

import SpyGlass from "icons/SpyGlass";
import GitAlt from "icons/GitAlt";
import Youtube from "icons/Youtube";

import { Routes } from "../layout/Routes";
import { TitleProps, fetchPdf } from "./constant";
import { mainSubtitleAnimation, reactVariant } from "./constant";
import { attached_1, attached_2, attached_3, experience } from "./constant";

export default function Homepage() {
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    fetchPdf();
  };

  return (
    <HomepageContainer>
      <Header bg="#001f46" color="#ffffff">
        gfouz-{new Date().getFullYear()}
        <Button st={st} reverse={reverse} />
      </Header>

      <HomepageMain>
        <PictureContainer>
          <AbsoluteContainer>
            <AnimatedMainSubtitle
              transition={{
                duration: 0.7,
              }}
              initial={{ opacity: 0 }}
              animate={mainSubtitleAnimation}
            >
              Node developer
            </AnimatedMainSubtitle>
            <AnimatedSubtitle
              transition={{ duration: 1, delay: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              gfouz portfolio
            </AnimatedSubtitle>
          </AbsoluteContainer>

          <MainPicture />
        </PictureContainer>
        <DeveloperProfile>
          <Headline
            size="1.3em"
            center
            color="#451a23"
            bolder
            spacing="5px"
            fontfam="calibri"
            p="2em 0 0 0"
          >
            <Description>Fullstack with node js</Description>
          </Headline>
          <LogoContainer>
            <SpyGlass fontSize="40px" color="#f44f03" />
          </LogoContainer>
        </DeveloperProfile>
        <SecondaryPictureContainer>
          <AbsoluteContainer>
            <MotionOnScroll variants={reactVariant}>
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
      </HomepageMain>

      <Aside bg="#efece7">
        <PictureContainer>
          <AbsoluteContainer>
            <DownloadButton
              transition={{ duration: 2.5, delay: 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.1,
                color: "#f1f1f1",
                backgroundColor: "#001f46",
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
            transition={{ duration: 1, delay: 1.3 }}
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
      <Footer bg="#001f46" color="#c2c5aa">
        Portfolio &copy; {new Date().getFullYear()}
      </Footer>
    </HomepageContainer>
  );
}

const HomepageContainer = styled.div`
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
const HomepageMain = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Comment = styled(Headline)`
  font-size: 13px;
`;
const AnimatedMainSubtitle = styled(AnimatedText)`
  position: relative;
  color: #ffffff;
  font-family: crowden;
  font-size: 1.5em;
  letter-spacing: 2px;
  @media (min-width: 500px) {
    font-size: 2em;
  }
`;
const AnimatedSubtitle = styled(AnimatedText)`
  position: relative;
  margin: 0.5em;
  color: #ffffff;
  font-weight: bolder;
  font-size: 1.2em;
  font-family: calibri;
  letter-spacing: 5px;
  z-index: 10;
`;
const LightTitle = styled.h1<TitleProps>`
  position: relative;
  color: ${(props) => props.color || "#cccccc"};
  font-family: crowden;
  font-size: 1.3em;
  letter-spacing: 5px;
  bottom: 0.2em;
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
`;
const DarkTitle = styled(LightTitle)`
  color: #000000;
  bottom: 0.5em;
`;

const DownloadButton = styled(AnimatedButton)`
  background-color: #f1f1f1;
  color: #222222;
  font-weight: bolder;
  font-family: calibri;
  letter-spacing: 2px;
  padding: 1em;
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 10;
`;
const Snippet = styled.span`
  color: #ffffff;
`;
const BlackText = styled(Snippet)`
  color: #222222;
`;
const AnimatedBox = styled(AnimatedContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Description = styled.h4`
  font-family: calibri;
  color: #000000;
  font-weight: bolder;
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
const DarkAbsoluteContainer = styled(AbsoluteContainer)`
  background-color: #00000099;
`;
const SecondaryPictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainPicture = styled.img.attrs({
  src: "./images/brown.jpg",
  alt: "primary",
})`
  max-width: 100%;
  height: auto;
`;

const DeveloperProfile = styled.div`
  background-color: #fafafc;
  width: 100%;
  padding: 2em 0;
`;
const SecondaryPicture = styled.img.attrs({
  src: "./images/black.jpg",
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
const DarkParagraph = styled(LightParagraph)`
  color: #222222;
`;
const SidebarPicture = styled.img.attrs({
  src: "./images/sidebar.jpg",
  alt: "laptop",
})`
  max-width: 100%;
  height: auto;
`;
const SidebarAvatar = styled.img.attrs({
  src: "./images/gfouz.png",
  alt: "gfouz",
})`
  max-width: 100%;
  height: auto;
  float: left;
  margin: -5px 5px;
`;
const TechnologiesPicture = styled.img.attrs({
  src: "./images/black2.jpg",
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
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
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
  color: #c40550;
  font-weight: bolder;
`;
const GithubLink = styled.a.attrs({ href: "https://github.com/gfouz" })`
  margin: 0 1em;
  font-weight: bolder;
`;

// git config user.name gfouz
// git config user.email gfouz1975@gmail.com
// git config user.password
/*

        <Marquee>
          <Headline bolder color='#451a23' spacing='6px' upper fontfam='signika'>
            ReactJS styled-components valtio react-query react-hook-form axios eslint prettier
            typescript ExpressJS
          </Headline>
        </Marquee>
        
*/
