import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 40px 0;
`;

export const HelloText = styled.p`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
`;

export const LogOutButton = styled.button`
  all: unset;
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  color: red;
  cursor: pointer;

  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;