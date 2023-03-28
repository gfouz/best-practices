import{s as t,r as u,f as x,j as n,a as e,H as g}from"./index-36e20e6d.js";import{H as S}from"./Header-088018af.js";import{F as C}from"./Footer-dd64ed7b.js";const m=t.button`
  cursor: pointer;
  width: 160px;
  padding: 0.5em 0;
  margin: 0.5em;
  color: #ffffff;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: blue;
  &:hover {
    filter: drop-shadow(0 0 2em #f1f1f1);
  }
`,w=`Web Developer focused on React technologies.
<p>Experienced with all stages of the
development cycle for dynamic web projects. Knowledge on
programming languages such as HTML5, CSS, SCSS, JavaScript, TypeScript. </p>
<p> <a href="https://github.com/gfouz">Projects: https://github.com/gfouz</a> </p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p>  `,k=`<p>Desarrollador web enfocado en React y su ecosistema.</p>
<p>Con experiencia en lenguajes de programación tales como HTML5, CSS, SCSS, JavaScript y Typescript.</p>
<p> <a href="https://github.com/gfouz">Proyectos: https://github.com/gfouz</a> </p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p> 
`,z=["Typescript.","BEM (Block element modifier) as css architecture.","Eslint for writing JavaScript and Typescript consistent code.","Prettier for source code formatting. ","Pruebas unitaria: react-testing-library, vitest."],E=["Typescript","BEM como arquitectura de css.","Eslint para escribir código consistente.","Prettier para formatear código fuente.","Test driven development: react-testing-library, vitest."],T=`Cuantico: Fullstack with Node Js.
<p>Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padrón, La Habana.</p> 
<p>Correo: <strong style='color: #008394'>cuanticosurl@gmail.com</strong></p> 
<p>I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system 
has great importance for the development of digital certification in Cuba.</p> 
<a href="https://github.com/gfouz/pki-server-2023.git">https://github.com/gfouz/pki-server-2023</a>`,I=`Cuantico: Fullstack Node Js
<p>Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padrón, La Habana. Correo:cuanticosurl@gmail.com</p>
<p>Trabajé en la primera fase de un sistema para generar certificados dígitales para Segurmática que es una
empresa de seguridad informática en Cuba. Trabajé en la creación o abstración de la base de datos, en este caso 
utilicé PostgreSQL y Sequelize para abstraer las tablas. También diseñé la REST API con sus rutas y controladores
para esto utilicé a Express y Node Js. Para el front end, utilicé a React y varias librerias muy populares, como 
react-query, react-hook-form, zustand, valtio y otras. Este sistema tiene importancia para el desarrollo de
la certificacion dígital en Cuba.</p>
<a href="https://github.com/gfouz/pki-server-2023.git">https://github.com/gfouz/pki-server-2023</a>`,L=`Pre-university level.
<p>English language: self taught advanced level.</p>
<p>Self taught Knowledge about electronics and c++.</p>`,P=`<p>Nivel pre-universitario</p>
<p>Nivel de Ingles: Avanzado:<a href="https://youtube.com/@giovanifouz5033">
https://youtube.com/@giovanifouz5033</a></p>
<p>Conocimientos autodidacta de electrónica y C plus plus.</p>
`,j=`I currently use react-query, react-hook-form, zustand, valtio,
react-router-dom, and for css in js the popular styled-components.
Back-end: Express and ORM to abstract data bases.
<p><strong>Projects: </strong><a href="https://github.com/gfouz">https://github.com/gfouz</a></p>`,R=`<p>Tengo dominio utilizando react-query, react-hook-form,
zustand, valtio, react-router-dom, y para css en js la popular styled-components. Back-end: Express 
 and Sequelize to abstract databases.</p>`;function B(){fetch("fouzsummary.pdf").then(l=>{l.blob().then(d=>{const r=window.URL.createObjectURL(d);let i=document.createElement("a");i.href=r,i.download="fouzsummary.pdf",i.click()})})}function Y(){const[l,d]=u.useState(!1),[r,i]=u.useState(0),[a,f]=u.useState(!0),h=x(),b=()=>{d(!0),B()};function y(){h(-1)}function v(){f(o=>!o)}return u.useEffect(()=>{let o;return l&&r<100?o=setInterval(()=>{i(c=>c+1)},10):(d(!1),clearInterval(o),i(0)),()=>{clearInterval(o)}},[l,r]),n(H,{children:[e(M,{children:e(g,{bolder:!0,ml:"1em",center:!0,children:"gfouz curriculum"})}),n(F,{children:[e(N,{children:e(O,{})}),e(J,{children:n(U,{onClick:()=>v(),children:[a?e(q,{}):e(_,{}),a?"Traducir al Español":"Translate into English"]})}),e(s,{upper:!0,bolder:!0,mt:!0,children:a?"Overview":"Resumen"}),e(p,{dangerouslySetInnerHTML:{__html:a?w:k}}),e(s,{upper:!0,bolder:!0,mt:!0,children:a?"standards and rules":"normas o convenciones"}),e(A,{children:a?z.map((o,c)=>e("li",{children:o},c)):E.map((o,c)=>e("li",{children:o},c))}),e(s,{upper:!0,bolder:!0,mt:!0,children:a?"experience":"experiencia"}),e(p,{dangerouslySetInnerHTML:{__html:a?T:I}}),e(s,{upper:!0,bolder:!0,mt:!0,children:a?"EDUCATION OR OTHER SKILLS":"Educación u otras habilidades"}),e(p,{dangerouslySetInnerHTML:{__html:a?L:P}}),e(s,{upper:!0,bolder:!0,mt:!0,children:a?"LIBRARIES OR TECHNOLOGIES":"Tecnologías"}),e(p,{dangerouslySetInnerHTML:{__html:a?j:R}}),n(K,{children:[e(s,{upper:!0,bolder:!0,center:!0,mt:!0,color:"#222222",children:a?"Click button to download PDF file":"Pulse el botón para descargar PDF"}),n(Q,{children:[n(W,{onClick:b,children:[a?"Download PDF":"Descargar PDF"," ",r,"%"]}),e(G,{onClick:y,children:a?"Cancel":"Cancelar"})]}),e("div",{style:{width:`${r}%`,height:"2px",backgroundColor:"#06ade5",filter:"drop-shadow(2em 0 1em #ffffff)"}}),e(D,{children:"gfouz"})]})]})]})}const H=t.div`
  margin: 0 auto;
  max-width: 735px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px #999999;
  @font-face {
    font-family: "signika";
    src: local("signika"), url("./fonts/signika.ttf") format("truetype");
    font-weight: bolder;
    font-display: block;
  }
`,M=t(S)``,D=t(C)`
  color: #222222;
  background-color: transparent;
`,F=t.div``,p=t.div`
  padding: 0 0.5em;
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,s=t(g)`
  padding: 0.5em;
`,N=t.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`,O=t.img.attrs({src:"./images/gfouzcoffee.jpg",alt:"gfouz"})`
  max-width: 100%;
  height: auto;
  transition: 3s;
  &:hover {
    transform: scale(0.9);
    transition: 1s;
  }
`,q=t.img.attrs({src:"./images/spain.jpg",alt:"spainflag"})`
  max-width: 100%;
  height: 20px;
  margin: 0 5px;
`,_=t.img.attrs({src:"./images/uk.jpg",alt:"ukflag"})`
  max-width: 100%;
  height: 20px;
  margin: 0 5px;
`,A=t.ol`
  padding: 0 1.5em;
  display: flex;
  text-align: left;
  flex-direction: column;
`,J=t.div`
  display: flex;
  width: 100%;
  padding: 0 0.5em;
`,U=t.button`
  display: flex;
  align-items: center;
  width: 240px;
  height: 20px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  outline: none;
  color: #f1f1f1;
  background-color: #444444;
  font-weight: bolder;
  &:hover {
    filter: drop-shadow(0 0 2em #222222);
  }
`,K=t.div`
  padding: 1em 0;
  margin: 2em 0 0 0;

`,Q=t.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`,W=t(m)`
  margin: 0;
  background-color: #06ade5;
`,G=t(m)`
  margin: 0;
  color: #222222;
  background-color: #99999950;
`;export{Y as default};
