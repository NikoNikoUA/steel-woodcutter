import { Link, Outlet } from "react-router-dom";
import { Container, Section } from "../../../CommonStyles.styled";
import { CategoriesContainer } from "./Categories.styled";
import easter from "../../../public/categories-images/Пасха.jpg";
import christmas from "../../../public/categories-images/Різдво.jpg";
import valentine from "../../../public/categories-images/Валентина.jpg";
import miscellaneous from "../../../public/categories-images/Різне.jpg";
import book from "../../../public/categories-images/Книга.jpg";

export const Category = () => {
  return (
    <Section>
      <Container>
        <CategoriesContainer>
          <li>
            <Link to="/categories/easter">
              <img
                alt="image of wooden rabbits"
                src={easter}
                width="280"
                height="320"
                style={{ opacity: "0.5" }}
              />
              <p>Пасха</p>
            </Link>
          </li>
          <li>
            <Link to="/categories/christmas">
              <img
                alt="image of a metal angel"
                src={christmas}
                width="280"
                height="320"
                style={{ opacity: "0.5" }}
              />
              <p>Різдво</p>
            </Link>
          </li>
          <li>
            <Link to="/categories/valentine">
              <img
                alt="image of a wooden model of hyppos"
                src={valentine}
                width="280"
                height="320"
                style={{ opacity: "0.5" }}
              />
              <p>День Валентина</p>
            </Link>
          </li>
          <li>
            <Link to="/categories/miscellaneous">
              <img
                alt="image of a wooden model of hyppos"
                src={miscellaneous}
                width="280"
                height="320"
                style={{ opacity: "0.5" }}
              />
              <p>Різне</p>
            </Link>
          </li>
          <li>
            <Link to="/categories/book">
              <img
                alt="image of a wooden model of hyppos"
                src={book}
                width="280"
                height="320"
                style={{ opacity: "0.5" }}
              />
              <p>Книга</p>
            </Link>
          </li>
        </CategoriesContainer>
        <Outlet />
      </Container>
    </Section>
  );
};
