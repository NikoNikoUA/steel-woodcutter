import{m as H,d as r,r as h,j as t,S,C as O,G as m,l as Q}from"./index-B5d4dTkc.js";const P=H`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,G=H`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,tt=r.div`
  /* @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1000px;
  } */
`,_=r.img`
  border-radius: 20px;
  opacity: 0;

  &.animate {
    animation: ${P} 1s ease-out forwards;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`,et=r.img`
  border-radius: 20px;
  opacity: 0;

  &.animate {
    animation: ${G} 1s ease-out forwards;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`,nt=r.div`
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
`,F=r.div`
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
    align-items: center;
    gap: 50px;
  }
`,z=r.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`,E=r.p`
  max-width: 280px;
  text-align: start;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: center;
  }
`,D=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;

  &.animate {
    transform: translateX(0);
    animation: ${G} 1s ease-out forwards;
  }

  @media screen and (min-width: 320px) {
    max-width: 280px;
    text-align: start;
  }

  @media screen and (min-width: 768px) {
    max-width: 1000px;
    text-align: center;
  }
`,it=r(D)`
  transform: none;
  &.animate {
    transform: translateX(0);
    animation: ${P} 1s ease-out forwards;
  }

  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`,ct=r(D)`
  transform: none;

  &.animate {
    transform: translateX(0);
    animation: ${P} 1s ease-out forwards;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,rt="/steel-woodcutter/assets/resized-Bf4qycP-.jpg",at="/steel-woodcutter/assets/resized_Nadia-COy96iO1.jpg",st="/steel-woodcutter/assets/resized_Valentyn-BtbS8RqN.jpg",ot=()=>{const e=h.useRef(null),o=h.useRef(null),s=h.useRef(null),a=h.useRef(null),g=h.useRef(null),l=h.useRef(null),u=h.useRef(null);return h.useEffect(()=>{const j=(f,i)=>{f.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate"),i.unobserve(n.target))})},v=new IntersectionObserver(j,{threshold:.5});return[e.current,o.current,s.current,a.current,g.current,l.current,u.current].forEach(f=>{f&&v.observe(f)}),()=>{v.disconnect()}},[]),t.jsx(S,{children:t.jsx(O,{children:t.jsxs(nt,{children:[t.jsx("div",{children:t.jsx("h2",{children:"Про Нас"})}),t.jsxs(tt,{children:[t.jsxs(F,{children:[t.jsx(_,{alt:"image of a project creator",src:rt,ref:e}),t.jsxs(D,{ref:a,children:[t.jsx(z,{children:"Засновник проєкту: Косинський Микола"}),t.jsx(E,{children:"Коли він почав працювати з деревом, на думку навіть не спадало, що з часом це захоплення переросте в дещо більше: в пристрасть. Бажання створювати прості, але водночас стильні вироби, і ділитися ними з людьми - це те, що змушує Миколу рухатися вперед і не складати рук навіть у складні часи."})]})]}),t.jsxs(F,{children:[t.jsxs(it,{ref:g,children:[t.jsx(z,{children:" Металеве серце проєкту: Косинський Валентин"}),t.jsx(E,{children:'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без Валентина проєкт сміливо можна було б назвати просто "Лісоруб".'})]}),t.jsx("div",{children:t.jsx(et,{alt:"image of Valentyn",src:st,ref:o})}),t.jsxs(ct,{ref:l,children:[t.jsx(z,{children:" Металеве серце проєкту: Косинський Валентин"}),t.jsx(E,{children:'Усі металеві конструкції, які ви зможете знайти на сайті - робота цієї людини. Майстер на усі руки - це про нього. Без Валентина проєкт сміливо можна було б назвати просто "Лісоруб".'})]})]}),t.jsxs(F,{children:[t.jsx("div",{children:t.jsx(_,{alt:"image of Nadia",src:at,ref:s})}),t.jsxs(D,{ref:u,children:[t.jsx(z,{children:"Колір проєкту: Іванюк Надія"}),t.jsx(E,{children:"Надія додає кольорів не лише у вироби, а й в життя усієї команди. Окрім того, вона ще й активно допомагає в розробці моделей. Одним словом: незамінний член команди."})]})]})]})]})})})},q=H`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`,lt=r.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,dt=r.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`,A=r.p`
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: uppercase;
`,ht=r.button`
  all: unset;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    &:hover {
      animation: ${q} 0.5s ease-in-out;
    }
  }
`,V=r.button`
  all: unset;
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    &:hover {
      animation: ${q} 0.5s ease-in-out;
    }
  }
`,gt=()=>{const e=window.innerWidth<=767;return t.jsx(S,{style:{backgroundColor:e?"white":"rgb(244, 244, 253)"},children:t.jsx(O,{children:t.jsxs(lt,{children:[t.jsx("h2",{children:"Зворотній зв'язок"}),t.jsxs(dt,{children:[t.jsxs("li",{children:[t.jsx(A,{children:"Наш телефон:"}),t.jsx(ht,{type:"button",onClick:()=>window.location.href="tel:+380687586133",children:"Tel: +(380)687-58-61-33"})]}),t.jsxs("li",{children:[t.jsx(A,{children:"Ми в соцмережах:"}),t.jsx(V,{children:t.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://www.facebook.com/kolya.kosinski",children:"Facebook"})})]}),t.jsx("li",{children:t.jsx(V,{children:t.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/stalevy_lisorub",children:"Instagram"})})})]})]})})})},ut=r.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 728px;
  }
`,xt=()=>t.jsx(S,{children:t.jsx(O,{children:t.jsx(ut,{children:"Сталевий лісоруб - це проєкт, що має за мету зробити Ваше життя яскравішим, прикрасивши його стильними і красивими виробами з дерева і металу на різноманітну тематику. Та перш за все, Сталевий Лісоруб - це люди. Тож, давайте знайомитися!"})})}),pt="/steel-woodcutter/assets/background-mobile-00lToOo_.jpg",mt="/steel-woodcutter/assets/background-tablet-B7COaS2e.jpg",ft="/steel-woodcutter/assets/background-desctop-BSk1T-7v.jpg",wt=r.section`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.4),
    rgba(17, 17, 17, 0)
  );

  @media screen and (min-width: 320px) {
    height: 600px;
    width: 320px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${pt});
  }

  @media screen and (min-width: 768px) {
    height: 600px;
    width: 768px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${mt});
  }

  @media screen and (min-width: 1440px) {
    height: 600px;
    width: 100%;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${ft});
  }
`,jt=r.div`
  position: absolute;
  height: 150px;
  width: 350px;
  padding: 20px;
  background-color: transparent;

  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    top: 100px;
    right: 30px;
  }

  @media screen and (min-width: 1440px) {
    right: 150px;
  }
`,bt=r.h1`
  margin-bottom: 10px;
  font-size: 30px;
`,vt=r.p`
  font-size: 20px;
`,yt=()=>t.jsx(wt,{children:t.jsxs(jt,{children:[t.jsx(bt,{children:"Сталевий Лісоруб"}),t.jsx(vt,{children:"Створюємо затишну атмосферу з вами і для вас"})]})});function kt(e){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},child:[]}]})(e)}function St(e){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},child:[]}]})(e)}const Ot="/steel-woodcutter/assets/img_1-CRVHnVan.jpg",Ct="/steel-woodcutter/assets/img_2-CUr2BLtu.jpg",Mt="/steel-woodcutter/assets/img_3-b50hPMmP.jpg",Tt="/steel-woodcutter/assets/img_4-5of3clJZ.jpg",zt="/steel-woodcutter/assets/img_5-uxUu1SKK.jpg",Et="/steel-woodcutter/assets/img_6-BiZI-dg2.jpg",Bt="/steel-woodcutter/assets/img_7-CojO0Wkx.jpg",Dt="/steel-woodcutter/assets/img_8-BpaFt1XL.jpg",It="Left",Lt="Right",Rt="Up",Ft="Down",b={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},U={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},W="mousemove",N="mouseup",Ut="touchend",Ht="touchmove",Pt="touchstart";function Xt(e,o,s,a){return e>o?s>0?Lt:It:a>0?Ft:Rt}function K(e,o){if(o===0)return e;const s=Math.PI/180*o,a=e[0]*Math.cos(s)+e[1]*Math.sin(s),g=e[1]*Math.cos(s)-e[0]*Math.sin(s);return[a,g]}function $t(e,o){const s=i=>{const n="touches"in i;n&&i.touches.length>1||e((c,d)=>{d.trackMouse&&!n&&(document.addEventListener(W,a),document.addEventListener(N,u));const{clientX:x,clientY:w}=n?i.touches[0]:i,p=K([x,w],d.rotationAngle);return d.onTouchStartOrOnMouseDown&&d.onTouchStartOrOnMouseDown({event:i}),Object.assign(Object.assign(Object.assign({},c),U),{initial:p.slice(),xy:p,start:i.timeStamp||0})})},a=i=>{e((n,c)=>{const d="touches"in i;if(d&&i.touches.length>1)return n;if(i.timeStamp-n.start>c.swipeDuration)return n.swiping?Object.assign(Object.assign({},n),{swiping:!1}):n;const{clientX:x,clientY:w}=d?i.touches[0]:i,[p,I]=K([x,w],c.rotationAngle),C=p-n.xy[0],M=I-n.xy[1],y=Math.abs(C),k=Math.abs(M),L=(i.timeStamp||0)-n.start,Z=Math.sqrt(y*y+k*k)/(L||1),J=[C/(L||1),M/(L||1)],R=Xt(y,k,C,M),X=typeof c.delta=="number"?c.delta:c.delta[R.toLowerCase()]||b.delta;if(y<X&&k<X&&!n.swiping)return n;const T={absX:y,absY:k,deltaX:C,deltaY:M,dir:R,event:i,first:n.first,initial:n.initial,velocity:Z,vxvy:J};T.first&&c.onSwipeStart&&c.onSwipeStart(T),c.onSwiping&&c.onSwiping(T);let $=!1;return(c.onSwiping||c.onSwiped||c[`onSwiped${R}`])&&($=!0),$&&c.preventScrollOnSwipe&&c.trackTouch&&i.cancelable&&i.preventDefault(),Object.assign(Object.assign({},n),{first:!1,eventData:T,swiping:!0})})},g=i=>{e((n,c)=>{let d;if(n.swiping&&n.eventData){if(i.timeStamp-n.start<c.swipeDuration){d=Object.assign(Object.assign({},n.eventData),{event:i}),c.onSwiped&&c.onSwiped(d);const x=c[`onSwiped${d.dir}`];x&&x(d)}}else c.onTap&&c.onTap({event:i});return c.onTouchEndOrOnMouseUp&&c.onTouchEndOrOnMouseUp({event:i}),Object.assign(Object.assign(Object.assign({},n),U),{eventData:d})})},l=()=>{document.removeEventListener(W,a),document.removeEventListener(N,u)},u=i=>{l(),g(i)},j=(i,n)=>{let c=()=>{};if(i&&i.addEventListener){const d=Object.assign(Object.assign({},b.touchEventOptions),n.touchEventOptions),x=[[Pt,s,d],[Ht,a,Object.assign(Object.assign({},d),n.preventScrollOnSwipe?{passive:!1}:{})],[Ut,g,d]];x.forEach(([w,p,I])=>i.addEventListener(w,p,I)),c=()=>x.forEach(([w,p])=>i.removeEventListener(w,p))}return c},f={ref:i=>{i!==null&&e((n,c)=>{if(n.el===i)return n;const d={};return n.el&&n.el!==i&&n.cleanUpTouch&&(n.cleanUpTouch(),d.cleanUpTouch=void 0),c.trackTouch&&i&&(d.cleanUpTouch=j(i,c)),Object.assign(Object.assign(Object.assign({},n),{el:i}),d)})}};return o.trackMouse&&(f.onMouseDown=s),[f,j]}function _t(e,o,s,a){return!o.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?o.preventScrollOnSwipe!==s.preventScrollOnSwipe||o.touchEventOptions.passive!==s.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:a(e.el,o)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:a(e.el,o)})}function At(e){const{trackMouse:o}=e,s=h.useRef(Object.assign({},U)),a=h.useRef(Object.assign({},b)),g=h.useRef(Object.assign({},a.current));g.current=Object.assign({},a.current),a.current=Object.assign(Object.assign({},b),e);let l;for(l in b)a.current[l]===void 0&&(a.current[l]=b[l]);const[u,j]=h.useMemo(()=>$t(v=>s.current=v(s.current,a.current),{trackMouse:o}),[o]);return s.current=_t(s.current,a.current,g.current,j),u}const Vt=r.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 600px;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
`,Wt=r.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 200ms ease-in-out;
`,Y=r.button`
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 37px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  @media screen and (min-width: 1440px) {
    &:hover {
      background-color: rgb(0, 0, 0, 0.5);
    }
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
`,Nt=r.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,Kt=r.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 7px;
`,Yt=r.button`
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

  ${e=>e.$active&&Q`
      transform: scale(1.2);
    `}
`,B=[Ot,Ct,Mt,Tt,zt,Et,Bt,Dt],Gt=()=>{const[e,o]=h.useState(0),s=()=>{o(l=>l===0?B.length-1:l-1)},a=()=>{o(l=>l===B.length-1?0:l+1)},g=At({onSwipedLeft:a,onSwipedRight:s,preventDefaultTouchmoveEvent:!0,trackMouse:!0});return h.useEffect(()=>{const l=setInterval(a,4e3);return()=>clearInterval(l)},[]),t.jsx(t.Fragment,{children:t.jsxs(Vt,{...g,children:[t.jsx(Nt,{children:B.map(l=>t.jsx(Wt,{src:l,style:{translate:`${-100*e}%`}},l))}),t.jsx(Y,{onClick:s,style:{left:"0"},children:t.jsx(kt,{})}),t.jsx(Y,{onClick:a,style:{right:"0"},children:t.jsx(St,{})}),t.jsx(Kt,{children:B.map((l,u)=>t.jsx(Yt,{$active:u===e,onClick:()=>o(u)},u))})]})})},qt=()=>!(window.innerWidth<=767)&&t.jsx(S,{children:t.jsxs(O,{children:[t.jsx("h2",{style:{marginBottom:"20px"},children:"Наші Вироби"}),t.jsx(Gt,{})]})});function Zt(e){return m({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#FF9800",points:"24,37 19,31 19,25 29,25 29,31"},child:[]},{tag:"g",attr:{fill:"#FFA726"},child:[{tag:"circle",attr:{cx:"33",cy:"19",r:"2"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"2"},child:[]}]},{tag:"path",attr:{fill:"#FFB74D",d:"M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"},child:[]},{tag:"path",attr:{fill:"#424242",d:"M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"},child:[]},{tag:"g",attr:{fill:"#784719"},child:[{tag:"circle",attr:{cx:"28",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"19",r:"1"},child:[]}]},{tag:"polygon",attr:{fill:"#fff",points:"24,43 19,31 24,32 29,31"},child:[]},{tag:"polygon",attr:{fill:"#D32F2F",points:"23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"},child:[]},{tag:"path",attr:{fill:"#546E7A",d:"M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"},child:[]}]})(e)}function Jt(e){return m({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#7CB342",d:"M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"},child:[]},{tag:"path",attr:{fill:"#0277BD",d:"M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"},child:[]}]})(e)}function Qt(e){return m({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M44,36H30V16c0-1.1,0.9-2,2-2h8c0.6,0,1.2,0.3,1.6,0.8l6,7.7c0.3,0.4,0.4,0.8,0.4,1.2V32 C48,34.2,46.2,36,44,36z"},child:[]},{tag:"g",attr:{fill:"#9575CD"},child:[{tag:"path",attr:{d:"M8,36h22V13c0-2.2-1.8-4-4-4H4v23C4,34.2,5.8,36,8,36z"},child:[]},{tag:"rect",attr:{y:"9",width:"10",height:"2"},child:[]},{tag:"rect",attr:{y:"14",width:"10",height:"2"},child:[]},{tag:"rect",attr:{y:"19",width:"10",height:"2"},child:[]},{tag:"rect",attr:{y:"24",width:"10",height:"2"},child:[]}]},{tag:"g",attr:{fill:"#7E57C2"},child:[{tag:"rect",attr:{x:"4",y:"11",width:"16",height:"2"},child:[]},{tag:"rect",attr:{x:"4",y:"16",width:"12",height:"2"},child:[]},{tag:"rect",attr:{x:"4",y:"21",width:"8",height:"2"},child:[]},{tag:"rect",attr:{x:"4",y:"26",width:"4",height:"2"},child:[]}]},{tag:"g",attr:{fill:"#37474F"},child:[{tag:"circle",attr:{cx:"39",cy:"36",r:"5"},child:[]},{tag:"circle",attr:{cx:"16",cy:"36",r:"5"},child:[]}]},{tag:"g",attr:{fill:"#78909C"},child:[{tag:"circle",attr:{cx:"39",cy:"36",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"16",cy:"36",r:"2.5"},child:[]}]},{tag:"path",attr:{fill:"#455A64",d:"M44,26h-3.6c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.4-0.3-0.7-0.3H34c-0.6,0-1-0.4-1-1v-6 c0-0.6,0.4-1,1-1h5.5c0.3,0,0.6,0.1,0.8,0.4l4.5,5.4c0.1,0.2,0.2,0.4,0.2,0.6V25C45,25.6,44.6,26,44,26z"},child:[]}]})(e)}function te(e){return m({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#2E7D32",d:"M25.4,5.6c-0.8-0.8-2-0.8-2.8,0l-12,12c-0.8,0.8-0.8,2,0,2.8C11,20.8,11.5,21,12,21s1-0.2,1.4-0.6l12-12 C26.2,7.6,26.2,6.4,25.4,5.6z"},child:[]},{tag:"path",attr:{fill:"#1B5E20",d:"M37.4,17.6l-12-12c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l12,12C35,20.8,35.5,21,36,21s1-0.2,1.4-0.6 C38.2,19.6,38.2,18.4,37.4,17.6z"},child:[]},{tag:"path",attr:{fill:"#388E3C",d:"M37.4,41H10.6c-1,0-1.8-0.7-2-1.6L5,21h38l-3.7,18.4C39.1,40.3,38.3,41,37.4,41z"},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:"M43,23H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,22.1,44.1,23,43,23z"},child:[]},{tag:"polygon",attr:{fill:"#DCEDC8",points:"30.8,24.8 22.9,32.7 19.2,28.9 17,31.1 22.9,37 33,26.9"},child:[]}]})(e)}function ee(e){return m({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#607D8B",d:"M44.7,11L36,19.6c0,0-2.6,0-5.2-2.6s-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8,0.4-14.4,4 c-5.4,5.4-0.6,12.3-2,13.7C12.9,28.7,5.1,34.7,4.9,35c-2.3,2.3-2.4,6-0.2,8.2c2.2,2.2,5.9,2.1,8.2-0.2c0.3-0.3,6.7-8.4,14.2-15.9 c1.4-1.4,8,3.7,13.6-1.8C44.2,21.7,45.9,15.9,44.7,11z M9.4,41.1c-1.4,0-2.5-1.1-2.5-2.5C6.9,37.1,8,36,9.4,36 c1.4,0,2.5,1.1,2.5,2.5C11.9,39.9,10.8,41.1,9.4,41.1z"},child:[]}]})(e)}function ne(e){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32z"},child:[]},{tag:"path",attr:{d:"M352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m230 480 262-262a13.81 13.81 0 0 0 4-10V80"},child:[]}]})(e)}const ie=r.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ce=r.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
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
    height: 100px;
    background-color: white;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  p {
    font-size: 24px;
    padding: 15px;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`,re=()=>t.jsx(S,{style:{backgroundColor:"rgb(244, 244, 253)"},children:t.jsx(O,{children:t.jsxs(ie,{children:[t.jsx("h2",{children:"Що Ми Робимо"}),t.jsxs(ce,{children:[t.jsxs("li",{children:[t.jsx("div",{children:t.jsx(ee,{})}),t.jsx("p",{children:"Виготовляємо стильні вироби на різноманітну тематику"})]}),t.jsxs("li",{children:[t.jsx("div",{children:t.jsx(te,{})}),t.jsx("p",{children:"Використовуємо натуральні матеріали"})]}),t.jsxs("li",{children:[t.jsx("div",{children:t.jsx(ne,{})}),t.jsx("p",{children:"Пропонуємо доступні ціни"})]}),t.jsxs("li",{children:[t.jsx("div",{children:t.jsx(Jt,{})}),t.jsx("p",{children:"Cтворюємо красу доступну кожному"})]}),t.jsxs("li",{children:[t.jsx("div",{children:t.jsx(Qt,{})}),t.jsx("p",{children:"Вчасно доставляємо замовлення"})]}),t.jsxs("li",{children:[t.jsx("div",{children:t.jsx(Zt,{})}),t.jsx("p",{children:"Дотримуємося принципу - кожен клієнт важливий"})]})]})]})})}),se=()=>t.jsxs(t.Fragment,{children:[t.jsx(yt,{}),t.jsx(xt,{}),t.jsx(ot,{}),t.jsx(re,{}),t.jsx(qt,{}),t.jsx(gt,{})]});export{se as default};
