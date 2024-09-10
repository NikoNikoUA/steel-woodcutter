import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 250ms ease-in-out;
  height: 100%;

  @media screen and (min-width: 320px) {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
  }
  @media screen and (min-width: 1440px) {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 380px;
    box-shadow: none;

    &:hover {
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Img = styled.img`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 380px;
  }
`;

export const TextInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  height: 230px;

  @media screen and (min-width: 768px) {
    height: 210px;
  }

  @media screen and (min-width: 1440px) {
    height: 230px;
  }
`;

export const HeartContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
  @media screen and (min-width: 1440px) {
    top: 5px;
    right: 5px;
  }
`;

export const ItemInfoCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ButtonsCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButton = styled.button`
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
    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.colors.darkColor};
    }
  }
`;

export const TextDecor = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
`;

export const GoodName = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
`;
