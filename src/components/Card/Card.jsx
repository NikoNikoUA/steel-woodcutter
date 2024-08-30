import React from "react";

import { CardContainer, Img, TextInfo, HeartContainer } from "./Card.styled";
import { HeartIcon } from "../HeartIcon/HeartIcon";

export const Card = ({ product, openModal, onFavRemove }) => {
  const BASE_URL = "http://localhost:3000";

  const { name, price, url, id } = product;

  return (
    <>
      <CardContainer aria-hidden="false">
        <Img alt={name} src={`${BASE_URL}${url}`} />
        <HeartContainer>
          <HeartIcon product={product} id={id} onFavRemove={onFavRemove} />
        </HeartContainer>
        <TextInfo>
          <h2>{name}</h2>
          <h3>Ціна: {price} ГРН</h3>

          <button type="button" onClick={openModal}>
            Читати більше
          </button>
          <button>Замовити</button>
        </TextInfo>
      </CardContainer>
    </>
  );
};
