import styled from "styled-components";

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 728px;
  }
`;
