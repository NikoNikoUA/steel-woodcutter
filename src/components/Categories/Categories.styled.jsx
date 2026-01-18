import styled from "styled-components";

export const CategoriesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(220px, auto);
  grid-template-areas:
  "easter"
  "christmas"
  "miscellaneous"
  "valentine"
  "book";
  gap: 20px;

  @media screen and (min-width: 768px) {
    height: max(90vh, 800px);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
    "easter christmas christmas miscellaneous"
    "easter valentine book book";
  }
`;

export const CategoryHeading = styled.p`
  position: absolute;
  font-size: 20px;
  font-style: italic;
  text-overflow: ellipsis;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 16px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  transition: all 250ms ease;

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  } 
`;

export const CategoryItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 250ms ease;

  @media screen and (min-width: 1440px) {
    &:hover {
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
     
      & ${CategoryHeading} {
        bottom: -25%;
      }
    }
  }
  
  &:nth-child(1) {
    grid-area: easter;
  }

    &:nth-child(2) {
    grid-area: christmas;
  }

    &:nth-child(3) {
    grid-area: valentine;
  }

  &:nth-child(4) {
    grid-area: miscellaneous;
  }

  &:nth-child(5) {
    grid-area: book;
  }
`;

export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-out;

  @media screen and (min-width: 1440px) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;
