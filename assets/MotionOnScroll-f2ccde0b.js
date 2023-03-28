import{C as a,j as I,a as w,s as y,r as m}from"./index-36e20e6d.js";import{b as T,s as A,c as M,u as O,d as V,m as L}from"./FramerMotions-63ea8490.js";const _=a`
  @media (min-width: 750px) {
    width: 50%;
  }
`,P=a`
  justify-content: center;
  align-items: center;
`,z=a`
  justify-content: flex-start;
  align-items: center;
`,N=a`
  justify-content: flex-end;
  align-items: center;
`,W=a`
  justify-content: flex-start;
  align-items: flex-start;
`,q=a`
  justify-content: center;
  align-items: flex-start;
`,D=a`
  justify-content: flex-end;
  align-items: flex-start;
`,F=a`
  justify-content: flex-start;
  align-items: flex-start;
`,G=a`
  justify-content: center;
  align-items: flex-end;
`,H=a`
  justify-content: flex-end;
  align-items: flex-end;
`,J=t=>{const{children:n,image:e}=t;return I(K,{...t,children:[w(Q,{image:e}),w(U,{...t,children:n})]})},lt=J,K=y.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${t=>t.halfSection&&_}
  .background-image {
    max-width: 100%;
    height: auto;
  }
`,Q=y.img.attrs(t=>({src:`./images/${t.image}`,alt:"anyImage"}))`
 max-width: 100%;
 height: auto;
`,U=y.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  ${t=>t.center&&P};
  ${t=>t.centerTop&&z};
  ${t=>t.centerBottom&&N};
  ${t=>t.leftCenter&&q};
  ${t=>t.leftTop&&W};
  ${t=>t.leftBottom&&D};
  ${t=>t.rightCenter&&G};
  ${t=>t.rightTop&&F};
  ${t=>t.rightBottom&&H};
  flex-direction: column;
`;function X(){const t=new Set,n={subscribe(e){return t.add(e),()=>void t.delete(e)},start(e,s){const i=[];return t.forEach(o=>{i.push(T(o,e,{transitionOverride:s}))}),Promise.all(i)},set(e){return t.forEach(s=>{A(s,e)})},stop(){t.forEach(e=>{M(e)})},mount(){return()=>{n.stop()}}};return n}function Y(){const t=O(X);return V(t.mount,[]),t}const Z=Y,j=new Map,x=new WeakMap;let E=0,k;function tt(t){return t?(x.has(t)||(E+=1,x.set(t,E.toString())),x.get(t)):"0"}function et(t){return Object.keys(t).sort().filter(n=>t[n]!==void 0).map(n=>`${n}_${n==="root"?tt(t.root):t[n]}`).toString()}function nt(t){let n=et(t),e=j.get(n);if(!e){const s=new Map;let i;const o=new IntersectionObserver(c=>{c.forEach(r=>{var u;const g=r.isIntersecting&&i.some(f=>r.intersectionRatio>=f);t.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=g),(u=s.get(r.target))==null||u.forEach(f=>{f(g,r)})})},t);i=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:n,observer:o,elements:s},j.set(n,e)}return e}function st(t,n,e={},s=k){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const u=t.getBoundingClientRect();return n(s,{isIntersecting:s,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:i,observer:o,elements:c}=nt(e);let r=c.get(t)||[];return c.has(t)||c.set(t,r),r.push(n),o.observe(t),function(){r.splice(r.indexOf(n),1),r.length===0&&(c.delete(t),o.unobserve(t)),c.size===0&&(o.disconnect(),j.delete(i))}}function it({threshold:t,delay:n,trackVisibility:e,rootMargin:s,root:i,triggerOnce:o,skip:c,initialInView:r,fallbackInView:u,onChange:g}={}){var f;const[h,R]=m.useState(null),b=m.useRef(),[v,C]=m.useState({inView:!!r,entry:void 0});b.current=g,m.useEffect(()=>{if(c||!h)return;let d;return d=st(h,(B,$)=>{C({inView:B,entry:$}),b.current&&b.current(B,$),$.isIntersecting&&o&&d&&(d(),d=void 0)},{root:i,rootMargin:s,threshold:t,trackVisibility:e,delay:n},u),()=>{d&&d()}},[Array.isArray(t)?t.toString():t,h,i,s,o,c,e,u,n]);const p=(f=v.entry)==null?void 0:f.target,S=m.useRef();!h&&p&&!o&&!c&&S.current!==p&&(S.current=p,C({inView:!!r,entry:void 0}));const l=[R,v.inView,v.entry];return l.ref=l[0],l.inView=l[1],l.entry=l[2],l}const rt=a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ot=({children:t,variants:n,width:e,column:s})=>{const i=Z(),[o,c]=it();return m.useEffect(()=>{c?i.start("visible"):i.start("hidden")},[i,c]),w(ct,{ref:o,variants:n,initial:"hidden",animate:i,width:e,column:s,children:t})},ft=ot,ct=y(L.div).attrs({className:"MotionOnScroll"})`
  width: ${t=>t.width};
  display: flex;
  justify-content: center;
  ${t=>t.column&&rt};
`;export{lt as L,ft as M,it as a,Z as u};
