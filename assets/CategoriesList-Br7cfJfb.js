import{j as e,L as t,d as i,N as a,S as c,C as l,a as d}from"./index-B5d4dTkc.js";const h=({to:o,children:n})=>e.jsx(e.Fragment,{children:e.jsxs(t,{to:o,children:[e.jsx("button",{children:"Go back"}),n]})}),r=i(a)`
  color: ${o=>o.theme.colors.mainColor};
  transition: color 250ms ease-in-out;

  &.active {
    color: white;
    font-weight: 500;
  }
`,s=i.li`
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;

  padding: 10px 14px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-in-out;

  @media screen and (min-width: 1440px) {
    &:hover {
      background-color: transparent;

      ${r} {
        color: black;
      }
    }
  }
`,j=()=>e.jsx(c,{children:e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(s,{children:e.jsx(r,{to:"/categories/easter",children:"Пасха"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/christmas",children:"Різдво"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/valentine",children:"День Валентина"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/miscellaneous",children:"Різне"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/book",children:"Книга"})})]})})});export{h as B,j as C};
