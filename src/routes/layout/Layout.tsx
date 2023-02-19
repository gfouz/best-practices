import * as React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import Button from './Button';
import { switcher } from './store';
import { useSnapshot } from 'valtio';
import { IRoutesProps } from './constants';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

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
      <Footer {...props}>
        Gfouz {page} &copy; {new Date().getFullYear()}
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props: ILayout) => props.lbg};
  width: 100%;
  display: grid;
  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

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
