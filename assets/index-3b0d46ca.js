import{r as b,g as he,R as me,s as p,u as ge,a,F as pe,j as v,L as B,H as Q}from"./index-36e20e6d.js";import{H as ye}from"./Header-088018af.js";import{F as we}from"./Footer-dd64ed7b.js";import{u as be,a as ve,L as xe,M as Se}from"./MotionOnScroll-f2ccde0b.js";import{m as Ee,A as ke,a as Re}from"./FramerMotions-63ea8490.js";const Le=Symbol(),X=Symbol(),M="a",_="w";let Pe=(e,t)=>new Proxy(e,t);const T=Object.getPrototypeOf,q=new WeakMap,ie=e=>e&&(q.has(e)?q.get(e):T(e)===Object.prototype||T(e)===Array.prototype),N=e=>typeof e=="object"&&e!==null,Oe=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(o=>{o.configurable=!0}),Object.create(T(e),t)},Y=e=>e[X]||e,ae=(e,t,o,i)=>{if(!ie(e))return e;let r=i&&i.get(e);if(!r){const g=Y(e);r=(n=>Object.values(Object.getOwnPropertyDescriptors(n)).some(m=>!m.configurable&&!m.writable))(g)?[g,Oe(g)]:[g],i==null||i.set(e,r)}const[s,c]=r;let f=o&&o.get(s);return f&&f[1].f===!!c||(f=((g,n)=>{const m={f:n};let E=!1;const h=(x,y)=>{if(!E){let k=m[M].get(g);if(k||(k={},m[M].set(g,k)),x===_)k[_]=!0;else{let S=k[x];S||(S=new Set,k[x]=S),S.add(y)}}},w={get:(x,y)=>y===X?g:(h("k",y),ae(Reflect.get(x,y),m[M],m.c)),has:(x,y)=>y===Le?(E=!0,m[M].delete(g),!0):(h("h",y),Reflect.has(x,y)),getOwnPropertyDescriptor:(x,y)=>(h("o",y),Reflect.getOwnPropertyDescriptor(x,y)),ownKeys:x=>(h(_),Reflect.ownKeys(x))};return n&&(w.set=w.deleteProperty=()=>!1),[w,m]})(s,!!c),f[1].p=Pe(c||s,f[0]),o&&o.set(s,f)),f[1][M]=t,f[1].c=o,f[1].p},se=(e,t,o,i)=>{if(Object.is(e,t))return!1;if(!N(e)||!N(t))return!0;const r=o.get(Y(e));if(!r)return!0;if(i){const c=i.get(e);if(c&&c.n===t)return c.g;i.set(e,{n:t,g:!1})}let s=null;try{for(const c of r.h||[])if(s=Reflect.has(e,c)!==Reflect.has(t,c),s)return s;if(r[_]===!0){if(s=((c,f)=>{const g=Reflect.ownKeys(c),n=Reflect.ownKeys(f);return g.length!==n.length||g.some((m,E)=>m!==n[E])})(e,t),s)return s}else for(const c of r.o||[])if(s=!!Reflect.getOwnPropertyDescriptor(e,c)!=!!Reflect.getOwnPropertyDescriptor(t,c),s)return s;for(const c of r.k||[])if(s=se(e[c],t[c],o,i),s)return s;return s===null&&(s=!0),s}finally{i&&i.set(e,{n:t,g:s})}},je=e=>ie(e)&&e[X]||null,Z=(e,t=!0)=>{q.set(e,t)},Ae=(e,t,o)=>{const i=[],r=new WeakSet,s=(c,f)=>{if(r.has(c))return;N(c)&&r.add(c);const g=N(c)&&t.get(Y(c));if(g){var n,m;if((n=g.h)==null||n.forEach(h=>{const w=`:has(${String(h)})`;i.push(f?[...f,w]:[w])}),g[_]===!0){const h=":ownKeys";i.push(f?[...f,h]:[h])}else{var E;(E=g.o)==null||E.forEach(h=>{const w=`:hasOwn(${String(h)})`;i.push(f?[...f,w]:[w])})}(m=g.k)==null||m.forEach(h=>{o&&!("value"in(Object.getOwnPropertyDescriptor(c,h)||{}))||s(c[h],f?[...f,h]:[h])})}else f&&i.push(f)};return s(e),i},W=e=>typeof e=="object"&&e!==null,P=new WeakMap,C=new WeakSet,ze=(e=Object.is,t=(n,m)=>new Proxy(n,m),o=n=>W(n)&&!C.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),i=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},r=new WeakMap,s=(n,m,E=i)=>{const h=r.get(n);if((h==null?void 0:h[0])===m)return h[1];const w=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return Z(w,!0),r.set(n,[m,w]),Reflect.ownKeys(n).forEach(x=>{if(Object.getOwnPropertyDescriptor(w,x))return;const y=Reflect.get(n,x),k={value:y,enumerable:!0,configurable:!0};if(C.has(y))Z(y,!1);else if(y instanceof Promise)delete k.value,k.get=()=>E(y);else if(P.has(y)){const[S,$]=P.get(y);k.value=s(S,$(),E)}Object.defineProperty(w,x,k)}),w},c=new WeakMap,f=[1,1],g=n=>{if(!W(n))throw new Error("object required");const m=c.get(n);if(m)return m;let E=f[0];const h=new Set,w=(u,d=++f[0])=>{E!==d&&(E=d,h.forEach(l=>l(u,d)))};let x=f[1];const y=(u=++f[1])=>(x!==u&&!h.size&&(x=u,S.forEach(([d])=>{const l=d[1](u);l>E&&(E=l)})),E),k=u=>(d,l)=>{const R=[...d];R[1]=[u,...R[1]],w(R,l)},S=new Map,$=(u,d)=>{if(({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&S.has(u))throw new Error("prop listener already exists");if(h.size){const l=d[3](k(u));S.set(u,[d,l])}else S.set(u,[d])},J=u=>{var d;const l=S.get(u);l&&(S.delete(u),(d=l[1])==null||d.call(l))},de=u=>(h.add(u),h.size===1&&S.forEach(([l,R],O)=>{if(({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&R)throw new Error("remove already exists");const z=l[3](k(O));S.set(O,[l,z])}),()=>{h.delete(u),h.size===0&&S.forEach(([l,R],O)=>{R&&(R(),S.set(O,[l]))})}),I=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),D=t(I,{deleteProperty(u,d){const l=Reflect.get(u,d);J(d);const R=Reflect.deleteProperty(u,d);return R&&w(["delete",[d],l]),R},set(u,d,l,R){const O=Reflect.has(u,d),z=Reflect.get(u,d,R);if(O&&(e(z,l)||c.has(l)&&e(z,c.get(l))))return!0;J(d),W(l)&&(l=je(l)||l);let V=l;if(l instanceof Promise)l.then(L=>{l.status="fulfilled",l.value=L,w(["resolve",[d],L])}).catch(L=>{l.status="rejected",l.reason=L,w(["reject",[d],L])});else{!P.has(l)&&o(l)&&(V=g(l));const L=!C.has(V)&&P.get(V);L&&$(d,L)}return Reflect.set(u,d,V,R),w(["set",[d],l,z]),!0}});c.set(n,D);const ue=[I,y,s,de];return P.set(D,ue),Reflect.ownKeys(n).forEach(u=>{const d=Object.getOwnPropertyDescriptor(n,u);"value"in d&&(D[u]=n[u],delete d.value,delete d.writable),Object.defineProperty(I,u,d)}),D})=>[g,P,C,e,t,o,i,r,s,c,f],[Me]=ze();function ce(e={}){return Me(e)}function _e(e,t,o){const i=P.get(e);({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!i&&console.warn("Please use proxy object");let r;const s=[],c=i[3];let f=!1;const n=c(m=>{if(s.push(m),o){t(s.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,f&&t(s.splice(0))}))});return f=!0,()=>{f=!1,n()}}function ee(e,t){const o=P.get(e);({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!o&&console.warn("Please use proxy object");const[i,r,s]=o;return s(i,r(),t)}var G={},De={get exports(){return G},set exports(e){G=e}},le={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=b;function Ve(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Ve,Ce=A.useState,Ne=A.useEffect,$e=A.useLayoutEffect,Ie=A.useDebugValue;function We(e,t){var o=t(),i=Ce({inst:{value:o,getSnapshot:t}}),r=i[0].inst,s=i[1];return $e(function(){r.value=o,r.getSnapshot=t,F(r)&&s({inst:r})},[e,o,t]),Ne(function(){return F(r)&&s({inst:r}),e(function(){F(r)&&s({inst:r})})},[e]),Ie(o),o}function F(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Be(e,o)}catch{return!0}}function Fe(e,t){return t()}var He=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Fe:We;le.useSyncExternalStore=A.useSyncExternalStore!==void 0?A.useSyncExternalStore:He;(function(e){e.exports=le})(De);const Ue=he(G),{use:te}=me,{useSyncExternalStore:Ke}=Ue,Te=(e,t)=>{const o=b.useRef();b.useEffect(()=>{o.current=Ae(e,t,!0)}),b.useDebugValue(o.current)},qe=new WeakMap;function fe(e,t){const o=t==null?void 0:t.sync,i=b.useRef(),r=b.useRef();let s=!0;const c=Ke(b.useCallback(n=>{const m=_e(e,n,o);return n(),m},[e,o]),()=>{const n=ee(e,te);try{if(!s&&i.current&&r.current&&!se(i.current,n,r.current,new WeakMap))return i.current}catch{}return n},()=>ee(e,te));s=!1;const f=new WeakMap;b.useEffect(()=>{i.current=c,r.current=f}),({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&Te(c,f);const g=b.useMemo(()=>new WeakMap,[]);return ae(c,f,g,qe)}const Ge=ce({opt:"homepage",setOption:e=>Ge.opt=e}),j=ce({st:!1,setTrue:()=>j.st=!0,setFalse:()=>j.st=!1,reverse:()=>j.st=!j.st}),Xe=p.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
`;function Ye(e){const t=ge(),{pathname:o}=t,i=e.options.filter(r=>r.path!==o);return a(pe,{children:a(Je,{children:a("div",{className:"nav",children:i.map((r,s)=>a("ul",{className:"nav__list",children:v("li",{className:"nav__item",children:[a("div",{className:"nav__icon",children:r.icon}),a("div",{className:"nav__link",children:r.link})]})},s))})})})}const Je=p.div`
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
`;function Qe(e){const t=fe(j),{st:o,setFalse:i}=t;return a(Ze,{children:a("div",{className:o?"opened":"closed",onClick:i,children:a(Ye,{options:e.options})})})}const Ze=p.nav`
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
`,et=({st:e,reverse:t})=>a(nt,{children:v("button",{onClick:()=>t(),children:[a("div",{className:e?"opened":"closed"}),a("div",{className:e?"opened":"closed"}),a("div",{className:e?"opened":"closed"})]})}),tt=et,nt=p.div`
  button {
    position: absolute;
    right: 0.1em;
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
    border: none;
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
`,ot={visible:{opacity:1,scale:1,transition:{duration:.7}},hidden:{opacity:0,scale:0}},rt=({children:e,variants:t})=>{const o=be(),[i,r]=ve();return b.useEffect(()=>{r?o.start("visible"):o.start("hidden")},[o,r]),a(at,{className:"box",ref:i,variants:t||ot,initial:"hidden",animate:o,children:e})},it=rt,at=p(Ee.div)``;function st(e){return b.createElement("svg",{viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto",...e},b.createElement("path",{fill:e.color,d:"M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 000 2.75l12.063 12.063a1.955 1.955 0 002.75 0l12.063-12.063a1.947 1.947 0 000-2.75L17.374 2.562A1.923 1.923 0 0016 2zm0 2.031L27.969 16 16 27.969 4.031 16l8.282-8.281 1.75 1.75A1.98 1.98 0 0014 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 104 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0022 18c1.104 0 1.999-.895 1.999-2a1.999 1.999 0 00-2.5-1.938L17.937 10.5A1.999 1.999 0 0016 8a1.98 1.98 0 00-.53.063l-1.75-1.75z"}))}function ct(e){return b.createElement("svg",{viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto",...e},b.createElement("path",{fill:e.color,d:"M16 6c-3.766 0-7.094.39-9.125.688-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188 2.04.296 5.379.687 9.125.687 3.746 0 7.086-.39 9.125-.688 1.68-.242 3.035-1.511 3.344-3.187.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0126.5 10.25c.242 1.32.5 3.277.5 5.75 0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 01-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 015.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 011.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844 7-4L23 16l-1.5-.875-7-4zm2 3.438L18.969 16 15 18.281z"}))}function lt(e){return b.createElement("svg",{viewBox:"0 0 576 512",width:e.width||"1em",length:e.height||"auto",...e},b.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}))}function ft(e){return b.createElement("svg",{viewBox:"0 0 512 512",width:e.width||"1em",length:e.height||"auto",...e},b.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"}))}function H(e){return b.createElement("svg",{viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto",...e},b.createElement("path",{fill:e.color,d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))}const dt=[{path:"/",icon:a(lt,{color:"#ffffff"}),link:a(B,{to:"/",children:"Homepage"})},{path:"/about",icon:a(H,{color:"#ffffff"}),link:a(B,{to:"/about",children:"About"})},{path:"/contact",icon:a(H,{color:"#ffffff"}),link:a(B,{to:"/contact",children:"Contact"})},{path:"/blog",icon:a(ft,{color:"#ffffff"}),link:a("a",{href:"https://gfouz.github.io/next-blog-2023",children:"Blog"})},{path:"/curriculum",icon:a(H,{color:"#ffffff"}),link:a(B,{to:"/curriculum",children:"Curriculum"})}];function ut(){fetch("fouzsummary.pdf").then(e=>{e.blob().then(t=>{const o=window.URL.createObjectURL(t);let i=document.createElement("a");i.href=o,i.download="fouzsummary.pdf",i.click()})})}const ht={visible:{transition:{duration:3},opacity:1},hidden:{opacity:0}},mt=`Hello my name is Giovani and i love knowledge or learning about new
things and i like to spend time listening to English music or making
things with the help of electronics. I also like to spend my time
creating react components and mixing styled-components and framer-motion
together to get the most advantages of both technologies and i 
get all of these benefits while still writing the CSS we know and love, 
just bound to individual components.
`,gt=`React has been my favorite choice over vue or any other framework,
however technology changes, and it changes very quickly so that i am
open-minded to new technologies in order to learn them and then also
take advantage of them. I currently use react libraries such as
react-hook-form, react-query, valtio, zustand, styled-components,
framer-motion and the popular react-router-dom. But i have recently heard
about Golang for server side and it will be a pleasure to learn it.`,pt=`<p>I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system has 
importance for the development of digital certification in Cuba.</p>
<p>(PKI) project: <a href="https://github.com/gfouz/pki-server-2023">
https://github.com/gfouz/pki-server-2023</a></p>`,yt=`Being a part of the JavaScript language, 
using React spawns lots of advantages. Products built with React are 
simple to scale, a single language used on the server/client/mobile 
side of things grants outstanding productivity, there are workflow 
patterns for convenient teamwork, UI code is readable and maintainable, 
and more. World-leading companies have used React and other JS technologies 
in some of the top market-defining products out there (Instagram, Reddit, 
and Facebook being the most vivid examples).`,wt=`Express lets you take away a lot of the complexities 
of Node.js while adding helpful functions to a Node.js HTTP server.
Instead of a large request handler function, Express allows us to handle requests 
by writing many small modular and maintainable functions.`;function $t(){const e=fe(j),{st:t,reverse:o}=e,[i,r]=b.useState(!1),s=()=>{ut()};return v(bt,{children:[v(vt,{bg:"#1b1f22",color:"#ffffff",children:["gfouz-",new Date().getFullYear(),a(tt,{st:t,reverse:o})]}),v(xt,{children:[a(xe,{image:"fadedgirl.jpg",centerBottom:!0}),v(oe,{children:[a(U,{children:v(Se,{variants:ht,column:!0,children:[a(ne,{children:"React JS"}),a(re,{dangerouslySetInnerHTML:{__html:yt}})]})}),a(Lt,{})]}),v(oe,{children:[a(U,{children:v(it,{children:[a(ne,{children:"Express JS"}),a(re,{dangerouslySetInnerHTML:{__html:wt}})]})}),a(jt,{})]})]}),v(Xe,{bg:"#efece7",children:[v(Rt,{children:[a(U,{children:a(St,{transition:{duration:2.5,delay:2},initial:{opacity:0},animate:{opacity:1},whileHover:{color:"#f1f1f1",backgroundColor:"#fc00a4",transition:{duration:.2}},onClick:s,onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:i?"download":"curriculum"})}),a(Et,{initial:{},animate:{rotateX:[180,360]},transition:{duration:1,delay:.5},children:a(Pt,{})})]}),v(K,{children:[a(Q,{upper:!0,bolder:!0,children:"Overview"}),v("p",{children:[" ",mt," "]})]}),v(K,{children:[a(Ot,{}),v("p",{children:[" ",gt," "]})]}),a(Q,{center:!0,bolder:!0,children:"PKI System"}),a(K,{children:a(kt,{dangerouslySetInnerHTML:{__html:pt}})}),v(At,{children:[v(zt,{children:["YouTube Channel",a(ct,{fontSize:"30px",color:"#c40550"})]}),v(Mt,{children:["Github Projects",a(st,{fontSize:"30px",color:"#222222"})]})]})]}),a(Qe,{options:dt}),v(we,{bg:"#1b1f22",color:"#c2c5aa",children:["Portfolio © ",new Date().getFullYear()]})]})}const bt=p.div`
  background-color: #1b1f22;
  @font-face {
    font-family: "insomnia";
    src: local("insomnia"), url("./fonts/insomnia.ttf") format("truetype");
    font-weight: bolder;
    font-display: block;
  }
  display: grid;
  grid-template-areas:
    "header "
    "main"
    "aside"
    "footer";
  grid-template-columns: 1fr;

  @media (min-width: 750px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "header  header  header"
        "main    main    aside"
        "footer  footer  footer";
    }
  }
`,vt=p(ye)`
  padding: 1.3em;
`,xt=p.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ne=p.h1`
  position: relative;
  color: ${e=>e.color||"#cccccc"};
  font-family: signika;
  font-size: 1.3em;
  letter-spacing: 5px;
  bottom: 0.2em;
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
`,St=p(ke)`
  color: #222222;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-family: calibri;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 10;
  background-color: #f1f1f1;
  box-shadow: 1px 1px 10px #000000;
`,Et=p(Re)`
  display: flex;
  justify-content: center;
  align-items: center;
`,kt=p.p`
  text-align: left;
  a {
    font-family: calibri;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,Rt=p.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,U=p.div`
  position: absolute;
  padding: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  flex-direction: column;
`,oe=p.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`,Lt=p.img.attrs({src:"./images/abstract.jpg",alt:"forReact"})`
  max-width: 100%;
  height: auto;
`,re=p.p`
  color: #cccccc;
  padding: 10px;
  border-radius: 10px;
  max-width: 600px;
  text-align: justify;
`,Pt=p.img.attrs({src:"./images/sidebar3.jpg",alt:"laptop"})`
  max-width: 100%;
  height: auto;
`,Ot=p.img.attrs({src:"./images/gfouz2.png",alt:"gfouz"})`
  max-width: 100%;
  height: auto;
  float: left;
  margin: -5px 5px;
`,jt=p.img.attrs({src:"./images/abstract.jpg",alt:"forExpress"})`
  max-width: 100%;
  height: auto;
`,K=p.div`
  text-align: left;
  color: #555555;
  border: none;
  max-width: 600px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: calibri;
  background-color: #efece7;
`,At=p.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: signika;
  background-color: #efece7;
`,zt=p.a.attrs({href:"https://youtube.com/@giovanifouz5033"})`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`,Mt=p.a.attrs({href:"https://github.com/gfouz"})`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`;export{$t as default};
