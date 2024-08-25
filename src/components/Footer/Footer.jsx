import { Container, Section } from "../../../CommonStyles.styled";
import { LinksList, Text, InfoContainer, TelButton } from "./Footer.styled";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export const Footer = () => {
  const isSmallScreen = window.innerWidth <= 767;

  return (
    <footer>
      <Section
        style={{
          backgroundColor: !isSmallScreen ? "white" : "rgb(244, 244, 253)",
        }}
      >
        <Container>
          <InfoContainer>
            <div>
              <Text>Follow</Text>
              <LinksList>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/NikoNikoUA"
                  >
                    <FaGithubSquare />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://linkedin.com/in/mykola-kosinskyi"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/stalevy_lisorub"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/kolya.kosinski"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
              </LinksList>
            </div>
            <div>
              <Text>Telephone</Text>
              <TelButton
                type="button"
                onClick={() => (window.location.href = "tel:+380687586133")}
              >
                +(380)687-58-61-33
              </TelButton>
            </div>
          </InfoContainer>
        </Container>
      </Section>
    </footer>
  );
};
