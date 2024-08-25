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
