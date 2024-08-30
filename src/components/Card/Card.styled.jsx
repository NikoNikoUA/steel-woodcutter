import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 5px;

  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`;

export const Img = styled.img`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`;

export const TextInfo = styled.div`
  padding: 10px;
`;

export const HeartContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
  @media screen and (min-width: 1440px) {
    top: 5px;
    right: 5px;
  }
`;
