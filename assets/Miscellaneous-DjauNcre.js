import{r as t,u as x,j as e,S as j,C as m,B as M,c as C}from"./index-CHVIeCee.js";import{B as y}from"./BackLink-BQpNjO3m.js";import{C as S,a as k}from"./CardDetails-D7kQ6yYb.js";const v=()=>{var n;const[l,d]=t.useState([]),i=x(),u=t.useRef(((n=i.state)==null?void 0:n.current)??"/categories"),[f,a]=t.useState(!1),[c,r]=t.useState(null),p=s=>{r(s),a(!0),document.body.style.overflow="hidden"},h=()=>{r(null),a(!1),document.body.style.overflow="auto"};return t.useEffect(()=>{(async()=>{try{const o=await C();d(o)}catch(o){console.error("Error fetching Christmas products:",o)}})()},[]),e.jsx(j,{children:e.jsxs(m,{children:[e.jsx(y,{to:u.current}),e.jsx("div",{children:"Miscellaneous"}),e.jsx("ul",{children:l.map(s=>e.jsx("li",{children:e.jsx(S,{product:s,openModal:()=>p(s)})},s._id))}),c&&e.jsx(M,{isOpen:f,onRequestClose:h,children:e.jsx(k,{product:c})})]})})};export{v as Miscellaneous,v as default};
