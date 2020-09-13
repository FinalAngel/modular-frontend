import React from "react";

import "./products.css";

const Products = ({ children }) => (
  <section>
    <h2>Products</h2>
    <ul className="products">{children}</ul>
  </section>
);

export default Products;
