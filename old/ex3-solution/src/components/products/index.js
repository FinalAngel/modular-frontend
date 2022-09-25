import React from "react";

import "./products.css";

export const Products = ({ children }) => (
  <section className="wrapper">
    <h2 className="heading heading__h2">Products</h2>
    <ul className="products">{children}</ul>
  </section>
);

export const ProductsItem = () => (
  <li className="products__item">
    <img
      src="https://dummyimage.com/300x300/cccccc/999999.jpg"
      alt=""
      className="products__img"
    />
    <h3 className="products__title">
      <a href="#" className="products__anchor">
        Item Title
      </a>
    </h3>
    <p className="products__category">Item Category</p>
    <p className="products__price">$88.00</p>
  </li>
);
