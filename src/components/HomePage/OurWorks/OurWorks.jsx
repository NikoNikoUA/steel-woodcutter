import { Container, Section } from "../../../../CommonStyles.styled";
import { Slider } from "../Slider/Slider";

export const OurWorks = () => {
  return (
      <Section className="our-works">
        <Container>
          <h2 style={{ marginBottom: "20px" }}>Наші Вироби</h2>
          <Slider />
        </Container>
      </Section>
  );
};
