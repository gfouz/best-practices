import Home from './Home';
import Blog from './Blog';
import FileSearch from './FileSearch';
import { Link } from 'react-router-dom';

export interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

export const Routes: IRoutesProps[] = [
  {
    path: '/',
    icon: <Home color='#ffffff' />,
    link: <Link to='/'>Homepage</Link>,
  },
  {
    path: '/about',
    icon: <FileSearch color='#ffffff' />,
    link: <Link to='/about'>About</Link>,
  },
  {
    path: '/work',
    icon: <FileSearch color='#ffffff' />,
    link: <Link to='/work'>Work</Link>,
  },
  {
    path: '/blog',
    icon: <Blog color='#ffffff' />,
    link: <a href='https://gfouz.github.io/next-blog-2023'>Blog</a>,
  },
  {
    path: '/curriculum',
    icon: <FileSearch color='#ffffff' />,
    link: <Link to='/curriculum'>Curriculum</Link>,
  },
];
