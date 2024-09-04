import { Container, ListStyling, Section } from "../../../CommonStyles.styled";
import { CategoryItem, StyledLink } from "./CategoriesList.styled";

export const CategoriesList = () => {
  return (
    <Section>
      <Container>
        <ListStyling style={{ alignItems: "center" }}>
          <CategoryItem>
            <StyledLink to="/categories/easter">Пасха</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/categories/christmas">Різдво</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/categories/valentine">День Валентина</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/categories/miscellaneous">Різне</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/categories/book">Книга</StyledLink>
          </CategoryItem>
        </ListStyling>
      </Container>
    </Section>
  );
};
