import React from "react";
import { Container, Section } from "../../../CommonStyles.styled";

export const Card = ({ product, openModal }) => {
  const BASE_URL = "http://localhost:3000";

  const { name, price, url } = product;

  return (
    <>
      <Container>
        <h2>{name}</h2>
        <img alt={name} src={`${BASE_URL}${url}`} width="350" height="250" />
        <h3>Ціна: {price} UAH</h3>
      </Container>
      <button type="button" onClick={openModal}>
        Learn more
      </button>
    </>
  );
};
