import{r as s,u as h,j as e,S as j,C as m,B as y,b as C}from"./index-CHVIeCee.js";import{B as M}from"./BackLink-BQpNjO3m.js";import{C as S,a as V}from"./CardDetails-D7kQ6yYb.js";const E=()=>{var c;const[l,d]=s.useState([]),i=h(),u=s.useRef(((c=i.state)==null?void 0:c.current)??"/categories"),[f,a]=s.useState(!1),[n,r]=s.useState(null),p=t=>{r(t),a(!0),document.body.style.overflow="hidden"},x=()=>{r(null),a(!1),document.body.style.overflow="auto"};return s.useEffect(()=>{(async()=>{try{const o=await C();d(o)}catch(o){console.error("Error fetching Valentine products:",o)}})()}),e.jsx(j,{children:e.jsxs(m,{children:[e.jsx(M,{to:u.current}),e.jsx("div",{children:"Valentine"}),e.jsx("ul",{children:l.map(t=>e.jsx("li",{children:e.jsx(S,{product:t,openModal:()=>p(t)})},t._id))}),n&&e.jsx(y,{isOpen:f,onRequestClose:x,children:e.jsx(V,{product:n})})]})})};export{E as Valentine,E as default};
