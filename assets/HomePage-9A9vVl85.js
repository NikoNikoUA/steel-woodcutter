import{m as J,d as l,r as u,j as e,S as C,C as M,R as v,l as it}from"./index-BElmc7Pu.js";const N=J`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,L=J`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,X=l.img`
  border-radius: 20px;
  opacity: 0;
  /* transform: translateX(-100%); */

  &.animate {
    animation: ${N} 1s ease-out forwards;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`,ct=l.img`
  border-radius: 20px;
  opacity: 0;
  /* transform: translateX(-100%); */

  &.animate {
    animation: ${L} 1s ease-out forwards;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`,rt=l.div`
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
`,H=l.div`
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
`,z=l.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`,T=l.p`
  width: 280px;
  text-align: left;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
    text-align: center;
  }
`,I=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(100%);

  &.animate {
    animation: ${L} 1s ease-out forwards;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`,at=l(I)`
  &.animate {
    animation: ${N} 1s ease-out forwards;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${L} 1s ease-out forwards; */

  @media screen and (max-width: 767px) {
    display: none;
  }

  /* @media screen and (min-width: 768px) {
  } */
`,st=l(I)`
  &.animate {
    animation: ${N} 1s ease-out forwards;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${L} 1s ease-out forwards; */

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ot="/steel-woodcutter/assets/resized-Bf4qycP-.jpg",lt="/steel-woodcutter/assets/resized_Nadia-COy96iO1.jpg",dt="/steel-woodcutter/assets/resized_Valentyn-BtbS8RqN.jpg",ht=()=>{const t=u.useRef(null),n=u.useRef(null),i=u.useRef(null),c=u.useRef(null),d=u.useRef(null),o=u.useRef(null),g=u.useRef(null);return u.useEffect(()=>{const x=(j,a)=>{j.forEach(r=>{r.isIntersecting&&(r.target.classList.add("animate"),a.unobserve(r.target))})},p=new IntersectionObserver(x,{threshold:.5});return[t.current,n.current,i.current,c.current,d.current,o.current,g.current].forEach(j=>{j&&p.observe(j)}),()=>{p.disconnect()}},[]),e.jsx(C,{children:e.jsx(M,{children:e.jsxs(rt,{children:[e.jsx("div",{children:e.jsx("h2",{children:"Про Нас"})}),e.jsxs("div",{style:{width:"1000px"},children:[e.jsxs(H,{children:[e.jsx(X,{alt:"image of a project creator",src:ot,ref:t}),e.jsxs(I,{ref:c,children:[e.jsx(z,{children:"Засновник проєкту: Косинський Микола"}),e.jsx(T,{children:"Коли він почав працювати з деревом, на думку навіть не спадало, що з часом це захоплення переросте в дещо більше: в пристрасть. Бажання створюватися прості, але водночас стильні вироби, і ділитися ними з людьми - це те, що змушує Миколу рухатися вперед і не складати рук навіть у складні часи."})]})]}),e.jsxs(H,{children:[e.jsxs(at,{ref:d,children:[e.jsx(z,{children:" Металеве серце проєкту: Косинський Валентин"}),e.jsx(T,{children:'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без Валентина проєкт сміливо можна було б назвати просто "Лісоруб".'})]}),e.jsx("div",{children:e.jsx(ct,{alt:"image of Valentyn",src:dt,ref:n})}),e.jsxs(st,{ref:o,children:[e.jsx(z,{children:" Металеве серце проєкту: Косинський Валентин"}),e.jsx(T,{children:'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без Валентина проєкт сміливо можна було б назвати просто "Лісоруб".'})]})]}),e.jsxs(H,{children:[e.jsx("div",{children:e.jsx(X,{alt:"image of Nadia",src:lt,ref:i})}),e.jsxs(I,{ref:g,children:[e.jsx(z,{children:"Колір проєкту: Іванюк Надія"}),e.jsx(T,{children:"Надія додає кольорів не лише у вироби, а й в життя усієї команди. Окрім того, вона ще й активно допомагає в розробці моделей. Одним словом: незамінний член команди."})]})]})]})]})})})},ut=()=>{const t=window.innerWidth<=767;return e.jsx(C,{style:{backgroundColor:t?"white":"rgb(244, 244, 253)"},children:e.jsxs(M,{children:[e.jsx("h2",{children:"Зворотній зв'язок"}),e.jsx("p",{children:"Тут будуть лінки на соцмережі та контактний телефон"})]})})},gt=l.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 728px;
  }
`,pt=()=>e.jsx(C,{children:e.jsx(M,{children:e.jsx(gt,{children:"Сталевий лісоруб - це проєкт, що має за мету зробити Ваше життя яскравішим, прикрасивши його стильними і красивими виробами з дерева і металу на різноманітну тематику. Та перш за все, Сталевий Лісоруб - це люди. Тож, давайте знайомитися!"})})}),xt="/steel-woodcutter/assets/background-mobile-00lToOo_.jpg",ft="/steel-woodcutter/assets/background-tablet-B7COaS2e.jpg",mt="/steel-woodcutter/assets/background-desctop-BSk1T-7v.jpg",wt=l.section`
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
      url(${xt});
  }

  @media screen and (min-width: 768px) {
    height: 600px;
    width: 768px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${ft});
  }

  @media screen and (min-width: 1440px) {
    height: 600px;
    width: 100%;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${mt});
  }
`,jt=l.div`
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
`,bt=l.h1`
  margin-bottom: 10px;
  font-size: 30px;
`,vt=l.p`
  font-size: 20px;
`,yt=()=>e.jsx(wt,{children:e.jsxs(jt,{children:[e.jsx(bt,{children:"Сталевий Лісоруб"}),e.jsx(vt,{children:"Створюємо затишну атмосферу з вами і для вас"})]})});var Q={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A=v.createContext&&v.createContext(Q),Ot=["attr","size","title"];function St(t,n){if(t==null)return{};var i=Ct(t,n),c,d;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(d=0;d<o.length;d++)c=o[d],!(n.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(t,c)&&(i[c]=t[c])}return i}function Ct(t,n){if(t==null)return{};var i={};for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){if(n.indexOf(c)>=0)continue;i[c]=t[c]}return i}function B(){return B=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c])}return t},B.apply(this,arguments)}function K(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);n&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable})),i.push.apply(i,c)}return i}function R(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?K(Object(i),!0).forEach(function(c){Mt(t,c,i[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(i,c))})}return t}function Mt(t,n,i){return n=kt(n),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function kt(t){var n=Et(t,"string");return typeof n=="symbol"?n:n+""}function Et(t,n){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var c=i.call(t,n||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function tt(t){return t&&t.map((n,i)=>v.createElement(n.tag,R({key:i},n.attr),tt(n.child)))}function w(t){return n=>v.createElement(Pt,B({attr:R({},t.attr)},n),tt(t.child))}function Pt(t){var n=i=>{var{attr:c,size:d,title:o}=t,g=St(t,Ot),x=d||i.size||"1em",p;return i.className&&(p=i.className),t.className&&(p=(p?p+" ":"")+t.className),v.createElement("svg",B({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,c,g,{className:p,style:R(R({color:t.color||i.color},i.style),t.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),o&&v.createElement("title",null,o),t.children)};return A!==void 0?v.createElement(A.Consumer,null,i=>n(i)):n(Q)}function zt(t){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},child:[]}]})(t)}function Tt(t){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},child:[]}]})(t)}const Dt="/steel-woodcutter/assets/img_1-CRVHnVan.jpg",It="/steel-woodcutter/assets/img_2-CUr2BLtu.jpg",Bt="/steel-woodcutter/assets/img_3-b50hPMmP.jpg",Rt="/steel-woodcutter/assets/img_4-5of3clJZ.jpg",Lt="/steel-woodcutter/assets/img_5-uxUu1SKK.jpg",Ft="/steel-woodcutter/assets/img_6-BiZI-dg2.jpg",Ut="/steel-woodcutter/assets/img_7-CojO0Wkx.jpg",_t="/steel-woodcutter/assets/img_8-BpaFt1XL.jpg",Ht="Left",$t="Right",Nt="Up",Wt="Down",y={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},$={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Y="mousemove",q="mouseup",Vt="touchend",Xt="touchmove",At="touchstart";function Kt(t,n,i,c){return t>n?i>0?$t:Ht:c>0?Wt:Nt}function G(t,n){if(n===0)return t;const i=Math.PI/180*n,c=t[0]*Math.cos(i)+t[1]*Math.sin(i),d=t[1]*Math.cos(i)-t[0]*Math.sin(i);return[c,d]}function Yt(t,n){const i=a=>{const r="touches"in a;r&&a.touches.length>1||t((s,h)=>{h.trackMouse&&!r&&(document.addEventListener(Y,c),document.addEventListener(q,g));const{clientX:f,clientY:b}=r?a.touches[0]:a,m=G([f,b],h.rotationAngle);return h.onTouchStartOrOnMouseDown&&h.onTouchStartOrOnMouseDown({event:a}),Object.assign(Object.assign(Object.assign({},s),$),{initial:m.slice(),xy:m,start:a.timeStamp||0})})},c=a=>{t((r,s)=>{const h="touches"in a;if(h&&a.touches.length>1)return r;if(a.timeStamp-r.start>s.swipeDuration)return r.swiping?Object.assign(Object.assign({},r),{swiping:!1}):r;const{clientX:f,clientY:b}=h?a.touches[0]:a,[m,F]=G([f,b],s.rotationAngle),k=m-r.xy[0],E=F-r.xy[1],O=Math.abs(k),S=Math.abs(E),U=(a.timeStamp||0)-r.start,et=Math.sqrt(O*O+S*S)/(U||1),nt=[k/(U||1),E/(U||1)],_=Kt(O,S,k,E),W=typeof s.delta=="number"?s.delta:s.delta[_.toLowerCase()]||y.delta;if(O<W&&S<W&&!r.swiping)return r;const P={absX:O,absY:S,deltaX:k,deltaY:E,dir:_,event:a,first:r.first,initial:r.initial,velocity:et,vxvy:nt};P.first&&s.onSwipeStart&&s.onSwipeStart(P),s.onSwiping&&s.onSwiping(P);let V=!1;return(s.onSwiping||s.onSwiped||s[`onSwiped${_}`])&&(V=!0),V&&s.preventScrollOnSwipe&&s.trackTouch&&a.cancelable&&a.preventDefault(),Object.assign(Object.assign({},r),{first:!1,eventData:P,swiping:!0})})},d=a=>{t((r,s)=>{let h;if(r.swiping&&r.eventData){if(a.timeStamp-r.start<s.swipeDuration){h=Object.assign(Object.assign({},r.eventData),{event:a}),s.onSwiped&&s.onSwiped(h);const f=s[`onSwiped${h.dir}`];f&&f(h)}}else s.onTap&&s.onTap({event:a});return s.onTouchEndOrOnMouseUp&&s.onTouchEndOrOnMouseUp({event:a}),Object.assign(Object.assign(Object.assign({},r),$),{eventData:h})})},o=()=>{document.removeEventListener(Y,c),document.removeEventListener(q,g)},g=a=>{o(),d(a)},x=(a,r)=>{let s=()=>{};if(a&&a.addEventListener){const h=Object.assign(Object.assign({},y.touchEventOptions),r.touchEventOptions),f=[[At,i,h],[Xt,c,Object.assign(Object.assign({},h),r.preventScrollOnSwipe?{passive:!1}:{})],[Vt,d,h]];f.forEach(([b,m,F])=>a.addEventListener(b,m,F)),s=()=>f.forEach(([b,m])=>a.removeEventListener(b,m))}return s},j={ref:a=>{a!==null&&t((r,s)=>{if(r.el===a)return r;const h={};return r.el&&r.el!==a&&r.cleanUpTouch&&(r.cleanUpTouch(),h.cleanUpTouch=void 0),s.trackTouch&&a&&(h.cleanUpTouch=x(a,s)),Object.assign(Object.assign(Object.assign({},r),{el:a}),h)})}};return n.trackMouse&&(j.onMouseDown=i),[j,x]}function qt(t,n,i,c){return!n.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?n.preventScrollOnSwipe!==i.preventScrollOnSwipe||n.touchEventOptions.passive!==i.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:c(t.el,n)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:c(t.el,n)})}function Gt(t){const{trackMouse:n}=t,i=u.useRef(Object.assign({},$)),c=u.useRef(Object.assign({},y)),d=u.useRef(Object.assign({},c.current));d.current=Object.assign({},c.current),c.current=Object.assign(Object.assign({},y),t);let o;for(o in y)c.current[o]===void 0&&(c.current[o]=y[o]);const[g,x]=u.useMemo(()=>Yt(p=>i.current=p(i.current,c.current),{trackMouse:n}),[n]);return i.current=qt(i.current,c.current,d.current,x),g}const Zt=l.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 600px;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
`,Jt=l.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 200ms ease-in-out;
`,Z=l.button`
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
`,Qt=l.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,te=l.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 7px;
`,ee=l.button`
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

  ${t=>t.$active&&it`
      transform: scale(1.2);
    `}
`,D=[Dt,It,Bt,Rt,Lt,Ft,Ut,_t],ne=()=>{const[t,n]=u.useState(0),i=()=>{n(o=>o===0?D.length-1:o-1)},c=()=>{n(o=>o===D.length-1?0:o+1)},d=Gt({onSwipedLeft:c,onSwipedRight:i,preventDefaultTouchmoveEvent:!0,trackMouse:!0});return u.useEffect(()=>{const o=setInterval(c,4e3);return()=>clearInterval(o)},[]),e.jsx(e.Fragment,{children:e.jsxs(Zt,{...d,children:[e.jsx(Qt,{children:D.map(o=>e.jsx(Jt,{src:o,style:{translate:`${-100*t}%`}},o))}),e.jsx(Z,{onClick:i,style:{left:"0"},children:e.jsx(zt,{})}),e.jsx(Z,{onClick:c,style:{right:"0"},children:e.jsx(Tt,{})}),e.jsx(te,{children:D.map((o,g)=>e.jsx(ee,{$active:g===t,onClick:()=>n(g)},g))})]})})},ie=()=>!(window.innerWidth<=767)&&e.jsx(C,{children:e.jsxs(M,{children:[e.jsx("h2",{children:"Наші Вироби"}),e.jsx(ne,{})]})});function ce(t){return w({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#FF9800",points:"24,37 19,31 19,25 29,25 29,31"},child:[]},{tag:"g",attr:{fill:"#FFA726"},child:[{tag:"circle",attr:{cx:"33",cy:"19",r:"2"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"2"},child:[]}]},{tag:"path",attr:{fill:"#FFB74D",d:"M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"},child:[]},{tag:"path",attr:{fill:"#424242",d:"M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"},child:[]},{tag:"g",attr:{fill:"#784719"},child:[{tag:"circle",attr:{cx:"28",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"19",r:"1"},child:[]}]},{tag:"polygon",attr:{fill:"#fff",points:"24,43 19,31 24,32 29,31"},child:[]},{tag:"polygon",attr:{fill:"#D32F2F",points:"23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"},child:[]},{tag:"path",attr:{fill:"#546E7A",d:"M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"},child:[]}]})(t)}function re(t){return w({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#7CB342",d:"M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"},child:[]},{tag:"path",attr:{fill:"#0277BD",d:"M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"},child:[]}]})(t)}function ae(t){return w({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M44,36H30V16c0-1.1,0.9-2,2-2h8c0.6,0,1.2,0.3,1.6,0.8l6,7.7c0.3,0.4,0.4,0.8,0.4,1.2V32 C48,34.2,46.2,36,44,36z"},child:[]},{tag:"g",attr:{fill:"#9575CD"},child:[{tag:"path",attr:{d:"M8,36h22V13c0-2.2-1.8-4-4-4H4v23C4,34.2,5.8,36,8,36z"},child:[]},{tag:"rect",attr:{y:"9",width:"10",height:"2"},child:[]},{tag:"rect",attr:{y:"14",width:"10",height:"2"},child:[]},{tag:"rect",attr:{y:"19",width:"10",height:"2"},child:[]},{tag:"rect",attr:{y:"24",width:"10",height:"2"},child:[]}]},{tag:"g",attr:{fill:"#7E57C2"},child:[{tag:"rect",attr:{x:"4",y:"11",width:"16",height:"2"},child:[]},{tag:"rect",attr:{x:"4",y:"16",width:"12",height:"2"},child:[]},{tag:"rect",attr:{x:"4",y:"21",width:"8",height:"2"},child:[]},{tag:"rect",attr:{x:"4",y:"26",width:"4",height:"2"},child:[]}]},{tag:"g",attr:{fill:"#37474F"},child:[{tag:"circle",attr:{cx:"39",cy:"36",r:"5"},child:[]},{tag:"circle",attr:{cx:"16",cy:"36",r:"5"},child:[]}]},{tag:"g",attr:{fill:"#78909C"},child:[{tag:"circle",attr:{cx:"39",cy:"36",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"16",cy:"36",r:"2.5"},child:[]}]},{tag:"path",attr:{fill:"#455A64",d:"M44,26h-3.6c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.4-0.3-0.7-0.3H34c-0.6,0-1-0.4-1-1v-6 c0-0.6,0.4-1,1-1h5.5c0.3,0,0.6,0.1,0.8,0.4l4.5,5.4c0.1,0.2,0.2,0.4,0.2,0.6V25C45,25.6,44.6,26,44,26z"},child:[]}]})(t)}function se(t){return w({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#2E7D32",d:"M25.4,5.6c-0.8-0.8-2-0.8-2.8,0l-12,12c-0.8,0.8-0.8,2,0,2.8C11,20.8,11.5,21,12,21s1-0.2,1.4-0.6l12-12 C26.2,7.6,26.2,6.4,25.4,5.6z"},child:[]},{tag:"path",attr:{fill:"#1B5E20",d:"M37.4,17.6l-12-12c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l12,12C35,20.8,35.5,21,36,21s1-0.2,1.4-0.6 C38.2,19.6,38.2,18.4,37.4,17.6z"},child:[]},{tag:"path",attr:{fill:"#388E3C",d:"M37.4,41H10.6c-1,0-1.8-0.7-2-1.6L5,21h38l-3.7,18.4C39.1,40.3,38.3,41,37.4,41z"},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:"M43,23H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,22.1,44.1,23,43,23z"},child:[]},{tag:"polygon",attr:{fill:"#DCEDC8",points:"30.8,24.8 22.9,32.7 19.2,28.9 17,31.1 22.9,37 33,26.9"},child:[]}]})(t)}function oe(t){return w({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#607D8B",d:"M44.7,11L36,19.6c0,0-2.6,0-5.2-2.6s-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8,0.4-14.4,4 c-5.4,5.4-0.6,12.3-2,13.7C12.9,28.7,5.1,34.7,4.9,35c-2.3,2.3-2.4,6-0.2,8.2c2.2,2.2,5.9,2.1,8.2-0.2c0.3-0.3,6.7-8.4,14.2-15.9 c1.4-1.4,8,3.7,13.6-1.8C44.2,21.7,45.9,15.9,44.7,11z M9.4,41.1c-1.4,0-2.5-1.1-2.5-2.5C6.9,37.1,8,36,9.4,36 c1.4,0,2.5,1.1,2.5,2.5C11.9,39.9,10.8,41.1,9.4,41.1z"},child:[]}]})(t)}function le(t){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32z"},child:[]},{tag:"path",attr:{d:"M352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m230 480 262-262a13.81 13.81 0 0 0 4-10V80"},child:[]}]})(t)}const de=l.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,he=l.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    width: 280px;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
      width: 331px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 70px;
    background-color: white;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  p {
    font-size: 18px;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`,ue=()=>e.jsx(C,{style:{backgroundColor:"rgb(244, 244, 253)"},children:e.jsx(M,{children:e.jsxs(de,{children:[e.jsx("h2",{children:"Що Ми Робимо"}),e.jsxs(he,{children:[e.jsxs("li",{children:[e.jsx("div",{children:e.jsx(oe,{})}),e.jsx("p",{children:"Виготовляємо стильні вироби на різноманітну тематику"})]}),e.jsxs("li",{children:[e.jsx("div",{children:e.jsx(se,{})}),e.jsx("p",{children:"Використовуємо натуральні матеріали"})]}),e.jsxs("li",{children:[e.jsx("div",{children:e.jsx(le,{})}),e.jsx("p",{children:"Пропонуємо доступні ціни"})]}),e.jsxs("li",{children:[e.jsx("div",{children:e.jsx(re,{})}),e.jsx("p",{children:"Cтворюємо красу доступну кожному"})]}),e.jsxs("li",{children:[e.jsx("div",{children:e.jsx(ae,{})}),e.jsx("p",{children:"Вчасно доставляємо замовлення"})]}),e.jsxs("li",{children:[e.jsx("div",{children:e.jsx(ce,{})}),e.jsx("p",{children:"Дотримуємося принципу - кожен клієнт важливий"})]})]})]})})}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(yt,{}),e.jsx(pt,{}),e.jsx(ht,{}),e.jsx(ue,{}),e.jsx(ie,{}),e.jsx(ut,{})]});export{pe as default};
