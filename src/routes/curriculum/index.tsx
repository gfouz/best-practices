import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Headline } from 'components/Headline';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { OneButton } from 'components/OneButton';
import { overview, standards, experience, education, technologies, fetchPdf} from './constants';
import { resumen, normas, experiencia, educacion, tecnologias} from './constants';

function Curriculum() {
  const [active, setActive]= React.useState( false );
  const [width, setWidth]= React.useState(0);
  const [idiom, setIdiom]= React.useState( true );
  const navigate = useNavigate();
  

  const onButtonClick = () => {
      setActive( true );
      fetchPdf();
   };

  function CancelhandleClick() {
    navigate(-1);
  }
  function idiomButtonClick() {
      setIdiom( ( state ) => !state );
  }
  React.useEffect(()=> {
   let interval: NodeJS.Timer | undefined = undefined; 
   if (active && width < 100) {
       interval = setInterval(() => {
        setWidth(( st )=> st + 1 );
      }, 10);
    } else {
      setActive( false );
      clearInterval(interval);
      setWidth(0)
    }
    return () => {
      clearInterval(interval);
    };

  }, [active, width])
  
  return (
    <SummaryContainer>
      <SummaryHeader>
        <Headline bolder ml='1em' center>
          gfouz curriculum
        </Headline>
      </SummaryHeader>
      <SummaryMain>
        <PictureContainer>
          <MainPicture />
        </PictureContainer>
        <IdiomButtonContainer>
          <IdiomButton onClick={ ()=> idiomButtonClick()}>
           { idiom ? <SpanishFlag /> : <UnitedKindomFlag />}
          </IdiomButton>
          <ButtonTag>{ idiom ? 'Traducir al Español': 'Translate into English'}</ButtonTag>
        </IdiomButtonContainer>
        <Subtitle upper bolder mt>
          {idiom  ? 'Overview': 'Resumen'}
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: idiom ? overview : resumen }} />
        <Subtitle upper bolder mt>
         { idiom ? 'standards and rules':'normas o convenciones'}
        </Subtitle>
        <SummaryList>
          {idiom ? standards.map( ( item, index) => (
            <li key={ index }>{ item }</li>
          )) : normas.map( ( item, index) => (
            <li key={ index }>{ item }</li>
          ))
        }
        </SummaryList>
        <Subtitle upper bolder mt>
          { idiom ? 'experience':'experiencia' }
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: idiom ? experience : experiencia }} />
        <Subtitle upper bolder mt>
         { idiom ? 'EDUCATION OR OTHER SKILLS': 'Educación u otras habilidades' }
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: idiom ? education : educacion }} />
        <Subtitle upper bolder mt>
         { idiom ? 'LIBRARIES OR TECHNOLOGIES':'Tecnologías' }
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: idiom ? technologies : tecnologias }} />
        <DownloadSection>
          <Subtitle upper bolder center mt  color='#f1f1f1'>
             {idiom ? 'Click button to download PDF file' : 'Pulse el botón para descargar PDF'}
          </Subtitle>
          <ButtonsContainer>
            <DownloadButton onClick={onButtonClick}>
             {idiom ? 'Download PDF' : 'Descargar PDF'} {width}%
            </DownloadButton>
            <CancelButton onClick={CancelhandleClick}>
               { idiom ? 'Cancel':'Cancelar'}
            </CancelButton>
          </ButtonsContainer>
        
        <div 
          style=
          {{ width: `${width}%`, height: '2px', backgroundColor:'#06ade5', filter: 'drop-shadow(2em 0 1em #ffffff)' }}
        >
        </div>
         <SummaryFooter >gfouz</SummaryFooter>
        </DownloadSection> 
       
      </SummaryMain>

    </SummaryContainer>
  );
}

export default Curriculum;

const SummaryContainer = styled.div`
  margin: 0 auto;
  max-width: 735px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px #999999;
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`;
const SummaryHeader = styled(Header)``;
const SummaryFooter = styled(Footer)`

  color: #f1f1f1;
  background-color: transparent;
`;
const SummaryMain = styled.div``;
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
const Subtitle = styled(Headline)`
  padding: 0.5em;
`;
const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainPicture = styled.img.attrs({ src: './images/gfouzcoffee.jpg', alt: 'gfouz' })`
  max-width: 100%;
  height: auto;
  transition: 3s;
  &:hover {
   transform: rotateY(180deg);
   transition: 3s;
  }
`;
const SpanishFlag = styled.img.attrs({ src: './images/spain.jpg', alt:'spainflag'})`
  max-width: 100%;
  height: 30px;
`;
const UnitedKindomFlag = styled.img.attrs({ src: './images/uk.jpg', alt: 'ukflag'})`
  max-width: 100%;
  height: 30px;
`;
const SummaryList = styled.ol`
  padding: 0 1.5em;
  display: flex;
  text-align: left;
  flex-direction: column;
`;
const IdiomButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0.5em;
`;
const IdiomButton = styled.button`
  height: 30px;
  border: none;
  outline: none;
  &:hover {
    filter: drop-shadow(0 0 2em #222222);
  }
`;
const ButtonTag = styled.h3`
  font-weight: bolder;
  margin: 0 1em;
`;
const DownloadSection = styled.div`
 padding: 1em 0;
 margin: 2em 0 0 0;
 background-color: #333333;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const DownloadButton = styled(OneButton)`
   margin: 0;
   background-color: #06ade5;
`;
const CancelButton = styled(OneButton)`
  margin: 0;
  color: #f1f1f1;
  background-color: #99999950;
`;

/*
npm init @eslint/config
npm install eslint-config-airbnb-typescript --save-dev
https://gfouz.github.io/react-elysium/


fetch('fouzsummary.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'fouzsummary.pdf';
        alink.click();
      });
    });
  };

*/
