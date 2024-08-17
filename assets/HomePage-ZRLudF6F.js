import{d as a,j as e,R as c,l as O,r as P}from"./index-Br5jw9mg.js";const g=a.img`
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
`,C=()=>e.jsx(_,{children:e.jsxs(j,{children:[e.jsx("h1",{children:"Who we are"}),e.jsx("p",{children:"Сталевий лісоруб - це проєкт, що має за мету зробити Ваше життя яскравішим, прикрасивши його стильними і красивими виробами з дерева і металу на різноманітну тематику. Та перш за все, Сталевий Лісоруб - це люди. Тож, давайте знайомитися!"}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},children:[e.jsx(g,{alt:"image of a project creator",src:"public\\img_people\\resized.jpg",width:"250",height:"360"}),e.jsxs("p",{children:[e.jsx("span",{children:"Засновник проєкту: Косинський Микола"}),e.jsx("br",{}),"Коли він почав працювати з деревом, на думку навіть не спадало, що з часом це захоплення переросте в дещо більше: в пристрасть. Бажання створюватися прості, але водночас стильні вироби, і ділитися ними з людьми - це те, що змушує Миколу рухатися вперед і не складати рук навіть у складні часи."]})]}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},children:[e.jsxs("p",{children:[e.jsx("span",{children:"Металеве серце проєкту: Косинський Валентин"}),e.jsx("br",{}),'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без цієї людини проєкт сміливо можна було б назвати просто "Лісоруб".']}),e.jsx(g,{alt:"image of Valentyn",src:"public\\img_people\\resized_Valentyn.jpg",width:"250",height:"360"})]}),e.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",marginBottom:"30px"},children:[e.jsx(g,{alt:"image of Nadia",src:"public\\img_people\\resized_Nadia.jpg",width:"250",height:"360"}),e.jsxs("p",{children:[e.jsx("span",{children:"Колір проєкту: Іванюк Надія"}),e.jsx("br",{}),"Надія додає кольорів не лише у вироби, а й в життя усієї команди. Окрім того, вона ще й активно допомагає в розробці моделей. Одним словом: незамінний член команди."]})]})]})}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Contact Us"}),e.jsx("p",{children:"Тут будуть лінки на соцмережі та контактний телефон"})]});var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=c.createContext&&c.createContext(b),W=["attr","size","title"];function I(t,r){if(t==null)return{};var n=N(t,r),i,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)i=o[s],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function N(t,r){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(r.indexOf(i)>=0)continue;n[i]=t[i]}return n}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},d.apply(this,arguments)}function x(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?x(Object(n),!0).forEach(function(i){k(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function k(t,r,n){return r=z(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function z(t){var r=E(t,"string");return typeof r=="symbol"?r:r+""}function E(t,r){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function v(t){return t&&t.map((r,n)=>c.createElement(r.tag,u({key:n},r.attr),v(r.child)))}function w(t){return r=>c.createElement(B,d({attr:u({},t.attr)},r),v(t.child))}function B(t){var r=n=>{var{attr:i,size:s,title:o}=t,y=I(t,W),h=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),c.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,y,{className:l,style:u(u({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),o&&c.createElement("title",null,o),t.children)};return m!==void 0?c.createElement(m.Consumer,null,n=>r(n)):r(b)}function D(t){return w({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.928 21c-.801 0-1.555-.312-2.121-.879l-7.121-7.121 7.121-7.121c1.133-1.134 3.109-1.134 4.242 0 .566.564.879 1.317.879 2.119 0 .746-.27 1.451-.764 2.002h4.836c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.836c.493.549.764 1.252.764 1.998.002.802-.312 1.557-.879 2.124-.567.566-1.32.878-2.121.878zm-6.414-8l5.707 5.707c.379.378 1.035.378 1.414 0 .189-.189.293-.441.293-.708s-.104-.517-.291-.705l-3.295-3.294h9.658c.552 0 1-.449 1-1s-.448-1-1-1h-9.658l3.293-3.293c.189-.189.293-.441.293-.708s-.104-.517-.292-.705c-.381-.38-1.036-.379-1.415-.001l-5.707 5.707z"},child:[]}]})(t)}function F(t){return w({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 21c-.801 0-1.555-.312-2.121-.879s-.88-1.321-.879-2.123c0-.746.271-.998.764-1.998h-4.836c-1.654 0-3-1.347-3-3 0-1.654 1.346-3 3-3h4.836c-.494-1-.764-1.255-.764-2.001.001-.802.312-1.554.88-2.121 1.132-1.132 3.108-1.133 4.241.001l7.121 7.121-7.121 7.121c-.566.567-1.32.879-2.121.879zm-7.072-9c-.552 0-1 .449-1 1s.448 1 1 1h9.658l-3.293 3.293c-.189.189-.293.439-.293.706 0 .269.104.519.293.708.379.378 1.035.378 1.414 0l5.707-5.707-5.707-5.707c-.379-.378-1.035-.378-1.414 0-.189.189-.293.439-.293.706 0 .268.104.519.293.708l3.293 3.293h-9.658z"},child:[]}]})(t)}const R="/steel-woodcutter/assets/img_1-CRVHnVan.jpg",U="/steel-woodcutter/assets/img_2-CUr2BLtu.jpg",$="/steel-woodcutter/assets/img_3-b50hPMmP.jpg",L="/steel-woodcutter/assets/img_4-5of3clJZ.jpg",T="/steel-woodcutter/assets/img_5-uxUu1SKK.jpg",V="/steel-woodcutter/assets/img_6-BiZI-dg2.jpg",A="/steel-woodcutter/assets/img_7-CojO0Wkx.jpg",K="/steel-woodcutter/assets/img_8-BpaFt1XL.jpg",M=a.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 600px;
  position: relative;
`,H=a.img`
  object-fit: scale-down;
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
    background-color: rgb(0, 0, 0, 0.05);
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
`,p=[R,U,$,L,T,V,A,K],X=()=>{const[t,r]=P.useState(0),n=()=>{r(s=>s===0?p.length-1:s-1)},i=()=>{r(s=>s===p.length-1?0:s+1)};return e.jsx(e.Fragment,{children:e.jsxs(M,{children:[e.jsx(Z,{children:p.map(s=>e.jsx(H,{src:s,style:{translate:`${-100*t}%`}},s))}),e.jsx(f,{onClick:n,style:{left:"0"},children:e.jsx(D,{})}),e.jsx(f,{onClick:i,style:{right:"0"},children:e.jsx(F,{})}),e.jsx(G,{children:p.map((s,o)=>e.jsx(J,{$active:o===t,onClick:()=>r(o)},o))})]})})},q=()=>e.jsxs(j,{children:[e.jsx("h2",{children:"Our Works"}),e.jsx(X,{})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"What We Do"}),e.jsx("p",{children:"Сталевий лісоруб створює красу доступну кожному. Наші штуки це не тільки прикраси, а й іграшки."})]}),tt=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(Q,{}),e.jsx(q,{}),e.jsx(S,{})]});export{tt as default};
