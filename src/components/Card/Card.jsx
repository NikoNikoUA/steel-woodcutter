import React from "react";

export const Card = ({ product, openModal }) => {
  const { name, price, url } = product;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <img
          alt={name}
          src={`http://localhost:3000${url}`}
          width="350"
          height="250"
        />
        <h3>Ціна: {price} UAH</h3>
      </div>
      <button type="button" onClick={openModal}>
        Learn more
      </button>
    </>
  );
};
