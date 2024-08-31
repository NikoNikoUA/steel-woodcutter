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
            justifyContent: "flex-start",
            marginTop: "30px",
          }}
        >
          <p style={{ fontSize: "30px" }}>
            Сторінку не знайдено. Будь ласка, поверніться на
            <Link
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              to="/"
            >
              {" "}
              Домашню сторінку
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
