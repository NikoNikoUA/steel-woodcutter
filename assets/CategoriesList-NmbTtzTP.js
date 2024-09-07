import{d as s,N as i,j as e,S as n,C as a,a as c}from"./index-ByD4tm6R.js";const o=s(i)`
  color: ${t=>t.theme.colors.mainColor};
  transition: color 250ms ease-in-out;

  &.active {
    color: white;
    font-weight: 500;
  }
`,r=s.li`
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

      ${o} {
        color: black;
      }
    }
  }
`,d=()=>e.jsx(n,{children:e.jsx(a,{children:e.jsxs(c,{style:{alignItems:"center"},children:[e.jsx(r,{children:e.jsx(o,{to:"/categories/easter",children:"Пасха"})}),e.jsx(r,{children:e.jsx(o,{to:"/categories/christmas",children:"Різдво"})}),e.jsx(r,{children:e.jsx(o,{to:"/categories/valentine",children:"День Валентина"})}),e.jsx(r,{children:e.jsx(o,{to:"/categories/miscellaneous",children:"Різне"})}),e.jsx(r,{children:e.jsx(o,{to:"/categories/book",children:"Книга"})})]})})});export{d as C};
