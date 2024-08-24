import { Container, Section } from "../../../../CommonStyles.styled";
import { Slider } from "../Slider/Slider";

export const OurWorks = () => {
  const isSmallScreen = window.innerWidth <= 767;
  return (
    !isSmallScreen && (
      <Section>
        <Container>
          <h2 style={{ marginBottom: "20px" }}>Наші Вироби</h2>
          <Slider />
        </Container>
      </Section>
    )
  );
};
