import{r as e,u as p,j as s,B as x,a as j}from"./index-Dxu3nFf6.js";import{B as C}from"./BackLink-CIVMKMdb.js";import{C as y,a as M}from"./CardDetails-8PLdau0z.js";const P=()=>{var d;const[a,l]=e.useState([]),i=p(),u=e.useRef(((d=i.state)==null?void 0:d.current)??"/categories"),[f,r]=e.useState(!1),[c,n]=e.useState(null),h=t=>{n(t),r(!0),document.body.style.overflow="hidden"},m=()=>{n(null),r(!1),document.body.style.overflow="auto"};return e.useEffect(()=>{(async()=>{try{const o=await j();l(o)}catch(o){console.error("Error fetching Christmas products:",o)}})()},[]),s.jsxs(s.Fragment,{children:[s.jsx(C,{to:u.current}),s.jsx("div",{children:"Christmas"}),s.jsx("ul",{children:a.map(t=>s.jsx("li",{children:s.jsx(y,{product:a,openModal:()=>h(t)})},t._id))}),c&&s.jsx(x,{isOpen:f,onRequestClose:m,children:s.jsx(M,{product:c})})]})};export{P as Christmas,P as default};
