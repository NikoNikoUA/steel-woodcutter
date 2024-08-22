import{m as Z,d as u,r as h,j as t,S,C as k,R as w,l as re}from"./index-CTMV9p6f.js";const X=Z`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,_=Z`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,V=u.img`
  border-radius: 20px;
  opacity: 0;
  /* transform: translateX(-100%); */

  &.animate {
    animation: ${X} 1s ease-out forwards;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`,ie=u.img`
  border-radius: 20px;
  opacity: 0;
  /* transform: translateX(-100%); */

  &.animate {
    animation: ${_} 1s ease-out forwards;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`,se=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }
`,N=u.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  &:nth-child(-n + 2) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
`,M=u.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`,R=u.p`
  width: 280px;
  text-align: left;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
    text-align: center;
  }
`,C=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(100%);

  &.animate {
    animation: ${_} 1s ease-out forwards;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`,ae=u(C)`
  &.animate {
    animation: ${X} 1s ease-out forwards;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${_} 1s ease-out forwards; */

  @media screen and (max-width: 767px) {
    display: none;
  }

  /* @media screen and (min-width: 768px) {
  } */
`,oe=u(C)`
  &.animate {
    animation: ${X} 1s ease-out forwards;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${_} 1s ease-out forwards; */

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ce="/steel-woodcutter/assets/resized-Bf4qycP-.jpg",le="/steel-woodcutter/assets/resized_Nadia-COy96iO1.jpg",de="/steel-woodcutter/assets/resized_Valentyn-BtbS8RqN.jpg",ue=()=>{const e=h.useRef(null),n=h.useRef(null),r=h.useRef(null),i=h.useRef(null),l=h.useRef(null),c=h.useRef(null),g=h.useRef(null);return h.useEffect(()=>{const p=(b,a)=>{b.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate"),a.unobserve(s.target))})},f=new IntersectionObserver(p,{threshold:.5});return[e.current,n.current,r.current,i.current,l.current,c.current,g.current].forEach(b=>{b&&f.observe(b)}),()=>{f.disconnect()}},[]),t.jsx(S,{children:t.jsx(k,{children:t.jsxs(se,{children:[t.jsx("div",{children:t.jsx("h2",{children:"Про Нас"})}),t.jsxs("div",{style:{width:"1000px"},children:[t.jsxs(N,{children:[t.jsx(V,{alt:"image of a project creator",src:ce,ref:e}),t.jsxs(C,{ref:i,children:[t.jsx(M,{children:"Засновник проєкту: Косинський Микола"}),t.jsx(R,{children:"Коли він почав працювати з деревом, на думку навіть не спадало, що з часом це захоплення переросте в дещо більше: в пристрасть. Бажання створюватися прості, але водночас стильні вироби, і ділитися ними з людьми - це те, що змушує Миколу рухатися вперед і не складати рук навіть у складні часи."})]})]}),t.jsxs(N,{children:[t.jsxs(ae,{ref:l,children:[t.jsx(M,{children:" Металеве серце проєкту: Косинський Валентин"}),t.jsx(R,{children:'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без Валентина проєкт сміливо можна було б назвати просто "Лісоруб".'})]}),t.jsx("div",{children:t.jsx(ie,{alt:"image of Valentyn",src:de,ref:n})}),t.jsxs(oe,{ref:c,children:[t.jsx(M,{children:" Металеве серце проєкту: Косинський Валентин"}),t.jsx(R,{children:'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без Валентина проєкт сміливо можна було б назвати просто "Лісоруб".'})]})]}),t.jsxs(N,{children:[t.jsx("div",{children:t.jsx(V,{alt:"image of Nadia",src:le,ref:r})}),t.jsxs(C,{ref:g,children:[t.jsx(M,{children:"Колір проєкту: Іванюк Надія"}),t.jsx(R,{children:"Надія додає кольорів не лише у вироби, а й в життя усієї команди. Окрім того, вона ще й активно допомагає в розробці моделей. Одним словом: незамінний член команди."})]})]})]})]})})})},he=()=>t.jsx(S,{style:{backgroundColor:"rgb(244, 244, 253)"},children:t.jsxs(k,{children:[t.jsx("h2",{children:"Зворотній зв'язок"}),t.jsx("p",{children:"Тут будуть лінки на соцмережі та контактний телефон"})]})}),ge=u.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 728px;
  }
`,fe=()=>t.jsx(S,{children:t.jsx(k,{children:t.jsx(ge,{children:"Сталевий лісоруб - це проєкт, що має за мету зробити Ваше життя яскравішим, прикрасивши його стильними і красивими виробами з дерева і металу на різноманітну тематику. Та перш за все, Сталевий Лісоруб - це люди. Тож, давайте знайомитися!"})})}),pe="/steel-woodcutter/assets/background-mobile-00lToOo_.jpg",me="/steel-woodcutter/assets/background-tablet-B7COaS2e.jpg",xe="/steel-woodcutter/assets/background-desctop-BSk1T-7v.jpg",be=u.section`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.4),
    rgba(17, 17, 17, 0)
  );

  @media screen and (max-width: 767px) {
    height: 600px;
    width: 320px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${pe});
  }

  @media screen and (min-width: 768px) {
    height: 600px;
    width: 768px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${me});
  }

  @media screen and (min-width: 1440px) {
    height: 600px;
    width: 100%;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${xe});
  }
`,je=u.div`
  position: absolute;
  height: 150px;
  width: 350px;
  padding: 20px;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    top: 100px;
    right: 30px;
  }

  @media screen and (min-width: 1440px) {
    top: 100px;
    right: 150px;
  }
`,we=u.h1`
  margin-bottom: 10px;
  font-size: 30px;
`,ve=u.p`
  font-size: 20px;
`,Oe=()=>t.jsx(be,{children:t.jsxs(je,{children:[t.jsx(we,{children:"Сталевий Лісоруб"}),t.jsx(ve,{children:"Створюємо затишну атмосферу з вами і для вас"})]})});var J={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A=w.createContext&&w.createContext(J),ye=["attr","size","title"];function Se(e,n){if(e==null)return{};var r=ke(e,n),i,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)i=c[l],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function ke(e,n){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(n.indexOf(i)>=0)continue;r[i]=e[i]}return r}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},D.apply(this,arguments)}function F(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,i)}return r}function U(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?F(Object(r),!0).forEach(function(i){Ee(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Ee(e,n,r){return n=Pe(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Pe(e){var n=Te(e,"string");return typeof n=="symbol"?n:n+""}function Te(e,n){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Q(e){return e&&e.map((n,r)=>w.createElement(n.tag,U({key:r},n.attr),Q(n.child)))}function ee(e){return n=>w.createElement(Me,D({attr:U({},e.attr)},n),Q(e.child))}function Me(e){var n=r=>{var{attr:i,size:l,title:c}=e,g=Se(e,ye),p=l||r.size||"1em",f;return r.className&&(f=r.className),e.className&&(f=(f?f+" ":"")+e.className),w.createElement("svg",D({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,g,{className:f,style:U(U({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&w.createElement("title",null,c),e.children)};return A!==void 0?w.createElement(A.Consumer,null,r=>n(r)):n(J)}function Re(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},child:[]}]})(e)}function Ie(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},child:[]}]})(e)}const Ce="/steel-woodcutter/assets/img_1-CRVHnVan.jpg",De="/steel-woodcutter/assets/img_2-CUr2BLtu.jpg",Ue="/steel-woodcutter/assets/img_3-b50hPMmP.jpg",_e="/steel-woodcutter/assets/img_4-5of3clJZ.jpg",ze="/steel-woodcutter/assets/img_5-uxUu1SKK.jpg",Le="/steel-woodcutter/assets/img_6-BiZI-dg2.jpg",$e="/steel-woodcutter/assets/img_7-CojO0Wkx.jpg",Ne="/steel-woodcutter/assets/img_8-BpaFt1XL.jpg",Be="Left",Xe="Right",We="Up",He="Down",v={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},B={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},K="mousemove",Y="mouseup",Ve="touchend",Ae="touchmove",Fe="touchstart";function Ke(e,n,r,i){return e>n?r>0?Xe:Be:i>0?He:We}function q(e,n){if(n===0)return e;const r=Math.PI/180*n,i=e[0]*Math.cos(r)+e[1]*Math.sin(r),l=e[1]*Math.cos(r)-e[0]*Math.sin(r);return[i,l]}function Ye(e,n){const r=a=>{const s="touches"in a;s&&a.touches.length>1||e((o,d)=>{d.trackMouse&&!s&&(document.addEventListener(K,i),document.addEventListener(Y,g));const{clientX:m,clientY:j}=s?a.touches[0]:a,x=q([m,j],d.rotationAngle);return d.onTouchStartOrOnMouseDown&&d.onTouchStartOrOnMouseDown({event:a}),Object.assign(Object.assign(Object.assign({},o),B),{initial:x.slice(),xy:x,start:a.timeStamp||0})})},i=a=>{e((s,o)=>{const d="touches"in a;if(d&&a.touches.length>1)return s;if(a.timeStamp-s.start>o.swipeDuration)return s.swiping?Object.assign(Object.assign({},s),{swiping:!1}):s;const{clientX:m,clientY:j}=d?a.touches[0]:a,[x,z]=q([m,j],o.rotationAngle),E=x-s.xy[0],P=z-s.xy[1],O=Math.abs(E),y=Math.abs(P),L=(a.timeStamp||0)-s.start,te=Math.sqrt(O*O+y*y)/(L||1),ne=[E/(L||1),P/(L||1)],$=Ke(O,y,E,P),W=typeof o.delta=="number"?o.delta:o.delta[$.toLowerCase()]||v.delta;if(O<W&&y<W&&!s.swiping)return s;const T={absX:O,absY:y,deltaX:E,deltaY:P,dir:$,event:a,first:s.first,initial:s.initial,velocity:te,vxvy:ne};T.first&&o.onSwipeStart&&o.onSwipeStart(T),o.onSwiping&&o.onSwiping(T);let H=!1;return(o.onSwiping||o.onSwiped||o[`onSwiped${$}`])&&(H=!0),H&&o.preventScrollOnSwipe&&o.trackTouch&&a.cancelable&&a.preventDefault(),Object.assign(Object.assign({},s),{first:!1,eventData:T,swiping:!0})})},l=a=>{e((s,o)=>{let d;if(s.swiping&&s.eventData){if(a.timeStamp-s.start<o.swipeDuration){d=Object.assign(Object.assign({},s.eventData),{event:a}),o.onSwiped&&o.onSwiped(d);const m=o[`onSwiped${d.dir}`];m&&m(d)}}else o.onTap&&o.onTap({event:a});return o.onTouchEndOrOnMouseUp&&o.onTouchEndOrOnMouseUp({event:a}),Object.assign(Object.assign(Object.assign({},s),B),{eventData:d})})},c=()=>{document.removeEventListener(K,i),document.removeEventListener(Y,g)},g=a=>{c(),l(a)},p=(a,s)=>{let o=()=>{};if(a&&a.addEventListener){const d=Object.assign(Object.assign({},v.touchEventOptions),s.touchEventOptions),m=[[Fe,r,d],[Ae,i,Object.assign(Object.assign({},d),s.preventScrollOnSwipe?{passive:!1}:{})],[Ve,l,d]];m.forEach(([j,x,z])=>a.addEventListener(j,x,z)),o=()=>m.forEach(([j,x])=>a.removeEventListener(j,x))}return o},b={ref:a=>{a!==null&&e((s,o)=>{if(s.el===a)return s;const d={};return s.el&&s.el!==a&&s.cleanUpTouch&&(s.cleanUpTouch(),d.cleanUpTouch=void 0),o.trackTouch&&a&&(d.cleanUpTouch=p(a,o)),Object.assign(Object.assign(Object.assign({},s),{el:a}),d)})}};return n.trackMouse&&(b.onMouseDown=r),[b,p]}function qe(e,n,r,i){return!n.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?n.preventScrollOnSwipe!==r.preventScrollOnSwipe||n.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,n)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,n)})}function Ge(e){const{trackMouse:n}=e,r=h.useRef(Object.assign({},B)),i=h.useRef(Object.assign({},v)),l=h.useRef(Object.assign({},i.current));l.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},v),e);let c;for(c in v)i.current[c]===void 0&&(i.current[c]=v[c]);const[g,p]=h.useMemo(()=>Ye(f=>r.current=f(r.current,i.current),{trackMouse:n}),[n]);return r.current=qe(r.current,i.current,l.current,p),g}const Ze=u.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 600px;
  position: relative;
`,Je=u.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 200ms ease-in-out;
`,G=u.button`
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
`,Qe=u.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,et=u.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 7px;
`,tt=u.button`
  all: unset;
  height: 20px;
  width: 20px;
  background: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 300ms ease-in-out;

  &:focus,
  &:hover {
    transform: scale(1.2);
  }

  ${e=>e.$active&&re`
      transform: scale(1.2);
    `}
`,I=[Ce,De,Ue,_e,ze,Le,$e,Ne],nt=()=>{const[e,n]=h.useState(0),r=()=>{n(c=>c===0?I.length-1:c-1)},i=()=>{n(c=>c===I.length-1?0:c+1)},l=Ge({onSwipedLeft:i,onSwipedRight:r,preventDefaultTouchmoveEvent:!0,trackMouse:!0});return h.useEffect(()=>{const c=setInterval(i,4e3);return()=>clearInterval(c)},[]),t.jsx(t.Fragment,{children:t.jsxs(Ze,{...l,children:[t.jsx(Qe,{children:I.map(c=>t.jsx(Je,{src:c,style:{translate:`${-100*e}%`}},c))}),t.jsx(G,{onClick:r,style:{left:"0"},children:t.jsx(Re,{})}),t.jsx(G,{onClick:i,style:{right:"0"},children:t.jsx(Ie,{})}),t.jsx(et,{children:I.map((c,g)=>t.jsx(tt,{$active:g===e,onClick:()=>n(g)},g))})]})})},rt=()=>t.jsx(S,{children:t.jsxs(k,{children:[t.jsx("h2",{children:"Наші Вироби"}),t.jsx(nt,{})]})}),it=()=>t.jsx(S,{style:{backgroundColor:"rgb(244, 244, 253)"},children:t.jsxs(k,{children:[t.jsx("h2",{children:"Що Ми Робимо"}),t.jsx("p",{children:"Сталевий лісоруб створює красу доступну кожному. Наші штуки це не тільки прикраси, а й іграшки."})]})}),at=()=>t.jsxs(t.Fragment,{children:[t.jsx(Oe,{}),t.jsx(fe,{}),t.jsx(ue,{}),t.jsx(it,{}),t.jsx(rt,{}),t.jsx(he,{})]});export{at as default};
