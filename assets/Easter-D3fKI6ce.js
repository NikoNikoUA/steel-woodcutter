import{r as e,u as f,j as t}from"./index-B3AWVV4H.js";import{B as u,f as d}from"./api-LocsDuck.js";const l=()=>{var a;const[c,o]=e.useState([]),n=f(),i=e.useRef(((a=n.state)==null?void 0:a.from)??"/categories");return e.useEffect(()=>{(async()=>{try{const s=await d();o(s)}catch(s){console.error("Error fetching Christmas products:",s)}})()},[]),t.jsxs(t.Fragment,{children:[t.jsx(u,{to:i.current}),t.jsx("div",{children:"Easter"}),t.jsx("ul",{children:c.map(r=>t.jsx("li",{children:r.name},r._id))})]})};export{l as Easter,l as default};
