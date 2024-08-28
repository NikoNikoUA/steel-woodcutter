import{d as i,j as e,S as n,C as r,L as t,O as l}from"./index-CHVIeCee.js";const c=i.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`,s=i.p`
  position: absolute;
  font-size: 28px;
  font-style: italic;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  bottom: 0;
  left: 50%;
  box-sizing: border-box;
  transform: translateX(-50%);
  text-align: center;
  padding: 16px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  transition: all 250ms ease;
`,o=i.li`
  position: relative;
  overflow: hidden;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 250ms ease;

  &:hover {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
    transform: scale(1.03);

    & ${s} {
      bottom: -25%;
    }
  }
`,a=i.img`
  width: 280px;
  height: 320px;
  opacity: 0.5;
  transition: opacity 0.5s ease-out;

  &:hover {
    opacity: 1;
  }
`,d="/steel-woodcutter/assets/easter-BrlW23IB.jpg",x="/steel-woodcutter/assets/christmas-u02o8i15.jpg",g="/steel-woodcutter/assets/valentine-OiPIBPi6.jpg",p="/steel-woodcutter/assets/miscellaneous-BqggnsFU.jpg",h="/steel-woodcutter/assets/book-BTy4cG-r.jpg",j=()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(c,{children:[e.jsx(o,{children:e.jsxs(t,{to:"/categories/easter",children:[e.jsx(a,{alt:"image of wooden rabbits",src:d,loading:"lazy"}),e.jsx(s,{children:"Пасха"})]})}),e.jsx(o,{children:e.jsxs(t,{to:"/categories/christmas",children:[e.jsx(a,{alt:"image of a metal angel",src:x,loading:"lazy"}),e.jsx(s,{children:"Різдво"})]})}),e.jsx(o,{children:e.jsxs(t,{to:"/categories/valentine",children:[e.jsx(a,{alt:"image of a wooden model of hyppos",src:g,loading:"lazy"}),e.jsx(s,{children:"День Валентина"})]})}),e.jsx(o,{children:e.jsxs(t,{to:"/categories/miscellaneous",children:[e.jsx(a,{alt:"image of a wooden model of hyppos",src:p,loading:"lazy"}),e.jsx(s,{children:"Різне"})]})}),e.jsx(o,{children:e.jsxs(t,{to:"/categories/book",children:[e.jsx(a,{alt:"image of a wooden model of hyppos",src:h,loading:"lazy"}),e.jsx(s,{children:"Книга"})]})})]}),e.jsx(l,{})]})}),f=()=>e.jsx(j,{});export{f as default};
