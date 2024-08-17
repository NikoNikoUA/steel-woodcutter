import{d as a,j as e,R as c,l as O,r as P}from"./index-BRR1zrCo.js";const g=a.img`
  border-radius: 20px;
`,_=a.section`
  background-color: rgb(254, 255, 227);
  padding: 50px 0;
`,j=a.div`
  margin-left: auto;
  margin-right: auto;

  padding: 20px 10px;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    padding: 0 128px;
  }
`,C=()=>e.jsx(_,{children:e.jsxs(j,{children:[e.jsx("h1",{children:"Who we are"}),e.jsx("p",{children:"Сталевий лісоруб - це проєкт, що має за мету зробити Ваше життя яскравішим, прикрасивши його стильними і красивими виробами з дерева і металу на різноманітну тематику. Та перш за все, Сталевий Лісоруб - це люди. Тож, давайте знайомитися!"}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},children:[e.jsx(g,{alt:"image of a project creator",src:"public\\img_people\\resized.jpg",width:"250",height:"360"}),e.jsxs("p",{children:[e.jsx("span",{children:"Засновник проєкту: Косинський Микола"}),e.jsx("br",{}),"Коли він почав працювати з деревом, на думку навіть не спадало, що з часом це захоплення переросте в дещо більше: в пристрасть. Бажання створюватися прості, але водночас стильні вироби, і ділитися ними з людьми - це те, що змушує Миколу рухатися вперед і не складати рук навіть у складні часи."]})]}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},children:[e.jsxs("p",{children:[e.jsx("span",{children:"Металеве серце проєкту: Косинський Валентин"}),e.jsx("br",{}),'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без цієї людини проєкт сміливо можна було б назвати просто "Лісоруб".']}),e.jsx(g,{alt:"image of Valentyn",src:"public\\img_people\\resized_Valentyn.jpg",width:"250",height:"360"})]}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},children:[e.jsx(g,{alt:"image of Nadia",src:"public\\img_people\\resized_Nadia.jpg",width:"250",height:"360"}),e.jsxs("p",{children:[e.jsx("span",{children:"Колір проєкту: Іванюк Надія"}),e.jsx("br",{}),"Надія додає кольорів не лише у вироби, а й в життя усієї команди. Окрім того, вона ще й активно допомагає в розробці моделей. Одним словом: незамінний член команди."]})]})]})}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Contact Us"}),e.jsx("p",{children:"Тут будуть лінки на соцмережі та контактний телефон"})]});var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=c.createContext&&c.createContext(b),W=["attr","size","title"];function I(t,r){if(t==null)return{};var n=N(t,r),i,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)i=o[s],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function N(t,r){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(r.indexOf(i)>=0)continue;n[i]=t[i]}return n}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},p.apply(this,arguments)}function x(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?x(Object(n),!0).forEach(function(i){k(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function k(t,r,n){return r=z(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function z(t){var r=E(t,"string");return typeof r=="symbol"?r:r+""}function E(t,r){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function v(t){return t&&t.map((r,n)=>c.createElement(r.tag,u({key:n},r.attr),v(r.child)))}function w(t){return r=>c.createElement(B,p({attr:u({},t.attr)},r),v(t.child))}function B(t){var r=n=>{var{attr:i,size:s,title:o}=t,y=I(t,W),h=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),c.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,y,{className:l,style:u(u({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),o&&c.createElement("title",null,o),t.children)};return m!==void 0?c.createElement(m.Consumer,null,n=>r(n)):r(b)}function D(t){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},child:[]}]})(t)}function M(t){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},child:[]}]})(t)}const V="/steel-woodcutter/assets/img_1-CRVHnVan.jpg",F="/steel-woodcutter/assets/img_2-CUr2BLtu.jpg",K="/steel-woodcutter/assets/img_3-b50hPMmP.jpg",L="/steel-woodcutter/assets/img_4-5of3clJZ.jpg",R="/steel-woodcutter/assets/img_5-uxUu1SKK.jpg",U="/steel-woodcutter/assets/img_6-BiZI-dg2.jpg",$="/steel-woodcutter/assets/img_7-CojO0Wkx.jpg",H="/steel-woodcutter/assets/img_8-BpaFt1XL.jpg",A=a.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 600px;
  position: relative;
`,T=a.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 200ms ease-in-out;
`,f=a.button`
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 37px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
  }

  svg {
    fill: black;
    width: 30px;
    height: 30px;
  }

  &:hover svg {
    animation: bounce 200ms ease-in-out;
  }

  @keyframes bounce {
    50% {
      scale: 1.4 0.6;
    }
  }
`,Z=a.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,G=a.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 7px;
`,J=a.button`
  all: unset;
  height: 20px;
  width: 20px;
  background: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 100ms ease-in-out;

  &:focus,
  &:hover {
    transform: scale(1.2);
  }

  ${t=>t.$active&&O`
      transform: scale(1.2);
    `}
`,d=[V,F,K,L,R,U,$,H],X=()=>{const[t,r]=P.useState(0),n=()=>{r(s=>s===0?d.length-1:s-1)},i=()=>{r(s=>s===d.length-1?0:s+1)};return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsx(Z,{children:d.map(s=>e.jsx(T,{src:s,style:{translate:`${-100*t}%`}},s))}),e.jsx(f,{onClick:n,style:{left:"0"},children:e.jsx(D,{})}),e.jsx(f,{onClick:i,style:{right:"0"},children:e.jsx(M,{})}),e.jsx(G,{children:d.map((s,o)=>e.jsx(J,{$active:o===t,onClick:()=>r(o)},o))})]})})},q=()=>e.jsxs(j,{children:[e.jsx("h2",{children:"Our Works"}),e.jsx(X,{})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"What We Do"}),e.jsx("p",{children:"Сталевий лісоруб створює красу доступну кожному. Наші штуки це не тільки прикраси, а й іграшки."})]}),tt=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(Q,{}),e.jsx(q,{}),e.jsx(S,{})]});export{tt as default};
