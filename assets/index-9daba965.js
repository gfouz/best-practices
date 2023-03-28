import{s as e,j as a,F as g,a as t,L as d,r as n}from"./index-36e20e6d.js";import{F as x}from"./Footer-dd64ed7b.js";import{L as h,M as s}from"./MotionOnScroll-f2ccde0b.js";import{m as z,S as k,P as S}from"./FramerMotions-63ea8490.js";const L=()=>a(g,{children:[t(m,{children:t(d,{to:"/about",children:"about"})}),t(m,{children:t(d,{to:"/contact",children:"contact"})}),t(m,{children:t(d,{to:"/curriculum",children:"curriculum"})})]}),M=e.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`,m=e.li`
  list-style-type: none;
  a {
    text-decoration: none;
    color: #f1f1f1;
  }
`;function P(i){const[o,c]=n.useState(!1),{width:r,height:l,fill:b,thickness:y,strokeColor:v}=i;return n.useEffect(()=>{setTimeout(()=>{c(!0)},2200)},[]),t(g,{children:t("svg",{width:r||"170",height:l||"170",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:t(z.path,{fill:o?b:"none",stroke:v||"#ffffff",strokeWidth:y||"3",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:2},d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"})})})}function C(i){return n.createElement("svg",{viewBox:"0 0 512 512",width:i.width||"1em",length:"auto",...i},n.createElement("path",{fill:i.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}const j=i=>{const[o,c]=n.useState(!1);return n.useEffect(()=>{const r=window.matchMedia(i);r.matches!==o&&c(r.matches);const l=()=>c(r.matches);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o,i]),o},_={initial:{opacity:0},animate:{opacity:1,transition:{delay:2.5,duration:2.5}}},E={visible:{transition:{duration:3},opacity:1},hidden:{opacity:0}},F={visible:{transition:{duration:3},opacity:1},hidden:{opacity:0}},I={visible:{transition:{duration:2},rotateX:0},hidden:{rotateX:-90}},T={visible:{transition:{duration:1},width:"100%"},hidden:{width:0}},H={visible:{transition:{duration:.4,delay:.5},opacity:1},hidden:{opacity:0}},J=`I am web developer focused on React Js and the most recently
technologies related to this library such as framer-motion,
styled-components, chakra ui, zustand, valtio, react-router-dom,
react-hook-forms, react-query and wonderful libraries made specially
for react by its own creators.
 <a href="https://github.com/gfouz/best-practices.git"><b>Portfolio 2023</b><a>`,N=`I am also focused on Express Js, and related libraries to afford
security and functionality, besides very useful concepts to reuse
logic such as middlewares and i have had practical experience working
with ORM or ODM to abstract databases such as Sequelize or Mongoose. I
have also used libraries such as axios, bcrypt, jsonwebtoken, dotenv, joi and
others...
<a href="https://github.com/gfouz/pki-server-2023.git"><b>pki-server-2023</b><a>`,V=`I worked in the first phase of a system to generate digital 
certificates for Segurmática which is an information security company in Cuba. 
<a href="https://github.com/gfouz/pki-server-2023.git"><b>pki-server-2023</b><a>`;function tt(){const i=j("(max-width: 700px)");return a(A,{children:[a(h,{image:"redplanet.jpg",center:!0,children:[t(P,{fill:"#c4b7b4",strokeColor:"#c4b7b4",width:i?"100":void 0,height:i?"100":void 0}),t(R,{variants:_,initial:"initial",animate:"animate",children:"fouzJs"})]}),t(s,{variants:T,children:t(B,{children:t(O,{children:t(L,{})})})}),a(w,{children:[t(q,{children:t(G,{})}),t(f,{children:t(s,{variants:E,children:t(u,{dangerouslySetInnerHTML:{__html:J}})})})]}),a(D,{children:[t(f,{children:t(s,{variants:F,children:t(W,{dangerouslySetInnerHTML:{__html:N}})})}),t(h,{image:"school.jpg",halfSection:!0,centerBottom:!0,children:t(s,{variants:I,children:t(Q,{})})})]}),t(h,{image:"coffeecup.png",center:!0,children:t(s,{variants:H,children:t(f,{children:t(X,{dangerouslySetInnerHTML:{__html:V}})})})}),a(Y,{children:[t(p,{children:"gfouz"}),t(C,{fontSize:"15px",color:"#f2f2f2"}),t(p,{children:"portfolio"}),new Date().getFullYear()]})]})}const A=e.div`
  @font-face {
    font-family: "insomnia";
    src: local("insomnia"), url("./fonts/insomnia.ttf") format("truetype");
    font-weight: bolder;
    font-display: block;
  }
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`,B=e.div`
  font-weight: bolder;
  color: #f2f2f2;
  letter-spacing: 2px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #14191f;
  justify-content: space-evenly;
`,O=e(M)``,R=e(k)`
  color: #c4b7b4;
  font-family: iron wall;
  font-size: 8vw;
`,w=e.article`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`,D=e(w)`
  @media (max-width: 749px) {
    flex-direction: column-reverse;
  }
`,f=e.article.attrs({className:"ParagraphContainer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555555;
  font-weight: bolder;
  font-family: calibri;
  padding: 1em;
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
  @media (min-width: 900px) {
    padding: 2em 3.5em;
  }
`,u=e(S)`
  text-align: left;
  color: #444444;
  max-width: 600px;
  a {
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,W=e(u)``,X=e(u)``,q=e.div`
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
`,G=e.img.attrs({src:"./images/freelancer.jpg",alt:"Primary"})`
  max-width: 100%;
  height: auto;
`,Q=e.img.attrs({src:"./images/rednodejs.png",alt:"NodeJs"})`
  width: 300px;
  height: auto;
  position: relative;
  bottom: 10px;
`,Y=e(x)`
  color: #ffffff;
  background-color: #014a3c;
`,p=e.span`
  margin: 0 5px;
`;export{tt as default};
