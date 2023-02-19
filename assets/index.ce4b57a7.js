var wt=Object.defineProperty,gt=Object.defineProperties;var bt=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var xt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var Te=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))xt.call(t,n)&&Te(e,n,t[n]);if(Ne)for(var n of Ne(t))Et.call(t,n)&&Te(e,n,t[n]);return e},ke=(e,t)=>gt(e,bt(t));import{r as z,s as g,u as St,j as p,F as vt,a as x,U as X,H as P}from"./index.74d35351.js";import{p as $e,u as Je,R as Rt}from"./Routes.74ec1a16.js";import{H as Ot,F as At}from"./Footer.49af3f27.js";import{S as _t}from"./SpyGlass.7a465853.js";var We={};function Ct(e){if(!e||typeof window=="undefined")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(We,"__esModule",{value:!0});var A=z.exports;function Nt(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var D=Nt(A);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var K=function(){return K=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},K.apply(this,arguments)};Ct(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var Tt=function(e){var t,n,r,i,s=e.style,o=s===void 0?{}:s,l=e.className,d=l===void 0?"":l,c=e.play,f=c===void 0?!0:c,w=e.pauseOnHover,b=w===void 0?!1:w,h=e.pauseOnClick,u=h===void 0?!1:h,y=e.direction,R=y===void 0?"left":y,E=e.speed,O=E===void 0?20:E,T=e.delay,H=T===void 0?0:T,we=e.loop,$=we===void 0?0:we,ge=e.gradient,dt=ge===void 0?!0:ge,be=e.gradientColor,Z=be===void 0?[255,255,255]:be,xe=e.gradientWidth,ee=xe===void 0?200:xe,ft=e.onFinish,ht=e.onCycleComplete,Ee=e.children,Se=A.useState(0),ve=Se[0],pt=Se[1],Re=A.useState(0),Oe=Re[0],mt=Re[1],Ae=A.useState(!1),te=Ae[0],yt=Ae[1],ne=A.useRef(null),re=A.useRef(null);A.useEffect(function(){if(!!te){var ie=function(){re.current&&ne.current&&(pt(ne.current.getBoundingClientRect().width),mt(re.current.getBoundingClientRect().width))};return ie(),window.addEventListener("resize",ie),function(){window.removeEventListener("resize",ie)}}},[te]),A.useEffect(function(){yt(!0)},[]);var _e="rgba("+Z[0]+", "+Z[1]+", "+Z[2],Ce=Oe<ve?ve/O:Oe/O;return D.default.createElement(A.Fragment,null,te?D.default.createElement("div",{ref:ne,style:K(K({},o),(t={},t["--pause-on-hover"]=!f||b?"paused":"running",t["--pause-on-click"]=!f||b&&!u||u?"paused":"running",t)),className:d+" marquee-container"},dt&&D.default.createElement("div",{style:(n={},n["--gradient-color"]=_e+", 1), "+_e+", 0)",n["--gradient-width"]=typeof ee=="number"?ee+"px":ee,n),className:"overlay"}),D.default.createElement("div",{ref:re,style:(r={},r["--play"]=f?"running":"paused",r["--direction"]=R==="left"?"normal":"reverse",r["--duration"]=Ce+"s",r["--delay"]=H+"s",r["--iteration-count"]=$?""+$:"infinite",r),className:"marquee",onAnimationIteration:ht,onAnimationEnd:ft},Ee),D.default.createElement("div",{style:(i={},i["--play"]=f?"running":"paused",i["--direction"]=R==="left"?"normal":"reverse",i["--duration"]=Ce+"s",i["--delay"]=H+"s",i["--iteration-count"]=$?""+$:"infinite",i),className:"marquee","aria-hidden":"true"},Ee)):null)},kt=We.default=Tt;const Pt=$e({opt:"homepage",setOption:e=>Pt.opt=e}),F=$e({st:!1,setTrue:()=>F.st=!0,setFalse:()=>F.st=!1,reverse:()=>F.st=!F.st}),Ft=g.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
`;function Bt(e){const t=St(),{pathname:n}=t,r=e.options.filter(i=>i.path!==n);return p(vt,{children:p(Lt,{children:p("div",{className:"nav",children:r.map((i,s)=>p("ul",{className:"nav__list",children:x("li",{className:"nav__item",children:[p("div",{className:"nav__icon",children:i.icon}),p("div",{className:"nav__link",children:i.link})]})},s))})})})}const Lt=g.div`
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
`;function Dt(e){const t=Je(F),{st:n,setFalse:r}=t;return p(jt,{children:p("div",{className:n?"opened":"closed",onClick:r,children:p(Bt,{options:e.options})})})}const jt=g.nav`
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
`,Ut=({st:e,reverse:t})=>p(Mt,{children:x("button",{onClick:()=>t(),children:[p("div",{className:e?"opened":"closed"}),p("div",{className:e?"opened":"closed"}),p("div",{className:e?"opened":"closed"})]})});var zt=Ut;const Mt=g.div`
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
`;function It(e){const{text:t}=e;return p(qt,ke(J({},e),{children:p("p",{children:t})}))}const qt=g.div`
  width: 100%;
  color: ${e=>e.color||"#c40550"};
  font-weight: bolder;
  font-size: ${e=>e.size||"12px"};
  text-transform: uppercase;
  text-align: ${e=>e.align||"center"};
  padding: ${e=>e.p};
  margin: ${e=>e.m};

  p {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end);
    font-family: ${e=>e.fontfam};
    text-shadow: ${e=>e.shadow?"10px 1px 10px #000000":""};
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;function Ve(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ke}=Object.prototype,{getPrototypeOf:fe}=Object,he=(e=>t=>{const n=Ke.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>he(t)===e),G=e=>t=>typeof t===e,{isArray:I}=Array,ce=G("undefined");function Ht(e){return e!==null&&!ce(e)&&e.constructor!==null&&!ce(e.constructor)&&B(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xe=C("ArrayBuffer");function $t(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xe(e.buffer),t}const Jt=G("string"),B=G("function"),Ge=G("number"),Ye=e=>e!==null&&typeof e=="object",Wt=e=>e===!0||e===!1,W=e=>{if(he(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Vt=C("Date"),Kt=C("File"),Xt=C("Blob"),Gt=C("FileList"),Yt=e=>Ye(e)&&B(e.pipe),Qt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ke.call(e)===t||B(e.toString)&&e.toString()===t)},Zt=C("URLSearchParams"),en=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Y(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,i;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(r=0;r<o;r++)l=s[r],t.call(null,e[l],l,e)}}function le(){const e={},t=(n,r)=>{W(e[r])&&W(n)?e[r]=le(e[r],n):W(n)?e[r]=le({},n):I(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Y(arguments[n],t);return e}const tn=(e,t,n,{allOwnKeys:r}={})=>(Y(t,(i,s)=>{n&&B(i)?e[s]=Ve(i,n):e[s]=i},{allOwnKeys:r}),e),nn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},on=(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},an=e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!Ge(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},cn=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&fe(Uint8Array)),ln=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},un=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},dn=C("HTMLFormElement"),fn=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Pe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),hn=C("RegExp"),Qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Y(n,(i,s)=>{t(i,s,e)!==!1&&(r[s]=i)}),Object.defineProperties(e,r)},pn=e=>{Qe(e,(t,n)=>{const r=e[n];if(!!B(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},mn=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return I(e)?r(e):r(String(e).split(t)),n},yn=()=>{},wn=(e,t)=>(e=+e,Number.isFinite(e)?e:t);var a={isArray:I,isArrayBuffer:Xe,isBuffer:Ht,isFormData:Qt,isArrayBufferView:$t,isString:Jt,isNumber:Ge,isBoolean:Wt,isObject:Ye,isPlainObject:W,isUndefined:ce,isDate:Vt,isFile:Kt,isBlob:Xt,isRegExp:hn,isFunction:B,isStream:Yt,isURLSearchParams:Zt,isTypedArray:cn,isFileList:Gt,forEach:Y,merge:le,extend:tn,trim:en,stripBOM:nn,inherits:rn,toFlatObject:on,kindOf:he,kindOfTest:C,endsWith:sn,toArray:an,forEachEntry:ln,matchAll:un,isHTMLForm:dn,hasOwnProperty:Pe,hasOwnProp:Pe,reduceDescriptors:Qe,freezeMethods:pn,toObjectSet:mn,toCamelCase:fn,noop:yn,toFiniteNumber:wn};function m(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ze=m.prototype,et={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{et[e]={value:e}});Object.defineProperties(m,et);Object.defineProperty(Ze,"isAxiosError",{value:!0});m.from=(e,t,n,r,i,s)=>{const o=Object.create(Ze);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var gn=typeof self=="object"?self.FormData:window.FormData;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function tt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Fe(e,t,n){return e?e.concat(t).map(function(i,s){return i=tt(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function bn(e){return a.isArray(e)&&!e.some(ue)}const xn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function En(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(gn||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,R){return!a.isUndefined(R[y])});const r=n.metaTokens,i=n.visitor||f,s=n.dots,o=n.indexes,d=(n.Blob||typeof Blob!="undefined"&&Blob)&&En(t);if(!a.isFunction(i))throw new TypeError("visitor must be a function");function c(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function f(u,y,R){let E=u;if(u&&!R&&typeof u=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&bn(u)||a.isFileList(u)||a.endsWith(y,"[]")&&(E=a.toArray(u)))return y=tt(y),E.forEach(function(T,H){!(a.isUndefined(T)||T===null)&&t.append(o===!0?Fe([y],H,s):o===null?y:y+"[]",c(T))}),!1}return ue(u)?!0:(t.append(Fe(R,y,s),c(u)),!1)}const w=[],b=Object.assign(xn,{defaultVisitor:f,convertValue:c,isVisitable:ue});function h(u,y){if(!a.isUndefined(u)){if(w.indexOf(u)!==-1)throw Error("Circular reference detected in "+y.join("."));w.push(u),a.forEach(u,function(E,O){(!(a.isUndefined(E)||E===null)&&i.call(t,E,a.isString(O)?O.trim():O,y,b))===!0&&h(E,y?y.concat(O):[O])}),w.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Q(e,this,t)}const nt=pe.prototype;nt.append=function(t,n){this._pairs.push([t,n])};nt.toString=function(t){const n=t?function(r){return t.call(this,r,Be)}:Be;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Sn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function rt(e,t,n){if(!t)return e;const r=n&&n.encode||Sn,i=n&&n.serialize;let s;if(i?s=i(t,n):s=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Le{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var it={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vn=typeof URLSearchParams!="undefined"?URLSearchParams:pe,Rn=FormData;const On=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})();var _={isBrowser:!0,classes:{URLSearchParams:vn,FormData:Rn,Blob},isStandardBrowserEnv:On,protocols:["http","https","file","blob","url","data"]};function An(e,t){return Q(e,new _.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return _.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function _n(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Cn(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function ot(e){function t(n,r,i,s){let o=n[s++];const l=Number.isFinite(+o),d=s>=n.length;return o=!o&&a.isArray(i)?i.length:o,d?(a.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!a.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&a.isArray(i[o])&&(i[o]=Cn(i[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,i)=>{t(_n(r),i,n,0)}),n}return null}function Nn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Tn=_.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(o)&&d.push("domain="+o),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Pn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function st(e,t){return e&&!kn(t)?Pn(e,t):t}var Fn=_.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=a.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function q(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function Bn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Ln=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Dn=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Ln[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const De=Symbol("internals"),at=Symbol("defaults");function U(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function jn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function je(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Un(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function zn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function v(e,t){e&&this.set(e),this[at]=t||null}Object.assign(v.prototype,{set:function(e,t,n){const r=this;function i(s,o,l){const d=U(o);if(!d)throw new Error("header name must be a non-empty string");const c=j(r,d);c&&l!==!0&&(r[c]===!1||l===!1)||(r[c||o]=V(s))}return a.isPlainObject(e)?a.forEach(e,(s,o)=>{i(s,o,t)}):i(t,e,n),this},get:function(e,t){if(e=U(e),!e)return;const n=j(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return jn(r);if(a.isFunction(t))return t.call(this,r,n);if(a.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=U(e),e){const n=j(this,e);return!!(n&&(!t||je(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(s){if(s=U(s),s){const o=j(n,s);o&&(!t||je(n,n[o],o,t))&&(delete n[o],r=!0)}}return a.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return a.forEach(this,(r,i)=>{const s=j(n,i);if(s){t[s]=V(r),delete t[i];return}const o=e?Un(i):String(i).trim();o!==i&&delete t[i],t[o]=V(r),n[o]=!0}),this},toJSON:function(e){const t=Object.create(null);return a.forEach(Object.assign({},this[at]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&a.isArray(n)?n.join(", "):n)}),t}});Object.assign(v,{from:function(e){return a.isString(e)?new this(Dn(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[De]=this[De]={accessors:{}}).accessors,r=this.prototype;function i(s){const o=U(s);n[o]||(zn(r,s),n[o]=!0)}return a.isArray(e)?e.forEach(i):i(e),this}});v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(v.prototype);a.freezeMethods(v);function Mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),f=r[s];o||(o=c),n[i]=d,r[i]=c;let w=s,b=0;for(;w!==i;)b+=n[w++],w=w%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const h=f&&c-f;return h?Math.round(b*1e3/h):void 0}}function Ue(e,t){let n=0;const r=Mn(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,d=r(l),c=s<=o;n=s;const f={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:d||void 0,estimated:d&&o&&c?(o-s)/d:void 0};f[t?"download":"upload"]=!0,e(f)}}function ze(e){return new Promise(function(n,r){let i=e.data;const s=v.from(e.headers).normalize(),o=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(i)&&_.isStandardBrowserEnv&&s.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(h+":"+u))}const f=st(e.baseURL,e.url);c.open(e.method.toUpperCase(),rt(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const h=v.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};Nn(function(E){n(E),d()},function(E){r(E),d()},y),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let u=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||it;e.timeoutErrorMessage&&(u=e.timeoutErrorMessage),r(new m(u,y.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},_.isStandardBrowserEnv){const h=(e.withCredentials||Fn(f))&&e.xsrfCookieName&&Tn.read(e.xsrfCookieName);h&&s.set(e.xsrfHeaderName,h)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(u,y){c.setRequestHeader(y,u)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=h=>{!c||(r(!h||h.type?new q(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=Bn(f);if(b&&_.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(i||null)})}const Me={http:ze,xhr:ze};var Ie={getAdapter:e=>{if(a.isString(e)){const t=Me[e];if(!e)throw Error(a.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!a.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Me};const In={"Content-Type":"application/x-www-form-urlencoded"};function qn(){let e;return typeof XMLHttpRequest!="undefined"?e=Ie.getAdapter("xhr"):typeof process!="undefined"&&a.kindOf(process)==="process"&&(e=Ie.getAdapter("http")),e}function Hn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const L={transitional:it,adapter:qn(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return i&&i?JSON.stringify(ot(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return An(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Hn(t)):t}],transformResponse:[function(t){const n=this.transitional||L.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){L.headers[t]={}});a.forEach(["post","put","patch"],function(t){L.headers[t]=a.merge(In)});function oe(e,t){const n=this||L,r=t||n,i=v.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function ct(e){return!!(e&&e.__CANCEL__)}function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q}function qe(e){return se(e),e.headers=v.from(e.headers),e.data=oe.call(e,e.transformRequest),(e.adapter||L.adapter)(e).then(function(r){return se(e),r.data=oe.call(e,e.transformResponse,r),r.headers=v.from(r.headers),r},function(r){return ct(r)||(se(e),r&&r.response&&(r.response.data=oe.call(e,e.transformResponse,r.response),r.response.headers=v.from(r.response.headers))),Promise.reject(r)})}function M(e,t){t=t||{};const n={};function r(c,f){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge(c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function i(c){if(a.isUndefined(t[c])){if(!a.isUndefined(e[c]))return r(void 0,e[c])}else return r(e[c],t[c])}function s(c){if(!a.isUndefined(t[c]))return r(void 0,t[c])}function o(c){if(a.isUndefined(t[c])){if(!a.isUndefined(e[c]))return r(void 0,e[c])}else return r(void 0,t[c])}function l(c){if(c in t)return r(e[c],t[c]);if(c in e)return r(void 0,e[c])}const d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const w=d[f]||i,b=w(f);a.isUndefined(b)&&w!==l||(n[f]=b)}),n}const lt="1.1.3",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const He={};me.transitional=function(t,n,r){function i(s,o){return"[Axios v"+lt+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(t===!1)throw new m(i(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!He[o]&&(He[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,l):!0}};function $n(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const l=e[s],d=l===void 0||o(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}var de={assertOptions:$n,validators:me};const N=de.validators;class k{constructor(t){this.defaults=t,this.interceptors={request:new Le,response:new Le}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=M(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&de.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),i!==void 0&&de.assertOptions(i,{encode:N.function,serialize:N.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const s=n.headers&&a.merge(n.headers.common,n.headers[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],function(u){delete n.headers[u]}),n.headers=new v(n.headers,s);const o=[];let l=!0;this.interceptors.request.forEach(function(u){typeof u.runWhen=="function"&&u.runWhen(n)===!1||(l=l&&u.synchronous,o.unshift(u.fulfilled,u.rejected))});const d=[];this.interceptors.response.forEach(function(u){d.push(u.fulfilled,u.rejected)});let c,f=0,w;if(!l){const h=[qe.bind(this),void 0];for(h.unshift.apply(h,o),h.push.apply(h,d),w=h.length,c=Promise.resolve(n);f<w;)c=c.then(h[f++],h[f++]);return c}w=o.length;let b=n;for(f=0;f<w;){const h=o[f++],u=o[f++];try{b=h(b)}catch(y){u.call(this,y);break}}try{c=qe.call(this,b)}catch(h){return Promise.reject(h)}for(f=0,w=d.length;f<w;)c=c.then(d[f++],d[f++]);return c}getUri(t){t=M(this.defaults,t);const n=st(t.baseURL,t.url);return rt(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(n,r){return this.request(M(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,l){return this.request(M(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}k.prototype[t]=n(),k.prototype[t+"Form"]=n(!0)});class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,l){r.reason||(r.reason=new q(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(i){t=i}),cancel:t}}}function Jn(e){return function(n){return e.apply(null,n)}}function Wn(e){return a.isObject(e)&&e.isAxiosError===!0}function ut(e){const t=new k(e),n=Ve(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return ut(M(e,i))},n}const S=ut(L);S.Axios=k;S.CanceledError=q;S.CancelToken=ye;S.isCancel=ct;S.VERSION=lt;S.toFormData=Q;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Jn;S.isAxiosError=Wn;S.formToJSON=e=>ot(a.isHTMLForm(e)?new FormData(e):e);const Vn="http://localhost:4000";S.create({baseURL:Vn,withCredentials:!1});const Kn=X`
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
`,Xn=X`
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
`,Gn=()=>p(Qn,{children:x(Zn,{children:[p(er,{}),p(tr,{children:"Fullstack"})]})});var Yn=Gn;const Qn=g.div`
 width: 100%;
 position: fixed;
 top: 30%;
 & {
  @media (min-width: 500px) {
    left: 2em;
  }
 }
`,Zn=g.div`
 display: flex;
`,er=g.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Kn} 6s;
  animation-fill-mode: forwards;
  background-color: #ffffff;

`,tr=g.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 60px;
  height: 60px;
  color: #222222;
  font-weight: bolder;
  background-color: #ffffff;
  animation: ${Xn} 4s;
  animation-fill-mode: forwards;
  animation-delay: 1.7s;
`;function nr(e){return z.exports.createElement("svg",J({viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto"},e),z.exports.createElement("path",{fill:e.color,d:"M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 000 2.75l12.063 12.063a1.955 1.955 0 002.75 0l12.063-12.063a1.947 1.947 0 000-2.75L17.374 2.562A1.923 1.923 0 0016 2zm0 2.031L27.969 16 16 27.969 4.031 16l8.282-8.281 1.75 1.75A1.98 1.98 0 0014 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 104 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0022 18c1.104 0 1.999-.895 1.999-2a1.999 1.999 0 00-2.5-1.938L17.937 10.5A1.999 1.999 0 0016 8a1.98 1.98 0 00-.53.063l-1.75-1.75z"}))}function rr(e){return z.exports.createElement("svg",J({viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto"},e),z.exports.createElement("path",{fill:e.color,d:"M16 6c-3.766 0-7.094.39-9.125.688-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188 2.04.296 5.379.687 9.125.687 3.746 0 7.086-.39 9.125-.688 1.68-.242 3.035-1.511 3.344-3.187.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0126.5 10.25c.242 1.32.5 3.277.5 5.75 0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 01-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 015.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 011.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844 7-4L23 16l-1.5-.875-7-4zm2 3.438L18.969 16 15 18.281z"}))}const ir=`Hello my name is Giovani, i began learning c++ in 2017 and it was my
first experience with Arduino boards. But it was a kind of
hobby until year 2019 that i began studying web programming with a
better purpose in mind. So that Node js was my pick, i have been
studying back-end frameworks like Express, and related libraries to
afford security and functionality, besides very useful concepts to
reuse logic such as middlewares and i have had experience working with
ORM or ODM to abstract databases such as Sequelize or Mongoose. I have
designed and abstracted databases for a System that will afford PKI
services in Cuba. `,or=`React is open-sourced by Facebook just a shy a few years ago, it\u2019s
already become the number one choice for JavaScript devs around the
globe. And i have picked to work with this wonderful technology that
brings so many advantages. However Technology changes, and it changes
quickly. I am open-minded to new technologies in order to learn them
and then also take advantage of them. I currently use react libraries
such as react-hook-form, react-query, valtio, zustand,
styled-components and the popular react-router-dom.`,sr=`Tell me and I will forget, show me and I may
 remenber, involve me and I will understand`,ar=`<p>I worked in the first phase of a system to generate digital 
certificates for Segurm\xE1tica which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system has 
great importance for the development of digital certification in Cuba.</p>
<p>(PKI) project: <a href="https://github.com/gfouz/pki-server-2023">
https://github.com/gfouz/pki-server-2023</a></p>`;X`
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
`;X`
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
`;function Ar(){const e=Je(F),{st:t,reverse:n}=e;return x(cr,{children:[x(Ot,{bg:"#2a160f",color:"#c2c5aa",children:["gfouz-",new Date().getFullYear(),p(zt,{st:t,reverse:n})]}),x(lr,{children:[x(fr,{children:[p(pr,{}),p(Yn,{})]}),p(P,{size:"1.3em",center:!0,color:"#451a23",bolder:!0,spacing:"5px",fontfam:"signika",p:"2em 0 0 0",children:p(It,{color:"#451a23",text:"Fullstack development with NodeJs"})}),p(xr,{children:x(ur,{center:!0,children:['"',sr,'"']})}),p(yr,{children:p(_t,{fontSize:"40px",color:"#451a23"})}),p(hr,{children:p(mr,{})}),p(P,{center:!0,bolder:!0,upper:!0,p:"2em 0",children:"Technologies"}),p(kt,{children:p(P,{bolder:!0,color:"#451a23",spacing:"6px",upper:!0,fontfam:"signika",children:"ReactJS styled-components valtio react-query react-hook-form axios eslint prettier typescript ExpressJS"})})]}),x(Ft,{bg:"#d3bb72",children:[x(ae,{children:[p(P,{upper:!0,children:"Overview"}),x("p",{children:[" ",ir," "]})]}),p(ae,{children:x("p",{children:[" ",or," "]})}),p(P,{center:!0,bolder:!0,children:"PKI System"}),p(ae,{children:p(dr,{dangerouslySetInnerHTML:{__html:ar}})}),x(wr,{children:[x(gr,{children:["YouTube Channel",p(rr,{fontSize:"30px",color:"#c40550"})]}),x(br,{children:["Github Projects",p(nr,{fontSize:"30px",color:"#222222"})]})]})]}),p(Dt,{options:Rt}),x(At,{bg:"#2a160f",color:"#c2c5aa",children:["Portfolio \xA9 ",new Date().getFullYear()]})]})}const cr=g.div`
  display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
    }
  }
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`,lr=g.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ur=g(P)`
  font-size: 13px;
`,dr=g.p`
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,fr=g.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
`,hr=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #020203;
`,pr=g.img.attrs({src:"./images/workflow.jpg",alt:"knightman"})`
  max-width: 100%;
  height: auto;
`,mr=g.img.attrs({src:"./images/laptop.jpg",alt:"second"})`
  max-width: 100%;
  height: auto;
`,ae=g.div`
  text-align: left;
  color: #000000;
  border: none;
  max-width: 400px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: signika;
  background-color: #d3bb72;
`,yr=g.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
`,wr=g.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  font-family: signika;
  background-color: #ffffff;
`,gr=g.a.attrs({href:"https://youtube.com/@giovanifouz5033"})`
  margin: 0 1em;
  color: #c40550;
  font-weight: bolder;
`,br=g.a.attrs({href:"https://github.com/gfouz"})`
  margin: 0 1em;
  font-weight: bolder;
`,xr=g.div`
  font-weight: bolder;
  font-family: signika;
`;export{Ar as default};
