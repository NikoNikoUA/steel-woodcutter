import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SvgLogin = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.colors.mainColor};
`;

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LoginButtton = styled.button`
  padding: 40px 0;
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  color: black;
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;

export const RegButton = styled.button`
  padding: 40px 0;
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  color: black;
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;
