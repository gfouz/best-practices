import{r as w,g as Oe,R as Re,s as y,u as ze,a as l,F as Pe,j as S,L as C,H as ie}from"./index-2f6e367c.js";import{H as Ae}from"./Header-af85637e.js";import{F as je}from"./Footer-0dc47660.js";import{u as Me,a as _e,L as De,M as We}from"./MotionOnScroll-d1e6a6eb.js";import{p as Be,v as He,i as Ve,d as Ce,u as Ie,w as Ne,a as I,b as Te,m as $e,A as Fe,c as qe}from"./FramerMotions-19e020cc.js";function Ue(e,t){var r;return typeof e=="string"?t?((r=t[e])!==null&&r!==void 0||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const T=new WeakMap;let R;function Ye(e,t){if(t){const{inlineSize:r,blockSize:n}=t[0];return{width:r,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Ke({target:e,contentRect:t,borderBoxSize:r}){var n;(n=T.get(e))===null||n===void 0||n.forEach(o=>{o({target:e,contentSize:t,get size(){return Ye(e,r)}})})}function Xe(e){e.forEach(Ke)}function Ge(){typeof ResizeObserver>"u"||(R=new ResizeObserver(Xe))}function Je(e,t){R||Ge();const r=Ue(e);return r.forEach(n=>{let o=T.get(n);o||(o=new Set,T.set(n,o)),o.add(t),R==null||R.observe(n)}),()=>{r.forEach(n=>{const o=T.get(n);o==null||o.delete(t),o!=null&&o.size||R==null||R.unobserve(n)})}}const $=new Set;let W;function Qe(){W=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};$.forEach(r=>r(t))},window.addEventListener("resize",W)}function Ze(e){return $.add(e),W||Qe(),()=>{$.delete(e),!$.size&&W&&(W=void 0)}}function et(e,t){return typeof e=="function"?Ze(e):Je(e,t)}const tt=50,se=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),nt=()=>({time:0,x:se(),y:se()}),ot={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ae(e,t,r,n){const o=r[t],{length:i,position:a}=ot[t],c=o.current,f=r.time;o.current=e["scroll"+a],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Be(0,o.scrollLength,o.current);const s=n-f;o.velocity=s>tt?0:He(o.current-c,s)}function rt(e,t,r){ae(e,"x",t,r),ae(e,"y",t,r),t.time=r}function it(e,t){let r={x:0,y:0},n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if(n instanceof SVGGraphicsElement&&"getBBox"in n){const{top:o,left:i}=n.getBBox();for(r.x+=i,r.y+=o;n&&n.tagName!=="svg";)n=n.parentNode}return r}const st={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Q={start:0,center:.5,end:1};function ce(e,t,r=0){let n=0;if(Q[e]!==void 0&&(e=Q[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?n=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?n=o/100*document.documentElement.clientWidth:e.endsWith("vh")?n=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(n=t*e),r+n}const at=[0,0];function ct(e,t,r,n){let o=Array.isArray(e)?e:at,i=0,a=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Q[e]?e:"0"]),i=ce(o[0],r,n),a=ce(o[1],t),i-a}const lt={x:0,y:0};function ft(e,t,r){let{offset:n=st.All}=r;const{target:o=e,axis:i="y"}=r,a=i==="y"?"height":"width",c=o!==e?it(o,e):lt,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},s={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let d=!t[i].interpolate;const p=n.length;for(let h=0;h<p;h++){const v=ct(n[h],s[a],f[a],c[i]);!d&&v!==t[i].interpolatorOffsets[h]&&(d=!0),t[i].offset[h]=v}d&&(t[i].interpolate=Ve(t[i].offset,Ce(n)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function dt(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function ut(e,t,r,n={}){return{measure:()=>dt(e,n.target,r),update:o=>{rt(e,r,o),(n.offset||n.target)&&ft(e,r,n)},notify:()=>t(r)}}const _=new WeakMap,le=new WeakMap,Y=new WeakMap,fe=e=>e===document.documentElement?window:e;function ht(e,{container:t=document.documentElement,...r}={}){let n=Y.get(t);n||(n=new Set,Y.set(t,n));const o=nt(),i=ut(t,e,o,r);if(n.add(i),!_.has(t)){const f=()=>{const d=performance.now();for(const p of n)p.measure();for(const p of n)p.update(d);for(const p of n)p.notify()};_.set(t,f);const s=fe(t);window.addEventListener("resize",f,{passive:!0}),t!==document.documentElement&&le.set(t,et(t,f)),s.addEventListener("scroll",f,{passive:!0})}const a=_.get(t),c=requestAnimationFrame(a);return()=>{var f;cancelAnimationFrame(c);const s=Y.get(t);if(!s||(s.delete(i),s.size))return;const d=_.get(t);_.delete(t),d&&(fe(t).removeEventListener("scroll",d),(f=le.get(t))===null||f===void 0||f(),window.removeEventListener("resize",d))}}function de(e,t){Ne(Boolean(!t||t.current))}const gt=()=>({scrollX:I(0),scrollY:I(0),scrollXProgress:I(0),scrollYProgress:I(0)});function mt({container:e,target:t,layoutEffect:r=!0,...n}={}){const o=Ie(gt);return(r?Te:w.useEffect)(()=>(de("target",t),de("container",e),ht(({x:a,y:c})=>{o.scrollX.set(a.current),o.scrollXProgress.set(a.progress),o.scrollY.set(c.current),o.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[]),o}function pt(e,t,r){w.useInsertionEffect(()=>e.on(t,r),[e,t,r])}const yt=Symbol(),ne=Symbol(),D="a",B="w";let wt=(e,t)=>new Proxy(e,t);const Z=Object.getPrototypeOf,ee=new WeakMap,me=e=>e&&(ee.has(e)?ee.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),F=e=>typeof e=="object"&&e!==null,vt=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(r=>{r.configurable=!0}),Object.create(Z(e),t)},oe=e=>e[ne]||e,pe=(e,t,r,n)=>{if(!me(e))return e;let o=n&&n.get(e);if(!o){const f=oe(e);o=(s=>Object.values(Object.getOwnPropertyDescriptors(s)).some(d=>!d.configurable&&!d.writable))(f)?[f,vt(f)]:[f],n==null||n.set(e,o)}const[i,a]=o;let c=r&&r.get(i);return c&&c[1].f===!!a||(c=((f,s)=>{const d={f:s};let p=!1;const h=(x,b)=>{if(!p){let L=d[D].get(f);if(L||(L={},d[D].set(f,L)),x===B)L[B]=!0;else{let E=L[x];E||(E=new Set,L[x]=E),E.add(b)}}},v={get:(x,b)=>b===ne?f:(h("k",b),pe(Reflect.get(x,b),d[D],d.c)),has:(x,b)=>b===yt?(p=!0,d[D].delete(f),!0):(h("h",b),Reflect.has(x,b)),getOwnPropertyDescriptor:(x,b)=>(h("o",b),Reflect.getOwnPropertyDescriptor(x,b)),ownKeys:x=>(h(B),Reflect.ownKeys(x))};return s&&(v.set=v.deleteProperty=()=>!1),[v,d]})(i,!!a),c[1].p=wt(a||i,c[0]),r&&r.set(i,c)),c[1][D]=t,c[1].c=r,c[1].p},ye=(e,t,r,n)=>{if(Object.is(e,t))return!1;if(!F(e)||!F(t))return!0;const o=r.get(oe(e));if(!o)return!0;if(n){const a=n.get(e);if(a&&a.n===t)return a.g;n.set(e,{n:t,g:!1})}let i=null;try{for(const a of o.h||[])if(i=Reflect.has(e,a)!==Reflect.has(t,a),i)return i;if(o[B]===!0){if(i=((a,c)=>{const f=Reflect.ownKeys(a),s=Reflect.ownKeys(c);return f.length!==s.length||f.some((d,p)=>d!==s[p])})(e,t),i)return i}else for(const a of o.o||[])if(i=!!Reflect.getOwnPropertyDescriptor(e,a)!=!!Reflect.getOwnPropertyDescriptor(t,a),i)return i;for(const a of o.k||[])if(i=ye(e[a],t[a],r,n),i)return i;return i===null&&(i=!0),i}finally{n&&n.set(e,{n:t,g:i})}},bt=e=>me(e)&&e[ne]||null,ue=(e,t=!0)=>{ee.set(e,t)},St=(e,t,r)=>{const n=[],o=new WeakSet,i=(a,c)=>{if(o.has(a))return;F(a)&&o.add(a);const f=F(a)&&t.get(oe(a));if(f){var s,d;if((s=f.h)==null||s.forEach(h=>{const v=`:has(${String(h)})`;n.push(c?[...c,v]:[v])}),f[B]===!0){const h=":ownKeys";n.push(c?[...c,h]:[h])}else{var p;(p=f.o)==null||p.forEach(h=>{const v=`:hasOwn(${String(h)})`;n.push(c?[...c,v]:[v])})}(d=f.k)==null||d.forEach(h=>{r&&!("value"in(Object.getOwnPropertyDescriptor(a,h)||{}))||i(a[h],c?[...c,h]:[h])})}else c&&n.push(c)};return i(e),n},K=e=>typeof e=="object"&&e!==null,z=new WeakMap,N=new WeakSet,xt=(e=Object.is,t=(s,d)=>new Proxy(s,d),r=s=>K(s)&&!N.has(s)&&(Array.isArray(s)||!(Symbol.iterator in s))&&!(s instanceof WeakMap)&&!(s instanceof WeakSet)&&!(s instanceof Error)&&!(s instanceof Number)&&!(s instanceof Date)&&!(s instanceof String)&&!(s instanceof RegExp)&&!(s instanceof ArrayBuffer),n=s=>{switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:throw s}},o=new WeakMap,i=(s,d,p=n)=>{const h=o.get(s);if((h==null?void 0:h[0])===d)return h[1];const v=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s));return ue(v,!0),o.set(s,[d,v]),Reflect.ownKeys(s).forEach(x=>{if(Object.getOwnPropertyDescriptor(v,x))return;const b=Reflect.get(s,x),L={value:b,enumerable:!0,configurable:!0};if(N.has(b))ue(b,!1);else if(b instanceof Promise)delete L.value,L.get=()=>p(b);else if(z.has(b)){const[E,q]=z.get(b);L.value=i(E,q(),p)}Object.defineProperty(v,x,L)}),v},a=new WeakMap,c=[1,1],f=s=>{if(!K(s))throw new Error("object required");const d=a.get(s);if(d)return d;let p=c[0];const h=new Set,v=(m,g=++c[0])=>{p!==g&&(p=g,h.forEach(u=>u(m,g)))};let x=c[1];const b=(m=++c[1])=>(x!==m&&!h.size&&(x=m,E.forEach(([g])=>{const u=g[1](m);u>p&&(p=u)})),p),L=m=>(g,u)=>{const k=[...g];k[1]=[m,...k[1]],v(k,u)},E=new Map,q=(m,g)=>{if(({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&E.has(m))throw new Error("prop listener already exists");if(h.size){const u=g[3](L(m));E.set(m,[g,u])}else E.set(m,[g])},re=m=>{var g;const u=E.get(m);u&&(E.delete(m),(g=u[1])==null||g.call(u))},Le=m=>(h.add(m),h.size===1&&E.forEach(([u,k],P)=>{if(({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&k)throw new Error("remove already exists");const M=u[3](L(P));E.set(P,[u,M])}),()=>{h.delete(m),h.size===0&&E.forEach(([u,k],P)=>{k&&(k(),E.set(P,[u]))})}),U=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),H=t(U,{deleteProperty(m,g){const u=Reflect.get(m,g);re(g);const k=Reflect.deleteProperty(m,g);return k&&v(["delete",[g],u]),k},set(m,g,u,k){const P=Reflect.has(m,g),M=Reflect.get(m,g,k);if(P&&(e(M,u)||a.has(u)&&e(M,a.get(u))))return!0;re(g),K(u)&&(u=bt(u)||u);let V=u;if(u instanceof Promise)u.then(O=>{u.status="fulfilled",u.value=O,v(["resolve",[g],O])}).catch(O=>{u.status="rejected",u.reason=O,v(["reject",[g],O])});else{!z.has(u)&&r(u)&&(V=f(u));const O=!N.has(V)&&z.get(V);O&&q(g,O)}return Reflect.set(m,g,V,k),v(["set",[g],u,M]),!0}});a.set(s,H);const ke=[U,b,i,Le];return z.set(H,ke),Reflect.ownKeys(s).forEach(m=>{const g=Object.getOwnPropertyDescriptor(s,m);"value"in g&&(H[m]=s[m],delete g.value,delete g.writable),Object.defineProperty(U,m,g)}),H})=>[f,z,N,e,t,r,n,o,i,a,c],[Et]=xt();function we(e={}){return Et(e)}function Lt(e,t,r){const n=z.get(e);({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!n&&console.warn("Please use proxy object");let o;const i=[],a=n[3];let c=!1;const s=a(d=>{if(i.push(d),r){t(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,c&&t(i.splice(0))}))});return c=!0,()=>{c=!1,s()}}function he(e,t){const r=z.get(e);({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!r&&console.warn("Please use proxy object");const[n,o,i]=r;return i(n,o(),t)}var te={},kt={get exports(){return te},set exports(e){te=e}},ve={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=w;function Ot(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Ot,zt=j.useState,Pt=j.useEffect,At=j.useLayoutEffect,jt=j.useDebugValue;function Mt(e,t){var r=t(),n=zt({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return At(function(){o.value=r,o.getSnapshot=t,X(o)&&i({inst:o})},[e,r,t]),Pt(function(){return X(o)&&i({inst:o}),e(function(){X(o)&&i({inst:o})})},[e]),jt(r),r}function X(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Rt(e,r)}catch{return!0}}function _t(e,t){return t()}var Dt=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_t:Mt;ve.useSyncExternalStore=j.useSyncExternalStore!==void 0?j.useSyncExternalStore:Dt;(function(e){e.exports=ve})(kt);const Wt=Oe(te),{use:ge}=Re,{useSyncExternalStore:Bt}=Wt,Ht=(e,t)=>{const r=w.useRef();w.useEffect(()=>{r.current=St(e,t,!0)}),w.useDebugValue(r.current)},Vt=new WeakMap;function be(e,t){const r=t==null?void 0:t.sync,n=w.useRef(),o=w.useRef();let i=!0;const a=Bt(w.useCallback(s=>{const d=Lt(e,s,r);return s(),d},[e,r]),()=>{const s=he(e,ge);try{if(!i&&n.current&&o.current&&!ye(n.current,s,o.current,new WeakMap))return n.current}catch{}return s},()=>he(e,ge));i=!1;const c=new WeakMap;w.useEffect(()=>{n.current=a,o.current=c}),({BASE_URL:"/best-practices/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&Ht(a,c);const f=w.useMemo(()=>new WeakMap,[]);return pe(a,c,f,Vt)}const Ct=we({opt:"homepage",setOption:e=>Ct.opt=e}),A=we({st:!1,setTrue:()=>A.st=!0,setFalse:()=>A.st=!1,reverse:()=>A.st=!A.st}),It=y.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
`;function Nt(e){const t=ze(),{pathname:r}=t,n=e.options.filter(o=>o.path!==r);return l(Pe,{children:l(Tt,{children:l("div",{className:"nav",children:n.map((o,i)=>l("ul",{className:"nav__list",children:S("li",{className:"nav__item",children:[l("div",{className:"nav__icon",children:o.icon}),l("div",{className:"nav__link",children:o.link})]})},i))})})})}const Tt=y.div`
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
`;function $t(e){const t=be(A),{st:r,setFalse:n}=t;return l(Ft,{children:l("div",{className:r?"opened":"closed",onClick:n,children:l(Nt,{options:e.options})})})}const Ft=y.nav`
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
`,qt=({st:e,reverse:t})=>l(Yt,{children:S("button",{onClick:()=>t(),children:[l("div",{className:e?"opened":"closed"}),l("div",{className:e?"opened":"closed"}),l("div",{className:e?"opened":"closed"})]})}),Ut=qt,Yt=y.div`
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
`,Kt={visible:{opacity:1,scale:1,transition:{duration:.7}},hidden:{opacity:0,scale:0}},Xt=({children:e,variants:t})=>{const r=Me(),[n,o]=_e();return w.useEffect(()=>{o?r.start("visible"):r.start("hidden")},[r,o]),l(Jt,{className:"box",ref:n,variants:t||Kt,initial:"hidden",animate:r,children:e})},Gt=Xt,Jt=y($e.div)``;function Qt(e){return w.createElement("svg",{viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto",...e},w.createElement("path",{fill:e.color,d:"M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 000 2.75l12.063 12.063a1.955 1.955 0 002.75 0l12.063-12.063a1.947 1.947 0 000-2.75L17.374 2.562A1.923 1.923 0 0016 2zm0 2.031L27.969 16 16 27.969 4.031 16l8.282-8.281 1.75 1.75A1.98 1.98 0 0014 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 104 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0022 18c1.104 0 1.999-.895 1.999-2a1.999 1.999 0 00-2.5-1.938L17.937 10.5A1.999 1.999 0 0016 8a1.98 1.98 0 00-.53.063l-1.75-1.75z"}))}function Zt(e){return w.createElement("svg",{viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto",...e},w.createElement("path",{fill:e.color,d:"M16 6c-3.766 0-7.094.39-9.125.688-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188 2.04.296 5.379.687 9.125.687 3.746 0 7.086-.39 9.125-.688 1.68-.242 3.035-1.511 3.344-3.187.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0126.5 10.25c.242 1.32.5 3.277.5 5.75 0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 01-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 015.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 011.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844 7-4L23 16l-1.5-.875-7-4zm2 3.438L18.969 16 15 18.281z"}))}function en(e){return w.createElement("svg",{viewBox:"0 0 576 512",width:e.width||"1em",length:e.height||"auto",...e},w.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}))}function tn(e){return w.createElement("svg",{viewBox:"0 0 512 512",width:e.width||"1em",length:e.height||"auto",...e},w.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"}))}function G(e){return w.createElement("svg",{viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto",...e},w.createElement("path",{fill:e.color,d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))}const nn=[{path:"/",icon:l(en,{color:"#ffffff"}),link:l(C,{to:"/",children:"Homepage"})},{path:"/about",icon:l(G,{color:"#ffffff"}),link:l(C,{to:"/about",children:"About"})},{path:"/contact",icon:l(G,{color:"#ffffff"}),link:l(C,{to:"/contact",children:"Contact"})},{path:"/blog",icon:l(tn,{color:"#ffffff"}),link:l("a",{href:"https://gfouz.github.io/next-blog-2023",children:"Blog"})},{path:"/curriculum",icon:l(G,{color:"#ffffff"}),link:l(C,{to:"/curriculum",children:"Curriculum"})}];function on(){fetch("fouzsummary.pdf").then(e=>{e.blob().then(t=>{const r=window.URL.createObjectURL(t);let n=document.createElement("a");n.href=r,n.download="fouzsummary.pdf",n.click()})})}const rn={visible:{transition:{duration:3},opacity:1},hidden:{opacity:0}},sn=`Hello my name is Giovani and i love knowledge or learning about new
things and i like to spend time listening to English music or making
things with the help of electronics. I also like to spend my time
creating react components and mixing styled-components and framer-motion
together to get the most advantages of both technologies and i 
get all of these benefits while still writing the CSS we know and love, 
just bound to individual components.
`,an=`React has been my favorite choice over vue or any other framework,
however technology changes, and it changes very quickly so that i am
open-minded to new technologies in order to learn them and then also
take advantage of them. I currently use react libraries such as
react-hook-form, react-query, valtio, zustand, styled-components,
framer-motion, chakra ui and the popular react-router-dom. But i have recently heard
about Golang for server side and it will be a pleasure to learn it too.`,cn=`<p>I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system has 
importance for the development of digital certification in Cuba.</p>
<p>(PKI) project: <a href="https://github.com/gfouz/pki-server-2023">
https://github.com/gfouz/pki-server-2023</a></p>`,ln=`Being a part of the JavaScript language, 
using React spawns lots of advantages. Products built with React are 
simple to scale and grants outstanding productivity, there are workflow 
patterns for convenient teamwork, UI code is readable and maintainable, 
and more. World-leading companies have used React and other JS technologies.`,fn=`Express lets you take away a lot of the complexities 
of Node.js while adding helpful functions to a Node.js HTTP server.
Instead of a large request handler function, Express allows us to handle requests 
by writing many small modular and maintainable functions.`;function Wn(){const[e,t]=w.useState(0),[r,n]=w.useState("red"),{scrollY:o}=mt();pt(o,"change",p=>{t(p),console.log("Page scroll: ",p)});const i=be(A),{st:a,reverse:c}=i,[f,s]=w.useState(!1),d=()=>{on()};return w.useEffect(()=>{e<600&&n("red"),e>600&&n("blue"),e>700&&n("black"),e>800&&n("yellow"),e>900&&n("green"),e>1e3&&n("gradient")},[e]),S(dn,{children:[S(un,{bg:"#232323",color:"#ffffff",children:["gfouz-",new Date().getFullYear(),l(Ut,{st:a,reverse:c})]}),S(hn,{children:[l(De,{image:"goldfish.jpg"}),S(Sn,{children:[l(xn,{}),S(bn,{children:[S(We,{variants:rn,column:!0,children:[l(Se,{children:"React JS"}),l(xe,{dangerouslySetInnerHTML:{__html:ln}})]}),S(Gt,{children:[l(gn,{children:"Express JS"}),l(mn,{dangerouslySetInnerHTML:{__html:fn}})]})]})]})]}),S(It,{bg:"#efece7",children:[S(vn,{children:[l(Ee,{children:l(pn,{transition:{duration:2.5,delay:2},initial:{opacity:0},animate:{opacity:1},whileHover:{color:"#222222",backgroundColor:"#fff000",transition:{duration:.2}},onClick:d,onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:f?"download":"curriculum"})}),l(yn,{initial:{},animate:{rotateX:[180,360]},transition:{duration:1,delay:.5},children:l(En,{})})]}),S(J,{children:[l(ie,{upper:!0,bolder:!0,children:"Overview"}),S("p",{children:[" ",sn," "]})]}),S(J,{children:[l(Ln,{}),S("p",{children:[" ",an," "]})]}),l(ie,{center:!0,bolder:!0,children:"PKI System"}),l(J,{children:l(wn,{dangerouslySetInnerHTML:{__html:cn}})}),S(kn,{children:[S(On,{children:["YouTube Channel",l(Zt,{fontSize:"30px",color:"#c40550"})]}),S(Rn,{children:["Github Projects",l(Qt,{fontSize:"30px",color:"#222222"})]})]}),l(zn,{className:r,children:l("h1",{children:e})})]}),l($t,{options:nn}),S(je,{bg:"#232323",color:"#c2c5aa",children:["Portfolio © ",new Date().getFullYear()]})]})}const dn=y.div`
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
  .red {
    background-image: linear-gradient(90deg, #200122 0%, #6f0000 100%);
  }
  .blue {
    background-image: linear-gradient(90deg, #20002c 0%, #cbb4d4 100%);
  }
  .black {
    background-image: linear-gradient(90deg, #304352 0%, #d7d2cc 100%);
  }
  .yellow {
    color: #ffffff;
    background-image: linear-gradient(90deg, #ba8b02 0%, #181818 100%);
  }
  .green {
    background-image: linear-gradient(90deg, #34e89e 0%, #0f3443 100%);
  }
  .gradient {
    background-image: linear-gradient(90deg, #000046 0%, #1cb5e0 100%);
  }
`,un=y(Ae)`
  padding: 1.3em;
`,hn=y.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Se=y.h1`
  position: relative;
  color: #444444;
  font-family: calibri;
  font-size: 1.3em;
  letter-spacing: 5px;
  bottom: 0.2em;
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
`,gn=y(Se)`
  color: #ffffff;
`,xe=y.p`
  color: #444444;
  font-weight: 550;
  max-width: 600px;
  text-align: justify;
  font-family: calibri;
  letter-spacing: 1.5px; 
`,mn=y(xe)`
  color: #f1f1f1;
`,pn=y(Fe)`
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
`,yn=y(qe)`
  display: flex;
  justify-content: center;
  align-items: center;
`,wn=y.p`
  text-align: left;
  a {
    font-family: calibri;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,vn=y.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ee=y.article`
  position: absolute;
  padding: 0 1em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,bn=y(Ee)`
  justify-content: space-evenly;
`,Sn=y.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`,xn=y.img.attrs({src:"./images/grass.jpg",alt:"forReact"})`
  max-width: 100%;
  height: auto;
`,En=y.img.attrs({src:"./images/threecolors.jpg",alt:"laptop"})`
  max-width: 100%;
  height: auto;
`,Ln=y.img.attrs({src:"./images/gfouz2.png",alt:"gfouz"})`
  max-width: 100%;
  height: auto;
  float: left;
  margin: -5px 5px;
`,J=y.div`
  text-align: left;
  color: #555555;
  border: none;
  max-width: 600px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: calibri;
  background-color: #efece7;
`,kn=y.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: signika;
  background-color: #efece7;
`,On=y.a.attrs({href:"https://youtube.com/@giovanifouz5033"})`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`,Rn=y.a.attrs({href:"https://github.com/gfouz"})`
  margin: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-weight: bolder;
`,zn=y.div`
  position: sticky;
  top:600px;
  width: 150px;
  height: 60px;
  line-height: 60px;
  color: #ffffff;
  border-radius: 10px;
  margin: 1em 0;
`;export{Wn as default};
