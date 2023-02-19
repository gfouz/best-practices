var w=Object.defineProperty,_=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&m(e,n,t[n]);if(h)for(var n of h(t))j.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>_(e,k(t));import{s as r,u as g,j as o,F,a as l,r as f}from"./index.74d35351.js";import{p as u,u as x}from"./Routes.74ec1a16.js";function S(e){const t=g(),{pathname:n}=t,s=e.options.filter(i=>i.path!==n);return o(F,{children:o($,{children:o("div",{className:"nav",children:s.map((i,p)=>o("ul",{className:"nav__list",children:l("li",{className:"nav__item",children:[o("div",{className:"nav__icon",children:i.icon}),o("div",{className:"nav__link",children:i.link})]})},p))})})})}const $=r.div`
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .nav__list {
    margin: 1em 0;
  }
  .nav__item {
    display: flex;
  }
  .nav__icon {
    color: white;
    margin: 1.3em 1em 0 1em;
  }
  .nav__link {
    margin: 1em 1em 0 0;
    color: white;
  }
`,z=u({opt:"homepage",setOption:e=>z.opt=e}),a=u({st:!1,setTrue:()=>a.st=!0,setFalse:()=>a.st=!1,reverse:()=>a.st=!a.st});function C(e){const t=x(a),{st:n,setFalse:s}=t;return o(X,{children:o("div",{className:n?"opened":"closed",onClick:s,children:o(S,{options:e.options})})})}const X=r.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #00000099;
    transition: all 1s;
    transform: translateX(0);
    z-index: 10;
    width: 100%;
    @media (min-width: 600px) {
      width: 20%;
    }
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`,L=({st:e,reverse:t})=>o(A,{children:l("button",{onClick:()=>t(),children:[o("div",{className:e?"opened":"closed"}),o("div",{className:e?"opened":"closed"}),o("div",{className:e?"opened":"closed"})]})}),A=r.div`
  button {
    position: absolute;
    right: 0.6em;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 200px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  .opened {
    width: 1.5rem;
    height: 0.2rem;
    background: #00ffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    :nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  .closed {
    width: 1.5rem;
    height: 0.2rem;
    background: #fff4a3;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(0);
    }

    :nth-child(2) {
      opacity: 1;
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: rotate(0);
    }
  }
`,B=r.header`
  grid-area: header;
  line-height: 60px;
  height: 60px;
  text-align: center;
  color: ${e=>e.color||"#fff4a3"};
  background-color: ${e=>e.bg||"#000000"};
  letter-spacing: 5px;
  font-weight: bolder;
  text-transform: uppercase;
`,R=r.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${e=>e.color||"#fff4a3"};
  background-color: ${e=>e.bg||"#000000"};
`;function O(e){const t=g(),{pathname:n}=t,[s,i]=f.exports.useState(""),p=x(a),{st:v,reverse:b,setFalse:y}=p;return f.exports.useEffect(()=>{i(n==="/"?"homepage":n.slice(1))},[n]),l(D,d(c({},e),{children:[l(B,d(c({},e),{children:[o("h2",{className:"header__title",children:e.text||"portfolio"}),o(L,{st:v,reverse:b})]})),o(C,{options:e.options}),o("main",{onClick:y,children:e.children}),l(R,d(c({},e),{children:["Gfouz ",s," \xA9 ",new Date().getFullYear()]}))]}))}const D=r.div`
  background-color: ${e=>e.lbg};
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
`;r.div`
  border-radius: 5px;
  font-weight: bolder;
  padding: 3px 10px;
  margin: 0 0.2em;
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
`;r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;const P=r.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-item: center;
`;r.div`
  position: relative;
`;export{O as L,P as R};
