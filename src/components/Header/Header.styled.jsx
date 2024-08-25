import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    max-width: 280px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Logo = styled.p`
  @media screen and (min-width: 1440px) {
    margin-right: 100px;
  }
`;

export const PagesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media screen and (min-width: 1440px) {
    margin-right: auto;
  }
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
