import{C as a,j as I,a as w,s as y,r as m}from"./index-bb6e9ed9.js";import{e as T,s as z,f as A,u as M,b as O,m as V}from"./FramerMotions-18ed8c31.js";const L=a`
  transition: transform 200ms ease-in;
  &:hover{
  transform: scale(1.2);
 }
 z-index:10;
`,_=a`
  @media (min-width: 750px) {
    width: 50%;
  }
`,P=a`
  justify-content: center;
  align-items: center;
`,N=a`
  justify-content: flex-start;
  align-items: center;
`,W=a`
  justify-content: flex-end;
  align-items: center;
`,q=a`
  justify-content: flex-start;
  align-items: flex-start;
`,D=a`
  justify-content: center;
  align-items: flex-start;
`,F=a`
  justify-content: flex-end;
  align-items: flex-start;
`,G=a`
  justify-content: flex-start;
  align-items: flex-start;
`,H=a`
  justify-content: center;
  align-items: flex-end;
`,J=a`
  justify-content: flex-end;
  align-items: flex-end;
`,K=t=>{const{children:n,image:e,zoom:s}=t;return I(Q,{...t,children:[w(U,{image:e,zoom:s}),w(X,{...t,children:n})]})},ft=K,Q=y.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  ${t=>t.halfSection&&_}
  .background-image {
    max-width: 100%;
    height: auto;
  }
`,U=y.img.attrs(t=>({src:`./images/${t.image}`,alt:"anyImage"}))`
 max-width: 100%;
 height: auto;
 ${t=>t.zoom&&L};
`,X=y.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  ${t=>t.center&&P};
  ${t=>t.centerTop&&N};
  ${t=>t.centerBottom&&W};
  ${t=>t.leftCenter&&D};
  ${t=>t.leftTop&&q};
  ${t=>t.leftBottom&&F};
  ${t=>t.rightCenter&&H};
  ${t=>t.rightTop&&G};
  ${t=>t.rightBottom&&J};
  flex-direction: column;
`;function Y(){const t=new Set,n={subscribe(e){return t.add(e),()=>void t.delete(e)},start(e,s){const o=[];return t.forEach(i=>{o.push(T(i,e,{transitionOverride:s}))}),Promise.all(o)},set(e){return t.forEach(s=>{z(s,e)})},stop(){t.forEach(e=>{A(e)})},mount(){return()=>{n.stop()}}};return n}function Z(){const t=M(Y);return O(t.mount,[]),t}const k=Z,j=new Map,x=new WeakMap;let E=0,tt;function et(t){return t?(x.has(t)||(E+=1,x.set(t,E.toString())),x.get(t)):"0"}function nt(t){return Object.keys(t).sort().filter(n=>t[n]!==void 0).map(n=>`${n}_${n==="root"?et(t.root):t[n]}`).toString()}function st(t){let n=nt(t),e=j.get(n);if(!e){const s=new Map;let o;const i=new IntersectionObserver(c=>{c.forEach(r=>{var u;const h=r.isIntersecting&&o.some(f=>r.intersectionRatio>=f);t.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=h),(u=s.get(r.target))==null||u.forEach(f=>{f(h,r)})})},t);o=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:n,observer:i,elements:s},j.set(n,e)}return e}function ot(t,n,e={},s=tt){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const u=t.getBoundingClientRect();return n(s,{isIntersecting:s,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:o,observer:i,elements:c}=st(e);let r=c.get(t)||[];return c.has(t)||c.set(t,r),r.push(n),i.observe(t),function(){r.splice(r.indexOf(n),1),r.length===0&&(c.delete(t),i.unobserve(t)),c.size===0&&(i.disconnect(),j.delete(o))}}function rt({threshold:t,delay:n,trackVisibility:e,rootMargin:s,root:o,triggerOnce:i,skip:c,initialInView:r,fallbackInView:u,onChange:h}={}){var f;const[g,R]=m.useState(null),v=m.useRef(),[b,C]=m.useState({inView:!!r,entry:void 0});v.current=h,m.useEffect(()=>{if(c||!g)return;let d;return d=ot(g,(B,$)=>{C({inView:B,entry:$}),v.current&&v.current(B,$),$.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:s,threshold:t,trackVisibility:e,delay:n},u),()=>{d&&d()}},[Array.isArray(t)?t.toString():t,g,o,s,i,c,e,u,n]);const p=(f=b.entry)==null?void 0:f.target,S=m.useRef();!g&&p&&!i&&!c&&S.current!==p&&(S.current=p,C({inView:!!r,entry:void 0}));const l=[R,b.inView,b.entry];return l.ref=l[0],l.inView=l[1],l.entry=l[2],l}const it=a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ct=({children:t,variants:n,width:e,column:s})=>{const o=k(),[i,c]=rt();return m.useEffect(()=>{c?o.start("visible"):o.start("hidden")},[o,c]),w(at,{ref:i,variants:n,initial:"hidden",animate:o,width:e,column:s,children:t})},dt=ct,at=y(V.div).attrs({className:"MotionOnScroll"})`
  width: ${t=>t.width};
  display: flex;
  justify-content: center;
  ${t=>t.column&&it};
`;export{ft as L,dt as M,rt as a,k as u};
