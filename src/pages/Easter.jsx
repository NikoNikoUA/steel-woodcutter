import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { Container, Section } from "../../CommonStyles.styled";
import { EasterComponent } from "../components/EasterComponent/EasterComponent";

export const Easter = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/categories");

  return (
    <Section>
      <Container>
        <BackLink to={backLinkHref.current} />
        <EasterComponent />
      </Container>
    </Section>
  );
};

export default Easter;
