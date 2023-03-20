import styled from "styled-components";
import Layout from "../layout/Layout";
import { Routes } from "../layout/Routes";

import Text from "components/Highlighter";
import { Headline } from "components/Headline";
import { RowArranged } from "components/Containers";

import NodeIcon from "icons/Node";
import NpmIcon from "icons/Npm";
import HtmlIcon from "icons/Html";
import CssIcon from "icons/Css";
import ReactJs from "icons/ReactJs";

import { first_text, second_text, third_text, fourth_text } from "./text";

function About() {
  return (
    <>
      <Layout options={Routes}>
        <AboutContainer>
          <MainTitle>JSdeveloper</MainTitle>
          <PrimaryImage />
          <AvatarPicture />
          <ParagraphSection>
            <Paragraph>
              <Headline color="#444444" bolder>
                My outlook about programming.
              </Headline>
              <img
                className="article__avatar"
                src="./images/boldman.jpg"
                alt="emoji"
              />
              <p>{first_text}</p>
            </Paragraph>
            <Paragraph>
              <Headline color="#444444" bolder>
                A bit of my work.
              </Headline>
              <img
                className="article__avatar"
                src="./images/boldman.jpg"
                alt="emoji"
              />
              <Es6LiteralString
                dangerouslySetInnerHTML={{ __html: second_text }}
              />
            </Paragraph>
          </ParagraphSection>
          <SecondaryArticle>
            <img src="./images/piece.jpg" alt="pc" />
          </SecondaryArticle>
          <ParagraphSection>
            <Paragraph>
              <Headline color="#444444" bolder>
                CSS architecture
              </Headline>
              <img
                className="article__avatar"
                src="./images/boldman.jpg"
                alt="emoji"
              />
              <p>{third_text}</p>
            </Paragraph>
            <Paragraph>
              <Headline color="#444444" bolder>
                English language a beloved tool.
              </Headline>
              <img
                className="article__avatar"
                src="./images/boldman.jpg"
                alt="emoji"
              />
              <p>{fourth_text}</p>
            </Paragraph>
          </ParagraphSection>
          <TertiaryArticle>
            <TertiaryHealine upper bolder center p="2em" spacing="5px">
              Imagination & inspiration
            </TertiaryHealine>
            <img
              className="secondary__image"
              src="./images/spider.jpg"
              alt="spider"
            />
          </TertiaryArticle>

          <TechnologySection>
            <HtmlIcon />
            <CssIcon />
            <NpmIcon fontSize="35px" />
            <NodeIcon />
            <ReactJs fontSize="25px" />
          </TechnologySection>
        </AboutContainer>
      </Layout>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  @font-face {
    font-family: "signika";
    src: local("signika"), url("./fonts/signika.ttf") format("truetype");
    font-weight: bolder;
    font-display: block;
  }
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const PrimaryImage = styled.img.attrs({
  src: "./images/black1.jpg",
  alt: "leaves",
})`
  max-width: 100%;
  height: auto;
`;
const MainTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: signika;
  font-size: 3em;
  color: #ffcc66;
  white-space: nowrap;
  letter-spacing: 4px;
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
const ParagraphSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Es6LiteralString = styled.div`
  padding: 0 0.5em;
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`;
const Paragraph = styled.div`
  width: 450px;
  min-width: 320px;
  padding: 2em;
  text-align: left;
  .article__avatar {
    float: left;
  }
`;
const PrimaryArticle = styled(RowArranged)`
  justify-content: flex-start;
  padding: 0 4em;
`;
const SecondaryArticle = styled(RowArranged)`
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f5f5f5;
`;
const TertiaryArticle = styled(RowArranged)`
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fbfbfb;
`;
const TertiaryHealine = styled(Headline)`
  text-shadow: 1px 1px 10px #222222;
`;
const TechnologySection = styled(RowArranged)`
  padding: 6em 0;
  background-color: #fbfbfb;
`;
//#8bc34a
// light #cddc39
