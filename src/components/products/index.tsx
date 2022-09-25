import React from "react";

import "./products.scss";

const Products: React.FC = () => {
  return (
    <section>
      <h2>Products</h2>
      <ul className="products">
        <li className="product">
          <img src="https://dummyimage.com/300x300/cccccc/999999.jpg" alt="" />
          <h3 className="product-title">
            <a href="./#">Item Title</a>
          </h3>
          <p>Item Category</p>
          <p>$88.00</p>
        </li>
        <li className="product">
          <img src="https://dummyimage.com/300x300/cccccc/999999.jpg" alt="" />
          <h3 className="product-title">
            <a href="./#">Item Title</a>
          </h3>
          <p>Item Category</p>
          <p>$88.00</p>
        </li>
        <li className="product">
          <img src="https://dummyimage.com/300x300/cccccc/999999.jpg" alt="" />
          <h3 className="product-title">
            <a href="./#">Item Title</a>
          </h3>
          <p>Item Category</p>
          <p>$88.00</p>
        </li>
        <li className="product">
          <img src="https://dummyimage.com/300x300/cccccc/999999.jpg" alt="" />
          <h3 className="product-title">
            <a href="./#">Item Title</a>
          </h3>
          <p>Item Category</p>
          <p>$88.00</p>
        </li>
      </ul>
    </section>
  );
};

export default Products;
