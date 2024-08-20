import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PagesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-right: auto;
`;

export const PagesLink = styled(NavLink)`
  color: black;
  font-weight: 500;
  transition: all 200ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;

export const ListItem = styled.li`
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.25;
  padding: 40px 0;
  transition: font-weight 100ms ease-in-out;

  & .active {
    color: ${(props) => props.theme.colors.mainColor};
  }

  & .active::after {
    position: relative;
    font-weight: bold;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: 2px;
    bottom: 30px;
    left: 0;
  }
`;
