import styled from "styled-components";

export const CategoriesContainer = styled.ul`
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
`;

export const CategoryHeading = styled.p`
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
  transition: all 250ms ease;
`;

export const CategoryItem = styled.li`
  position: relative;
  overflow: hidden;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 250ms ease;

  @media screen and (min-width: 1440px) {
    &:hover {
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
      transform: scale(1.03);

      & ${CategoryHeading} {
        bottom: -25%;
      }
    }
  }
`;

export const CategoryImg = styled.img`
  width: 280px;
  height: 320px;
  opacity: 0.5;
  transition: opacity 0.5s ease-out;

  @media screen and (min-width: 1440px) {
    &:hover {
      opacity: 1;
    }
  }
`;

// export const CategoryImgBook = styled.img`
//   width: 560px;
//   height: 640px;
//   opacity: 0.5;
//   transition: opacity 0.5s ease-out;

//   @media screen and (min-width: 1440px) {
//     &:hover {
//       opacity: 1;
//     }
//   }
// `;
