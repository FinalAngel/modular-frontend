import React from "react";

import "./products.scss";

const Products: React.FC = () => {
  return (
    <section className="section">
      <h2 className="title title--h2">Products</h2>
      <ul className="products">
        <li className="products__item">
          <img
            src="https://dummyimage.com/300x300/cccccc/999999.jpg"
            alt=""
            className="products__image"
          />
          <h3 className="products__title">
            <a href="./#" className="products__anchor">
              Item Title
            </a>
          </h3>
          <p className="products__category">Item Category</p>
          <p className="products__price">$88.00</p>
        </li>
        <li className="products__item">
          <img
            src="https://dummyimage.com/300x300/cccccc/999999.jpg"
            alt=""
            className="products__image"
          />
          <h3 className="products__title">
            <a href="./#" className="products__anchor">
              Item Title
            </a>
          </h3>
          <p className="products__category">Item Category</p>
          <p className="products__price">$88.00</p>
        </li>
        <li className="products__item">
          <img
            src="https://dummyimage.com/300x300/cccccc/999999.jpg"
            alt=""
            className="products__image"
          />
          <h3 className="products__title">
            <a href="./#" className="products__anchor">
              Item Title
            </a>
          </h3>
          <p className="products__category">Item Category</p>
          <p className="products__price">$88.00</p>
        </li>
        <li className="products__item">
          <img
            src="https://dummyimage.com/300x300/cccccc/999999.jpg"
            alt=""
            className="products__image"
          />
          <h3 className="products__title">
            <a href="./#" className="products__anchor">
              Item Title
            </a>
          </h3>
          <p className="products__category">Item Category</p>
          <p className="products__price">$88.00</p>
        </li>
      </ul>
    </section>
  );
};

export default Products;
