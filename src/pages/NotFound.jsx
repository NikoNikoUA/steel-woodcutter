import { Link } from "react-router-dom";
import { Container, Section } from "../../CommonStyles.styled";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20vh",
            fontSize: "30px",
          }}
        >
          Сторінку не знайдено. Будь ласка, поверніться на&nbsp;
          <Link
            style={{ textDecoration: "underline", fontWeight: "bold" }}
            to="/"
          >
            {" "}
            Домашню сторінку
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
