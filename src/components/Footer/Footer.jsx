// import confetti from "canvas-confetti";
import { Container, Section } from "../../../CommonStyles.styled";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export const Footer = () => {
  const isSmallScreen = window.innerWidth <= 767;

  // const onBtnClick = () => {
  //   function randomInRange(min, max) {
  //     return Math.random() * (max - min) + min;
  //   }

  //   confetti({
  //     angle: randomInRange(55, 125),
  //     spread: randomInRange(50, 70),
  //     particleCount: randomInRange(50, 100),
  //     origin: { y: 0.6 },
  //   });
  // };

  return (
    <footer>
      <Section
        style={{
          backgroundColor: !isSmallScreen ? "white" : "rgb(244, 244, 253)",
        }}
      >
        <Container>
          <ul>
            <li>
              <AwesomeButton
                type="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/NikoNikoUA"
              >
                GitHub
              </AwesomeButton>
            </li>
            <li>
              <AwesomeButton
                type="linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://linkedin.com/in/mykola-kosinskyi"
              >
                LinkedIn
              </AwesomeButton>
            </li>
            <li>
              <AwesomeButton
                type="instagram"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/stalevy_lisorub"
              >
                Instagram
              </AwesomeButton>
            </li>
            <li>
              <AwesomeButton
                type="facebook"
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/kolya.kosinski"
              >
                Facebook
              </AwesomeButton>
            </li>
          </ul>
        </Container>
      </Section>
    </footer>
  );
};
