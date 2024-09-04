import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const Globalstyle = createGlobalStyle`

body {
  margin: 0 auto;
 
    background-color: white;
    height: 100%;

 ::-webkit-scrollbar {
    width: 8px; 
 
  }

 
::-webkit-scrollbar-track {
    background: transparent; 
    border-radius: 12px; 
  }

 
  ::-webkit-scrollbar-thumb {
    background: rgb(48, 48, 223); 
    border-radius: 12px; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(111, 111, 217); 
  }


}

main {
  flex: 1;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
}

a {
text-decoration: none;
color: black;
}

button {
  cursor: pointer;
}

/* @media (min-width: 320px){
  body {
    min-width: 320px;
  }
  header {
    min-width: 320px;
    
  }
  footer {
    min-width: 320px;
  }
} */


`;
