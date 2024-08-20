import styled from "styled-components";
import backgroundImageMob from "../../../../public/hero/background-mobile.jpg";
import backgroundImageTab from "../../../../public/hero/background-tablet.jpg";
import backgroundImageDesc from "../../../../public/hero/background-desctop.jpg";

export const HeroSection = styled.section`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.4),
    rgba(17, 17, 17, 0)
  );

  @media screen and (max-width: 767px) {
    height: 600px;
    width: 320px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${backgroundImageMob});
  }

  @media screen and (min-width: 768px) {
    height: 600px;
    width: 768px;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${backgroundImageTab});
  }

  @media screen and (min-width: 1440px) {
    height: 600px;
    width: 100%;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.4),
        rgba(17, 17, 17, 0)
      ),
      url(${backgroundImageDesc});
  }
`;

export const HeroContainer = styled.div`
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  height: 150px;
  width: 350px;
  padding: 20px;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    top: 100px;
    right: 30px;
  }

  @media screen and (min-width: 1440px) {
    top: 100px;
    right: 150px;
  }
`;

export const MainHeader = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
`;

export const HeroText = styled.p`
  font-size: 20px;
`;
