import * as React from 'react';
import styled from 'styled-components';

import { switcher } from './store';
import { useSnapshot } from 'valtio';
import { useLocation } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { Aside } from './Aside';
import Sidebar from './Sidebar';
import Button from './Button';
import { IRoutesProps } from './constants';

interface ILayout {
  bg?: string;
  lbg?: string;
  text?: string;
  color?: string;
  options: IRoutesProps[];
  children?: React.ReactNode;
}

export default function Layout(props: ILayout) {
  const router = useLocation();
  const { pathname } = router;

  const [page, setPage] = React.useState('');
  const snap2 = useSnapshot(switcher);
  const { st, reverse, setFalse } = snap2;

  React.useEffect(() => {
    setPage(pathname === '/' ? 'homepage' : pathname.slice(1));
  }, [pathname]);

  return (
    <Container {...props}>
      <Header {...props}>
        <h2 className='header__title'>{props.text || 'portfolio'}</h2>
        <Button st={st} reverse={reverse} />
      </Header>
      <Sidebar options={props.options} />
      <main onClick={setFalse}>{props.children}</main>
      <Aside />
      <Footer {...props}>
        Gfouz {page} &copy; {new Date().getFullYear()}
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props: ILayout) => props.lbg};
  display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-rows: 60px 1fr 1fr 60px;
  @media (min-width: 700px) {
    & {
      grid-template-columns: 1fr;
      width: 100%;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
      grid-template-rows: 60px 1fr 60px;
      grid-template-columns: 1fr;
    }
  }

  main {
    grid-area: main;
    min-height: 100vh;
  }
  .option {
    font-size: 2em;
    font-weight: bolder;
    color: red;
  }
`;
