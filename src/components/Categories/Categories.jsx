import { Link, Outlet } from "react-router-dom";
import { Container, Section } from "../../../CommonStyles.styled";
import {
  CategoriesContainer,
  CategoryImg,
  CategoryHeading,
  CategoryItem,
  // CategoryImgBook,
} from "./Categories.styled";
import easter from "../../../public/categories-images/easter.jpg";
import christmas from "../../../public/categories-images/christmas.jpg";
import valentine from "../../../public/categories-images/valentine.jpg";
import miscellaneous from "../../../public/categories-images/miscellaneous.jpg";
import book from "../../../public/categories-images/book.jpg";

export const Category = () => {
  return (
    <Section>
      <Container>
        <CategoriesContainer>
          <CategoryItem>
            <Link to="/categories/easter">
              <CategoryImg
                alt="image of wooden rabbits"
                src={easter}
                loading="lazy"
                class="easter"
              />
              <CategoryHeading>Пасха</CategoryHeading>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/categories/christmas">
              <CategoryImg
                alt="image of a metal angel"
                src={christmas}
                loading="lazy"
                class="christmas"
              />
              <CategoryHeading>Різдво</CategoryHeading>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/categories/valentine">
              <CategoryImg
                alt="image of a wooden model of hyppos"
                src={valentine}
                loading="lazy"
                class="valentine"
              />
              <CategoryHeading>День Валентина</CategoryHeading>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/categories/miscellaneous">
              <CategoryImg
                alt="image of a wooden model of hyppos"
                src={miscellaneous}
                loading="lazy"
                class="miscellaneous"
              />
              <CategoryHeading>Різне</CategoryHeading>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/categories/book">
              <CategoryImg
                alt="image of a wooden model of hyppos"
                src={book}
                loading="lazy"
                class="book"
              />
              <CategoryHeading>Книга</CategoryHeading>
            </Link>
          </CategoryItem>
        </CategoriesContainer>
        <Outlet />
      </Container>
    </Section>
  );
};
