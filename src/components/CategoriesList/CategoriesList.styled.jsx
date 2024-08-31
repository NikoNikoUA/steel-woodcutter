import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.mainColor};
  transition: color 250ms ease-in-out;

  &.active {
    color: white;
    font-weight: 500;
  }
`;

export const CategoryItem = styled.li`
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;

  padding: 10px 14px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-in-out;

  @media screen and (min-width: 1440px) {
    &:hover {
      background-color: transparent;

      ${StyledLink} {
        color: black;
      }
    }
  }
`;
