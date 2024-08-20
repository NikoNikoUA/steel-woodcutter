import styled from "styled-components";

export const HelloText = styled.p`
  font-size: 18px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  /* padding: 40px 0; */
`;

export const LogOutButton = styled.button`
  padding: 12px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: transparent;
  font-weight: 600;
  color: black;

  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;
