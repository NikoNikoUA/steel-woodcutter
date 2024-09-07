import {
  Img,
  CardDetailContainer,
  Highlight,
  CloseBtn,
  StyledCloseIcon,
  CardDetailsInfoContainer,
} from "./CardDetails.styled";

export const CardDetails = ({ product, closeModal }) => {
  const { name, category, url, material, dimensions, description } = product;
  const BASE_URL = "https://backend-steel-woodcutter.onrender.com";

  return (
    <CardDetailContainer>
      <CloseBtn type="button" onClick={closeModal}>
        <StyledCloseIcon />
      </CloseBtn>
      <div>
        <Img alt={name} src={`${BASE_URL}${url}`} />
      </div>
      <CardDetailsInfoContainer>
        <h2>{name}</h2>
        <p>
          <Highlight>Категорія:</Highlight> {category}
        </p>
        {/* <p>
        {category.map((cat, index) => (
          <span key={index}>
            {cat}
            {index < category.length - 1 ? "," : ""}
          </span>
        ))}
      </p> */}
        <p>
          <Highlight>Матеріал:</Highlight> {material}
        </p>
        <ul>
          {Array.isArray(dimensions) ? (
            dimensions.map((dimension, index) => (
              <li key={index}>{dimension}</li>
            ))
          ) : (
            <li>No dimensions available</li>
          )}
        </ul>
        <p>{description}</p>
      </CardDetailsInfoContainer>
    </CardDetailContainer>
  );
};
