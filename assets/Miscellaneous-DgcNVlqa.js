import{r,u,j as s}from"./index-B3AWVV4H.js";import{B as l,c as d}from"./api-LocsDuck.js";const m=()=>{var c;const[a,o]=r.useState([]),n=u(),i=r.useRef(((c=n.state)==null?void 0:c.current)??"/categories");return r.useEffect(()=>{(async()=>{try{const e=await d();o(e)}catch(e){console.error("Error fetching Christmas products:",e)}})()},[]),s.jsxs(s.Fragment,{children:[s.jsx(l,{to:i.current}),s.jsx("div",{children:"Miscellaneous"}),s.jsx("ul",{children:a.map(t=>s.jsx("li",{children:t.name},t._id))})]})};export{m as Miscellaneous,m as default};
