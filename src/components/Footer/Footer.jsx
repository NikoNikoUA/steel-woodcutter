import confetti from "canvas-confetti";
import { Container, Section } from "../../../CommonStyles.styled";

export const Footer = () => {
  const isSmallScreen = window.innerWidth <= 767;

  const onBtnClick = () => {
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  };

  return (
    <footer>
      <Section
        style={{
          backgroundColor: !isSmallScreen ? "white" : "rgb(244, 244, 253)",
        }}
      >
        <Container>
          <div>
            <div>
              <p>
                &#169; Created by{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/NikoNikoUA"
                >
                  Mykola Kosynskyi
                </a>
              </p>
              <button type="button" onClick={onBtnClick}>
                Fire
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
