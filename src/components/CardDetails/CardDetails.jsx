import { TextDecor } from "../Card/Card.styled";
import { HeartIcon } from "../HeartIcon/HeartIcon";
import {
  Img,
  CardDetailContainer,
  Highlight,
  CloseBtn,
  StyledCloseIcon,
  CardDetailsInfoContainer,
  HeartContainerReadMore,
  GoodNameCardDetail,
  TextDecorCardDetails,
  CardButtonDetails,
} from "./CardDetails.styled";

export const CardDetails = ({ product, closeModal, id, onFavRemove }) => {
  const { name, category, url, material, dimensions, description, price } =
    product;
  // const BASE_URL = "https://backend-steel-woodcutter.onrender.com";
  const BASE_URL = "http://localhost:3000";

  return (
    <CardDetailContainer>
      <HeartContainerReadMore>
        <HeartIcon product={product} id={id} onFavRemove={onFavRemove} />
      </HeartContainerReadMore>
      <CloseBtn type="button" onClick={closeModal}>
        <StyledCloseIcon />
      </CloseBtn>

      <div>
        <Img alt={name} src={`${BASE_URL}${url}`} />
      </div>
      <CardDetailsInfoContainer>
        <GoodNameCardDetail>{name}</GoodNameCardDetail>
        <TextDecorCardDetails>{price}.00 &#8372;</TextDecorCardDetails>
        <TextDecor>
          <Highlight>Категорія:</Highlight> {category}
        </TextDecor>
        {/* <p>
        {category.map((cat, index) => (
          <span key={index}>
            {cat}
            {index < category.length - 1 ? "," : ""}
          </span>
        ))}
      </p> */}
        <TextDecor>
          <Highlight>Матеріал:</Highlight> {material}
        </TextDecor>
        <ul>
          {Array.isArray(dimensions) ? (
            dimensions.map((dimension, index) => (
              <li key={index}>{dimension}</li>
            ))
          ) : (
            <li>No dimensions available</li>
          )}
        </ul>
        <TextDecor>{description}</TextDecor>
        <CardButtonDetails>Замовити</CardButtonDetails>
      </CardDetailsInfoContainer>
    </CardDetailContainer>
  );
};
