import styled, { keyframes } from 'styled-components';

import { RowArranged } from 'components/Containers';
import { Headline } from 'components/Headline';
import Suggestions from 'components/Suggestion';
import WebLink from 'components/Link';

import SpyGlass from 'icons/SpyGlass';
import { Routes } from '../layout/Routes';
import Layout from '../layout/Layout';
import { project, attached } from './constants';

//const tip = 'You may see my source code on Github!';
const tip2 = 'Here i show some technologies i currently use each day';

function Work() {
  return (
    <>
      <Layout options={Routes} bg='#0b514c' lbg='#f5f5f5'>
        <WorkContainer>
          <Headline center upper p='2em 0 0 0' spacing='7px'>
            Gfouz
          </Headline>
          <img src='./images/home.png' alt='from-home' />
          <GoldenLine />
          <Title color='#999999' size='1.5em' spacing='10px' upper center>
            working from home with
          </Title>
          <Suggestions tip={tip2}>
            <img src='./images/nodejs.jpg' alt='nodejs' />
          </Suggestions>
          <CardContainer>
            {project.map((item, index) => (
              <Card key={index} className={`card ${item.card}`}>
                <WebLink href={item.path} font='bolder' size='1.3em' uppercase>
                  {item.name}
                </WebLink>
              </Card>
            ))}
          </CardContainer>
          <Headline center upper bolder color='#999999'>
            {' '}
            Overview of my own opinion about technologies{' '}
          </Headline>
          <Paragraph p='1em 0.5em 4em 0.5em' fontfam='calibri'>
            {attached}
          </Paragraph>
          <LogoContainer>
            <SpyGlass fontSize='40px' color='#999999' />
          </LogoContainer>
        </WorkContainer>
      </Layout>
    </>
  );
}

export default Work;

const WorkContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #24242c;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  article {
    padding: 1em;
    text-align: left;
    max-width: 360px;
  }
  img {
    max-width: 300px;
    height: auto;
  }
  .list {
    li {
      list-style-type: none;
      font-style: italic;
      color: #444444;
    }
  }
`;
const movement = keyframes`
 from {opacity: 0};
 to { opacity: 1};
`;
const Title = styled(Headline)`
  animation: ${movement} 5s;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999999;
`;
const LogoContainer = styled(RowArranged)`
  justify-content: center;
  padding: 3em;
`;

const spread = keyframes`
 from {width: 0};
 to {width: calc(100% - 40px)};
`;
const GoldenLine = styled(Line)`
  background-color: #efe180;
  height: 2px;
  width: calc(100% - 40px);
  margin: 0.5em auto;
  animation: ${spread} 2s;
`;

const CardContainer = styled.div`
  width: 100%;
  margin: 4em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    color: #999999;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 400px;
    transition: 1s;
  }
  .card-1:hover {
    transition: 1s;
    color: #000000;
    background-image: url(./images/abstract.jpg);
  }
  .card-2:hover {
    transition: 1s;
    color: #000000;
    background-image: url(./images/mountain.jpg);
  }
  .card-3:hover {
    transition: 1s;
    color: #ffffff;
    background-image: url(./images/woman.jpg);
  }
`;
const Card = styled.div`
  width: 400px;
  min-width: 320px;
  height: 200px;
  margin: 1em 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #000000;
`;

const Paragraph = styled(Headline)`
  color: #999999;
`;

/*

<Suggestions tip={tip}>
                <RowArranged>
                  <Headline upper color='#222222' size='2.5em'  spacing='10px' center>
                    <WebLink href='' font='bolder' color='#ffffff'>
                      G<span style={{color: '#79cd39'}}>f</span>ouz
                    </WebLink>
                  </Headline>
                  <LogoContainer>
                    <SpyGlass fontSize='2.2em' color='#79cd39' />
                  </LogoContainer>
                </RowArranged>
              </Suggestions>
*/
