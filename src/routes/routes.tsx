import { lazy } from 'react';
import './routes.css';

const Homepage = lazy(() => import('./homepage/index'));
const About = lazy(() => import('./about/index'));
const Work = lazy(() => import('./work/index'));
const Curriculum = lazy(() => import('./curriculum/index'));
const NotFound = lazy(() => import('./notFound/index'));

export default [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'work',
    element: <Work />,
  },
  {
    path: 'curriculum',
    element: <Curriculum />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
