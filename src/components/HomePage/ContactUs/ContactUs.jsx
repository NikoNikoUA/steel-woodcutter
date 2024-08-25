import { Container, Section } from "../../../../CommonStyles.styled";
import {
  ContactsContainer,
  ContactList,
  AdditionalHeading,
  TelButton,
  SocialLink,
} from "./ContactUs.styled";

export const ContactUs = () => {
  const isSmallScreen = window.innerWidth <= 767;
  return (
    <Section
      style={{
        backgroundColor: !isSmallScreen ? "rgb(244, 244, 253)" : "white",
      }}
    >
      <Container>
        <ContactsContainer>
          <h2>Зворотній зв'язок</h2>
          <ContactList>
            <li>
              <AdditionalHeading>Наш телефон:</AdditionalHeading>
              <TelButton
                type="button"
                onClick={() => (window.location.href = "tel:+380687586133")}
              >
                Tel: +(380)687-58-61-33
              </TelButton>
            </li>
            <li>
              <AdditionalHeading>Ми в соцмережах:</AdditionalHeading>
              <SocialLink>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/kolya.kosinski"
                >
                  Facebook
                </a>
              </SocialLink>
            </li>
            <li>
              <SocialLink>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/stalevy_lisorub"
                >
                  Instagram
                </a>
              </SocialLink>
            </li>
          </ContactList>
        </ContactsContainer>
      </Container>
    </Section>
  );
};
