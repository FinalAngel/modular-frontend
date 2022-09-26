import React from "react";

import { Title } from "components/typography";

import "./product.scss";

export interface Props {
  id: string;
  image: string;
  title: string;
  category: "Item Category";
  price: string;
}

const Product: React.FC<Props> = ({ image, title, category, price }) => {
  return (
    <li className="product__item">
      <img src={image} alt="" className="product__image" />
      <Title type="h3" className="product__title">
        <a href="./#" className="product__anchor">
          {title}
        </a>
      </Title>
      <p className="product__category">{category}</p>
      <p className="product__price">${price}</p>
    </li>
  );
};

export default Product;