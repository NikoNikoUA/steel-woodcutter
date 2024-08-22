import { Container, Section } from "../../../../CommonStyles.styled";

export const ContactUs = () => {
  const isSmallScreen = window.innerWidth <= 767;
  return (
    <Section
      style={{
        backgroundColor: !isSmallScreen ? "rgb(244, 244, 253)" : "white",
      }}
    >
      <Container>
        <h2>Зворотній зв'язок</h2>
        <p>Тут будуть лінки на соцмережі та контактний телефон</p>
      </Container>
    </Section>
  );
};
