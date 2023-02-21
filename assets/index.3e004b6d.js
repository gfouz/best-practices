var g=Object.defineProperty,u=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))x.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>u(e,f(t));import{j as o,F as h,s as n,a as l,H as a,U as p}from"./index.90bcf35c.js";import{L as w,R as y}from"./Containers.b3f946c1.js";import{T as k}from"./index.esm.0da53953.js";import{S as v}from"./SpyGlass.3225962f.js";import{R as j}from"./Routes.965687de.js";function m(e){const{tip:t,children:r}=e;return o(h,{children:o(k,{label:t,hasArrow:!0,arrowSize:15,children:r})})}const z=e=>o(m,{tip:e.tip,children:o($,d(s({},e),{children:e.children}))}),$=n.a`
  color: ${e=>e.color};
  font-size: ${e=>e.size};
  font-weight: ${e=>e.font};
  text-decoration: none;
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
`,L=[{card:"card-1",name:"gfouz-blog",path:"https://gfouz.github.io/next-blog-2023"},{card:"card-2",name:"react-best-practices",path:"https://github.com/gfouz"},{card:"card-3",name:"wonderful-express",path:"https://github.com/gfouz"}],S=`React is open-sourced by Facebook just a shy a few years ago, 
it\u2019s already become the number one choice for JavaScript devs around the globe. And i
have picked to work with this wonderful technology that brings so many advantages. However
Technology changes, and it changes quickly. I am open-minded to new technologies in order to
learn them and then also take advantage of them.`,C="Here i show some technologies i currently use each day";function E(){return o(h,{children:o(w,{options:j,bg:"#0b514c",lbg:"#f5f5f5",children:l(R,{children:[o(a,{center:!0,upper:!0,p:"2em 0 0 0",spacing:"7px",children:"Gfouz"}),o("img",{src:"./images/home.png",alt:"from-home"}),o(W,{}),o(H,{color:"#999999",size:"1.5em",spacing:"10px",upper:!0,center:!0,children:"working from home with"}),o(m,{tip:C,children:o("img",{src:"./images/nodejs.jpg",alt:"nodejs"})}),o(U,{children:L.map((e,t)=>o(q,{className:`card ${e.card}`,children:o(z,{href:e.path,font:"bolder",size:"1.3em",uppercase:!0,children:e.name})},t))}),l(a,{center:!0,upper:!0,bolder:!0,color:"#999999",children:[" ","Overview of my own opinion about technologies"," "]}),o(I,{p:"1em 0.5em 4em 0.5em",fontfam:"calibri",children:S}),o(F,{children:o(v,{fontSize:"40px",color:"#999999"})})]})})})}const R=n.div`
  width: 100%;
  height: 100%;
  background-color: #24242c;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  article {
    padding: 1em;
    text-align: left;
    max-width: 360px;
  }
  img {
    max-width: 300px;
    height: auto;
  }
  .list {
    li {
      list-style-type: none;
      font-style: italic;
      color: #444444;
    }
  }
`,A=p`
 from {opacity: 0};
 to { opacity: 1};
`,H=n(a)`
  animation: ${A} 5s;
`,T=n.div`
  width: 100%;
  height: 1px;
  background-color: #999999;
`,F=n(y)`
  justify-content: center;
  padding: 3em;
`,G=p`
 from {width: 0};
 to {width: calc(100% - 40px)};
`,W=n(T)`
  background-color: #efe180;
  height: 2px;
  width: calc(100% - 40px);
  margin: 0.5em auto;
  animation: ${G} 2s;
`,U=n.div`
  width: 100%;
  margin: 4em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    color: #999999;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 400px;
    transition: 1s;
  }
  .card-1:hover {
    transition: 1s;
    color: #000000;
    background-image: url(./images/abstract.jpg);
  }
  .card-2:hover {
    transition: 1s;
    color: #000000;
    background-image: url(./images/mountain.jpg);
  }
  .card-3:hover {
    transition: 1s;
    color: #ffffff;
    background-image: url(./images/woman.jpg);
  }
`,q=n.div`
  width: 400px;
  min-width: 320px;
  height: 200px;
  margin: 1em 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #000000;
`,I=n(a)`
  color: #999999;
`;export{E as default};
