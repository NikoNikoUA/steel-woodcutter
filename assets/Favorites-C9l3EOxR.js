import{r as o,u as j,j as e,S as v,C as y,a as g,L as S,B as C,f as F}from"./index-Br7aIxof.js";import{C as L,a as M}from"./CardDetails-D7ln7Vd2.js";import{B as k}from"./BackLink-DO94O_DZ.js";const E=()=>{var c;const[a,n]=o.useState([]),[d,r]=o.useState(!1),[i,l]=o.useState(null),f=j(),u=o.useRef(((c=f.state)==null?void 0:c.from)??"/categories"),x=t=>{l(t),r(!0),document.body.style.overflow="hidden"},p=()=>{l(null),r(!1),document.body.style.overflow="auto"};o.useEffect(()=>{(async()=>{try{const s=await F();n(s)}catch(s){console.log("Errror fetching favorites:",s)}})()},[]);const h=t=>{n(s=>s.filter(m=>m._id!==t))};return e.jsx(v,{children:e.jsxs(y,{"aria-hidden":"false",children:[e.jsx(k,{to:u.current}),a&&a.length>0?e.jsx(g,{children:a.map(t=>e.jsx("li",{children:e.jsx(L,{product:t,openModal:()=>x(t),onFavRemove:h})},t._id))}):e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",marginTop:"30px"},children:e.jsxs("p",{style:{fontSize:"30px"},children:["Список порожній. Перейдіть в ",e.jsx(S,{style:{textDecoration:"underline",fontWeight:"bold"},to:"/categories",children:"Категорії"})," ","щоб додати до улюблених"]})}),i&&e.jsx(C,{isOpen:d,onRequestClose:p,children:e.jsx(M,{product:i})})]})})};export{E as default};
