import React from "react";

export const Card = ({ product }) => {
  const { name, description, price, url } = product;
  return (
    <>
      <h2>{name}</h2>
      <img
        alt={name}
        src={`http://localhost:3000${url}`}
        width="350"
        height="250"
      />
      <div>Ціна: {price} UAH</div>
      <div>{description}</div>
    </>
  );
};
