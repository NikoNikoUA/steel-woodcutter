import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    width: 280px;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
      width: 331px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 100px;
    background-color: white;

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  p {
    font-size: 24px;
    padding: 15px;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;
