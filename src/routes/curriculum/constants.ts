export const overview: string = `Web Developer specializing in front end development.
<p>Experienced with all stages of the
development cycle for dynamic web projects. Versed in
programming languages such as HTML5, CSS, SCSS, JavaScript, TypeScript. </p>
<p> <a href="https://github.com/gfouz">Projects: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p>  `;

export const resumen: string = `<p>Desarrollador web enfocado en desarrollo front end.</p>
<p>Con experiencia en lenguajes de programación tales como HTML5, CSS, SCSS, JavaScript y Typescript.</p>
<p> <a href="https://github.com/gfouz">Proyectos: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p> 
`
export const standards: string[] = [
  'BEM (Block element modifier) as css architecture.',
  'Eslint for writing JavaScript and Typescript consistent code.',
  'Prettier for source code formatting. ',
  'Typescript.',
];
export const normas: string[] = [
  'BEM como arquitectura de css.',
  'Eslint para escribir código consistente.',
  'Prettier para formatear código fuente.',
  'Typescript'
  ]
export const experience: string = `Cuantico: Fullstack with Node Js.
<p>Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padrón, La Habana.</p> 
<p>Correo: <strong style='color: #008394'>cuanticosurl@gmail.com</strong></p> 
<p>I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system 
has great importance for the development of digital certification in Cuba.</p> 
<a href="https://github.com/gfouz/pki-server-2023.git">https://github.com/gfouz/pki-server-2023</a>`;

export const experiencia: string = `Cuantico: Fullstack Node Js
<p>Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padrón, La Habana. Correo:cuanticosurl@gmail.com</p>
<p>Trabajé en la primera fase de un sistema para generar certificados dígitales para Segurmática que es una
empresa de seguridad informática en Cuba. Trabajé en la creación o abstración de la base de datos, en este caso 
utilicé PostgreSQL y Sequelize para abstraer las tablas. También diseñé la REST API con sus rutas y controladores
para esto utilicé a Express y Node Js. Para el front end, utilicé a React y varias librerias muy populares, como 
react-query, react-hook-form, zustang, valtio y otras. Este sistema tiene importancia para el desarrollo de
la certificacion dígital en Cuba.</p>
<a href="https://github.com/gfouz/pki-server-2023.git">https://github.com/gfouz/pki-server-2023</a>`;

export const education: string = `Pre-university level.
<p>English language: self taught advanced level.</p>
<p>Self taught Knowledge about electronics and c++.</p>`;

export const educacion: string = `<p>Nivel pre-universitario</p>
<p>Nivel de Ingles: Avanzado:<a href="https://youtube.com/@giovanifouz5033">
https://youtube.com/@giovanifouz5033</a></p>
<p>Conocimientos autodidacta de electrónica y C plus plus.</p>
`;

export const technologies: string = `I currently use react-query, react-hook-form, zustang, valtio,
react-router-dom, and for css in js the popular styled-components.
Back-end: Express and ORM to abstract data bases.
<p><strong>Projects: </strong><a href="https://github.com/gfouz">https://github.com/gfouz</a></p>`;

export const tecnologias: string = `<p>Tengo dominio utilizando react-query, react-hook-form,
zustang, valtio, react-router-dom, and for css in js la popular styled-components. Back-end: Express 
 and Sequelize to abstract databases.</p>`;

export function fetchPdf( ) {
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


