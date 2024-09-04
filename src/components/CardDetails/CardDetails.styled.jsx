import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const StyledCloseIcon = styled(IoClose)`
  height: 20px;
  width: 20px;
  transition: all 250ms ease;
  fill: ${(props) => props.theme.colors.mainColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 320px;
  }
`;

export const Highlight = styled.span`
  font-weight: 500;
`;

export const CardDetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 5px;
  top: 5px;

  transition: all 250ms ease;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;

    right: 10px;
    top: 10px;

    &:hover {
      background-color: ${(props) => props.theme.colors.mainColor};

      & > ${StyledCloseIcon} {
        fill: white;
      }
    }
  }
`;

export const CardDetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;
