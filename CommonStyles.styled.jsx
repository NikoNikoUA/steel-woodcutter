import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 128px;
    max-width: 1440px;
  }
`;

export const Section = styled.section`
  padding: 30px 0;
`;

export const ListStyling = styled.ul`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
