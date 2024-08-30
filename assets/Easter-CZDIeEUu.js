import{d as f,r as s,j as e,B as p,a as x,u as m,S as h,C as j}from"./index-C_Gp07FK.js";import{B as y}from"./BackLink-D0NhNd9i.js";import{C as E,a as w}from"./CardDetails-ftGJnR7-.js";const C=f.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,M=()=>{const[a,r]=s.useState([]),[o,c]=s.useState(!1),[i,d]=s.useState(null),l=t=>{d(t),c(!0),document.body.style.overflow="hidden"},u=()=>{d(null),c(!1),document.body.style.overflow="auto"};return s.useEffect(()=>{(async()=>{try{const n=await x();r(n)}catch(n){console.error("Error fetching Christmas products:",n)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(C,{children:a.map(t=>e.jsx("li",{children:e.jsx(E,{product:t,openModal:()=>l(t)})},t._id))}),i&&e.jsx(p,{isOpen:o,onRequestClose:u,children:e.jsx(w,{product:i})})]})},k=()=>{var o;const a=m(),r=s.useRef(((o=a.state)==null?void 0:o.from)??"/categories");return e.jsx(h,{children:e.jsxs(j,{children:[e.jsx(y,{to:r.current}),e.jsx(M,{})]})})};export{k as Easter,k as default};
