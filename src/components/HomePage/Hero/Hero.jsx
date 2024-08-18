import {
  HeroSection,
  TextContainer,
  MainHeader,
  HeroText,
} from ".//Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <TextContainer>
        <MainHeader>Сталевий Лісоруб</MainHeader>
        <HeroText>Створюємо затишну атмосферу з вами і для вас</HeroText>
      </TextContainer>
    </HeroSection>
  );
};
