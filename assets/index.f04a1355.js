import{s as t,r as d,h as v,a as n,j as e,H as g}from"./index.90bcf35c.js";import{H as S,F as C}from"./Footer.ae22bfa4.js";const f=t.button`
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
`,E=`Web Developer specializing in front end development.
<p>Experienced with all stages of the
development cycle for dynamic web projects. Versed in
programming languages such as HTML5, CSS, SCSS, JavaScript, TypeScript. </p>
<p> <a href="https://github.com/gfouz">Projects: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p>  `,k=`<p>Desarrollador web enfocado en desarrollo front end.</p>
<p>Con experiencia en lenguajes de programaci\xF3n tales como HTML5, CSS, SCSS, JavaScript y Typescript.</p>
<p> <a href="https://github.com/gfouz">Proyectos: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p> 
`,w=["Typescript.","BEM (Block element modifier) as css architecture.","Eslint for writing JavaScript and Typescript consistent code.","Prettier for source code formatting. ","Pruebas unitaria: react-testing-library, vitest."],z=["Typescript","BEM como arquitectura de css.","Eslint para escribir c\xF3digo consistente.","Prettier para formatear c\xF3digo fuente.","Test driven development: react-testing-library, vitest."],T=`Cuantico: Fullstack with Node Js.
<p>Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padr\xF3n, La Habana.</p> 
<p>Correo: <strong style='color: #008394'>cuanticosurl@gmail.com</strong></p> 
<p>I worked in the first phase of a system to generate digital 
certificates for Segurm\xE1tica which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system 
has great importance for the development of digital certification in Cuba.</p> 
<a href="https://github.com/gfouz/pki-server-2023.git">https://github.com/gfouz/pki-server-2023</a>`,F=`Cuantico: Fullstack Node Js
<p>Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padr\xF3n, La Habana. Correo:cuanticosurl@gmail.com</p>
<p>Trabaj\xE9 en la primera fase de un sistema para generar certificados d\xEDgitales para Segurm\xE1tica que es una
empresa de seguridad inform\xE1tica en Cuba. Trabaj\xE9 en la creaci\xF3n o abstraci\xF3n de la base de datos, en este caso 
utilic\xE9 PostgreSQL y Sequelize para abstraer las tablas. Tambi\xE9n dise\xF1\xE9 la REST API con sus rutas y controladores
para esto utilic\xE9 a Express y Node Js. Para el front end, utilic\xE9 a React y varias librerias muy populares, como 
react-query, react-hook-form, zustang, valtio y otras. Este sistema tiene importancia para el desarrollo de
la certificacion d\xEDgital en Cuba.</p>
<a href="https://github.com/gfouz/pki-server-2023.git">https://github.com/gfouz/pki-server-2023</a>`,I=`Pre-university level.
<p>English language: self taught advanced level.</p>
<p>Self taught Knowledge about electronics and c++.</p>`,L=`<p>Nivel pre-universitario</p>
<p>Nivel de Ingles: Avanzado:<a href="https://youtube.com/@giovanifouz5033">
https://youtube.com/@giovanifouz5033</a></p>
<p>Conocimientos autodidacta de electr\xF3nica y C plus plus.</p>
`,P=`I currently use react-query, react-hook-form, zustand, valtio,
react-router-dom, and for css in js the popular styled-components.
Back-end: Express and ORM to abstract data bases.
<p><strong>Projects: </strong><a href="https://github.com/gfouz">https://github.com/gfouz</a></p>`,j=`<p>Tengo dominio utilizando react-query, react-hook-form,
zustand, valtio, react-router-dom, y para css en js la popular styled-components. Back-end: Express 
 and Sequelize to abstract databases.</p>`;function B(){fetch("fouzsummary.pdf").then(l=>{l.blob().then(u=>{const r=window.URL.createObjectURL(u);let i=document.createElement("a");i.href=r,i.download="fouzsummary.pdf",i.click()})})}function $(){const[l,u]=d.exports.useState(!1),[r,i]=d.exports.useState(0),[o,m]=d.exports.useState(!0),h=v(),b=()=>{u(!0),B()};function x(){h(-1)}function y(){m(a=>!a)}return d.exports.useEffect(()=>{let a;return l&&r<100?a=setInterval(()=>{i(c=>c+1)},10):(u(!1),clearInterval(a),i(0)),()=>{clearInterval(a)}},[l,r]),n(H,{children:[e(R,{children:e(g,{bolder:!0,ml:"1em",center:!0,children:"gfouz curriculum"})}),n(M,{children:[e(N,{children:e(O,{})}),e(J,{children:n(U,{onClick:()=>y(),children:[o?e(q,{}):e(_,{}),o?"Traducir al Espa\xF1ol":"Translate into English"]})}),e(s,{upper:!0,bolder:!0,mt:!0,children:o?"Overview":"Resumen"}),e(p,{dangerouslySetInnerHTML:{__html:o?E:k}}),e(s,{upper:!0,bolder:!0,mt:!0,children:o?"standards and rules":"normas o convenciones"}),e(A,{children:o?w.map((a,c)=>e("li",{children:a},c)):z.map((a,c)=>e("li",{children:a},c))}),e(s,{upper:!0,bolder:!0,mt:!0,children:o?"experience":"experiencia"}),e(p,{dangerouslySetInnerHTML:{__html:o?T:F}}),e(s,{upper:!0,bolder:!0,mt:!0,children:o?"EDUCATION OR OTHER SKILLS":"Educaci\xF3n u otras habilidades"}),e(p,{dangerouslySetInnerHTML:{__html:o?I:L}}),e(s,{upper:!0,bolder:!0,mt:!0,children:o?"LIBRARIES OR TECHNOLOGIES":"Tecnolog\xEDas"}),e(p,{dangerouslySetInnerHTML:{__html:o?P:j}}),n(K,{children:[e(s,{upper:!0,bolder:!0,center:!0,mt:!0,color:"#f1f1f1",children:o?"Click button to download PDF file":"Pulse el bot\xF3n para descargar PDF"}),n(Y,{children:[n(Q,{onClick:b,children:[o?"Download PDF":"Descargar PDF"," ",r,"%"]}),e(W,{onClick:x,children:o?"Cancel":"Cancelar"})]}),e("div",{style:{width:`${r}%`,height:"2px",backgroundColor:"#06ade5",filter:"drop-shadow(2em 0 1em #ffffff)"}}),e(D,{children:"gfouz"})]})]})]})}const H=t.div`
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
`,R=t(S)``,D=t(C)`

  color: #f1f1f1;
  background-color: transparent;
`,M=t.div``,p=t.div`
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
   transform: rotateY(180deg);
   transition: 3s;
  }
`,q=t.img.attrs({src:"./images/spain.jpg",alt:"spainflag"})`
  max-width: 100%;
  height: 30px;
  margin: 0 5px;
`,_=t.img.attrs({src:"./images/uk.jpg",alt:"ukflag"})`
  max-width: 100%;
  height: 30px;
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
  height: 50px;
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
 background-color: #333333;
`,Y=t.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`,Q=t(f)`
   margin: 0;
   background-color: #06ade5;
`,W=t(f)`
  margin: 0;
  color: #f1f1f1;
  background-color: #99999950;
`;export{$ as default};
