import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 128px;
    max-width: 1440px;
  }
`;

export const Section = styled.section`
  padding: 30px 0;
`;
