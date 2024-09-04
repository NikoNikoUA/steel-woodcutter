import React from "react";

import {
  CardContainer,
  Img,
  TextInfo,
  HeartContainer,
  ItemInfoCardDiv,
  ButtonsCardDiv,
  CardButton,
} from "./Card.styled";
import { HeartIcon } from "../HeartIcon/HeartIcon";

export const Card = ({ product, openModal, onFavRemove }) => {
  const BASE_URL = "http://localhost:3000";

  const { name, price, url, id, quantity } = product;

  return (
    <>
      <CardContainer aria-hidden="false">
        <Img alt={name} src={`${BASE_URL}${url}`} />
        <HeartContainer>
          <HeartIcon product={product} id={id} onFavRemove={onFavRemove} />
        </HeartContainer>
        <TextInfo>
          <ItemInfoCardDiv>
            <h2>{name}</h2>
            <p>Ціна: {price} UAH</p>
            <p>В наявності: {quantity}</p>
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
