import React from "react";

import "./product-item.scss";

const ProductItem = () => (
  <li className="product-item">
    <img src="https://dummyimage.com/300x300/cccccc/999999.jpg" alt="" />
    <h3 className="product-item-title">
      <a href="#">Item Title</a>
    </h3>
    <p>Item Category</p>
    <p>$88.00</p>
  </li>
);

export default ProductItem;
