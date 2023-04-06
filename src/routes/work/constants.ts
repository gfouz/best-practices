interface IProps {
  card: string;
  name: string;
  path: string;
}
type IProject = IProps[];

export const project: IProject = [
  {
    card: 'card-1',
    name: 'gfouz-blog',
    path: 'https://gfouz.github.io/next-blog-2023',
  },
  {
    card: 'card-2',
    name: 'react-best-practices',
    path: 'https://github.com/gfouz',
  },
  {
    card: 'card-3',
    name: 'wonderful-express',
    path: 'https://github.com/gfouz',
  },
];

export const attached = `React is open-sourced by Facebook just a shy a few years ago, 
it’s already become the number one choice for JavaScript devs around the globe. And i
have picked to work with this wonderful technology that brings so many advantages. However
Technology changes, and it changes quickly. I am open-minded to new technologies in order to
learn them and then also take advantage of them.`;
