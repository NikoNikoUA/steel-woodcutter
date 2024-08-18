import styled from "styled-components";
import backgroundImageMob from "../../../../public/hero/background-mobile.jpg";
import backgroundImageTab from "../../../../public/hero/background-tablet.jpg";
import backgroundImageDesc from "../../../../public/hero/background-desctop.jpg";

export const HeroSection = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  /* height: 600px; */
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
    width: 1500px;
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
  width: 420px;
  padding: 20px;
  background-color: transparent;
  /* border: 4px solid grey; */

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
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
  font-size: 25px;
`;

export const HeroText = styled.p`
  font-size: 20px;
  /* color: white; */
`;
