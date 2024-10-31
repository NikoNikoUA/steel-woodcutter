import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const StyledCloseIcon = styled(IoClose)`
  height: 30px;
  width: 30px;
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
`;

export const Highlight = styled.span`
  font-weight: 500;
  color: black;
`;

export const CardDetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    /* flex-direction: row; */
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  position: absolute;
  right: 5px;
  top: 5px;

  transition: all 250ms ease;

  @media screen and (min-width: 768px) {
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
  gap: 20px;
`;

export const HeartContainerReadMore = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
  @media screen and (min-width: 1440px) {
    top: 5px;
    right: 5px;
  }
`;

export const GoodNameCardDetail = styled.h3`
  font-size: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TextDecorCardDetails = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const CardButtonDetails = styled.button`
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.mainColor};
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 14px 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.colors.darkColor};
    }
  }
`;
