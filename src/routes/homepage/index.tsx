import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { useSnapshot } from 'valtio';

import { switcher } from 'components/store';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Aside } from 'components/Aside';
import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import { Headline } from 'components/Headline';
import Typewriter from 'components/Typewriter';
import ExpandingBar from 'components/ExpandingBar';

import SpyGlass from 'icons/SpyGlass';
import GitAlt from 'icons/GitAlt';
import Youtube from 'icons/Youtube';

import { Routes } from '../layout/Routes';
import { attached_1, attached_2, attached_3, experience } from './constant';

export default function Homepage() {
  const snap2 = useSnapshot(switcher);
  const { st, reverse } = snap2;
  return (
    <HomeContainer>
      <Header bg='#2a160f' color='#c2c5aa'>
        gfouz-{new Date().getFullYear()}
        <Button st={st} reverse={reverse} />
      </Header>

      <HomepageMain>
        <PictureContainer>
          <MainPicture />
          <ExpandingBar />
        </PictureContainer>
        <Headline size='1.3em' center color='#451a23' bolder spacing='5px' fontfam='signika' p='2em 0 0 0'>
            <Typewriter color='#451a23' text='Fullstack development with NodeJs' />
          </Headline>
          <SelfReminder>
            <Comment center >"{attached_3}"</Comment>
          </SelfReminder>
        <LogoContainer>
          <SpyGlass fontSize='40px' color='#451a23' />
        </LogoContainer>
        <SecondaryPictureContainer>
          <SecondaryPicture />
        </SecondaryPictureContainer>

        <Headline center bolder upper p='2em 0'>
          Technologies
        </Headline>
        <Marquee>
          <Headline bolder color='#451a23' spacing='6px' upper fontfam='signika'>
            ReactJS styled-components valtio react-query react-hook-form axios eslint prettier
            typescript ExpressJS
          </Headline>
        </Marquee>
      </HomepageMain>

      <Aside bg='#d3bb72'>
        <ProfileCard>
          <Headline upper>Overview</Headline>
          <p> {attached_1} </p>
        </ProfileCard>
        
        <ProfileCard>
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
            <Youtube fontSize='30px' color='#c40550' />
          </YoutubeLink>
          <GithubLink>
            Github Projects
            <GitAlt fontSize='30px' color='#222222' />
          </GithubLink>
        </RemoteLinks>
        
      </Aside>
      <Sidebar options={Routes} />
      <Footer bg='#2a160f' color='#c2c5aa'>
        Portfolio &copy; {new Date().getFullYear()}
      </Footer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
    }
  }
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
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
const Es6LiteralString = styled.p`
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`;
const PictureContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
`;
const SecondaryPictureContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #020203;
`;
const MainPicture = styled.img.attrs({ src: './images/workflow.jpg', alt: 'knightman' })`
  max-width: 100%;
  height: auto;
`;
const SecondaryPicture = styled.img.attrs({ src: './images/laptop.jpg', alt: 'second' })`
  max-width: 100%;
  height: auto;
`;
const ProfileCard = styled.div`
  text-align: left;
  color: #000000;
  border: none;
  max-width: 400px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: signika;
  background-color: #d3bb72;
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
  font-family: signika;
  background-color: #ffffff;
`;
const YoutubeLink = styled.a.attrs({ href: 'https://youtube.com/@giovanifouz5033' })`
  margin: 0 1em;
  color: #c40550;
  font-weight: bolder;
`;
const GithubLink = styled.a.attrs({ href: 'https://github.com/gfouz' })`
  margin: 0 1em;
  font-weight: bolder;
`;
const SelfReminder = styled.div`
  font-weight: bolder;
  font-family: signika;
`;



//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 
//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