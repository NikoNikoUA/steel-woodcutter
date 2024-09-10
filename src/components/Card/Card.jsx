import React from "react";

import {
  CardContainer,
  Img,
  TextInfo,
  HeartContainer,
  ItemInfoCardDiv,
  ButtonsCardDiv,
  CardButton,
  TextDecor,
  GoodName,
} from "./Card.styled";
import { HeartIcon } from "../HeartIcon/HeartIcon";

export const Card = ({ product, openModal, onFavRemove }) => {
  const BASE_URL = "https://backend-steel-woodcutter.onrender.com";
  // const BASE_URL = "http://localhost:3000";

  const { name, price, url, id, quantity } = product;

  // const imageUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;

  return (
    <>
      <CardContainer aria-hidden="false">
        <Img alt={name} src={`${BASE_URL}${url}`} />
        <HeartContainer>
          <HeartIcon product={product} id={id} onFavRemove={onFavRemove} />
        </HeartContainer>
        <TextInfo>
          <ItemInfoCardDiv>
            <GoodName>{name}</GoodName>
            <TextDecor>{price}.00 &#8372;</TextDecor>
            <TextDecor>Доступно: {quantity}</TextDecor>
          </ItemInfoCardDiv>
          <ButtonsCardDiv>
            <CardButton type="button" onClick={openModal}>
              Читати більше
            </CardButton>
            <CardButton>Замовити</CardButton>
          </ButtonsCardDiv>
        </TextInfo>
      </CardContainer>
    </>
  );
};
