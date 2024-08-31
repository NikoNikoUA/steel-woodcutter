import{j as e,L as o,d as i,S as c,C as a,a as l}from"./index-C9QAlybP.js";const x=({to:n,children:t})=>e.jsx(e.Fragment,{children:e.jsxs(o,{to:n,children:[e.jsx("button",{children:"Go back"}),t]})}),r=i(o)`
  color: ${n=>n.theme.colors.mainColor};
  transition: color 250ms ease-in-out;
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
`,h=()=>e.jsx(c,{children:e.jsx(a,{children:e.jsxs(l,{children:[e.jsx(s,{children:e.jsx(r,{to:"/categories/easter",children:"Пасха"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/christmas",children:"Різдво"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/valentine",children:"День Валентина"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/miscellaneous",children:"Різне"})}),e.jsx(s,{children:e.jsx(r,{to:"/categories/book",children:"Книга"})})]})})});export{x as B,h as C};
