import styled, { css } from "styled-components";

export const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 600px;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 200ms ease-in-out;
`;

export const SliderButton = styled.button`
  all: unset;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 37px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
  }

  svg {
    fill: black;
    width: 30px;
    height: 30px;
  }

  &:hover svg {
    animation: bounce 200ms ease-in-out;
  }

  @keyframes bounce {
    50% {
      scale: 1.4 0.6;
    }
  }
`;

export const PicWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  translate: -50%;
  display: flex;
  gap: 7px;
`;

export const NavigationButton = styled.button`
  all: unset;
  height: 20px;
  width: 20px;
  background: black;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 300ms ease-in-out;

  &:focus,
  &:hover {
    transform: scale(1.2);
  }

  ${(props) =>
    props.$active &&
    css`
      transform: scale(1.2);
    `}
`;
