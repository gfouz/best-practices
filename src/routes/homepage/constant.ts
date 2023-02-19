import * as React from 'react';
import { keyframes } from 'styled-components';


export const drawerProps: React.CSSProperties = {
  height: '150px',
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70px',
};

export const attached_1 = `Hello my name is Giovani, i began learning c++ in 2017 and it was my
first experience with Arduino boards. But it was a kind of
hobby until year 2019 that i began studying web programming with a
better purpose in mind. So that Node js was my pick, i have been
studying back-end frameworks like Express, and related libraries to
afford security and functionality, besides very useful concepts to
reuse logic such as middlewares and i have had experience working with
ORM or ODM to abstract databases such as Sequelize or Mongoose. I have
designed and abstracted databases for a System that will afford PKI
services in Cuba. `;

export const attached_2 = `React is open-sourced by Facebook just a shy a few years ago, it’s
already become the number one choice for JavaScript devs around the
globe. And i have picked to work with this wonderful technology that
brings so many advantages. However Technology changes, and it changes
quickly. I am open-minded to new technologies in order to learn them
and then also take advantage of them. I currently use react libraries
such as react-hook-form, react-query, valtio, zustand,
styled-components and the popular react-router-dom.`;

export const attached_3 = `Tell me and I will forget, show me and I may
 remenber, involve me and I will understand`;

export const experience = `<p>I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system has 
great importance for the development of digital certification in Cuba.</p>
<p>(PKI) project: <a href="https://github.com/gfouz/pki-server-2023">
https://github.com/gfouz/pki-server-2023</a></p>`;

export const attached_1_spanish = `Hola, mi nombre es Giovani, comencé a aprender C++ en 2017 y fue mi
Primera experiencia con placas Arduino. Pero era una especie de
hobby hasta el año 2019 que comencé a estudiar programación web con un
mejor propósito en mente. Así que Node js fue mi elección, he estado
estudiar marcos de back-end como Express y bibliotecas relacionadas para
brindar seguridad y funcionalidad, además de conceptos muy útiles para
reutilizar lógica como middlewares y he tenido experiencia trabajando con
ORM u ODM para bases de datos abstractas como Sequelize o Mongoose. Tengo
bases de datos diseñadas y resumidas para un sistema que permitirá PKI
servicios en Cuba. `;

export const growing_height = keyframes`
  0% {
    height: 0px;
  }
  25% {
    height: 60px;
  }
  75% {
    height: 60px;
  }
  95% {
    height: 60px;
  }
  100% {
    height: 0px;
    display: none;
  }
`;
export const growing_weights = keyframes`
  0% {
    width: 0px;
    opacity: 1;
  }
  5% {
    width: 300px;
    opacity: 1;
  }

  25% {
    width: 300px;
    opacity: 1;
  }

  75% {
    width: 300px;
    opacity: 1;
  }
  95% {
    width: 0px;
    opacity: 1;
  }
  100% {
    width: 0px;
    opacity: 0;
  }
`;