import styled from "styled-components";

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.mainColor};

  font-size: 20px;

  transition: all 250ms ease-in-out;

  @media screen and (min-width: 1440px) {
    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.colors.darkColor};
    }
  }
`;
