import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ContWidth = styled.div`
  /* @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1000px;
  } */
`;

export const Img = styled.img`
  border-radius: 20px;
  opacity: 0;

  &.animate {
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

export const ImgVal = styled.img`
  border-radius: 20px;
  opacity: 0;

  &.animate {
    animation: ${slideInFromRight} 1s ease-out forwards;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }
`;

export const CardDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  &:nth-child(-n + 2) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;

export const Names = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const PersonDescr = styled.p`
  max-width: 280px;
  text-align: start;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: center;
  }
`;

export const DescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;

  &.animate {
    transform: translateX(0);
    animation: ${slideInFromRight} 1s ease-out forwards;
  }

  @media screen and (min-width: 320px) {
    max-width: 280px;
    text-align: start;
  }

  @media screen and (min-width: 768px) {
    max-width: 1000px;
    text-align: center;
  }
`;

export const DescrContainerOne = styled(DescrContainer)`
  transform: none;
  &.animate {
    transform: translateX(0);
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }

  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const DescrContainerVal = styled(DescrContainer)`
  transform: none;

  &.animate {
    transform: translateX(0);
    animation: ${slideInFromLeft} 1s ease-out forwards;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
