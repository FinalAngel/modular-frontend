import React from "react";

import Products from "./";
import ProductItem from "./product-item";

export default {
  title: "Organisms/Products",
  component: Products,
};

const Template = (args) => (
  <Products>
    {[...Array(args.items)].map(() => (
      <ProductItem />
    ))}
  </Products>
);

export const Items = Template.bind({});
Items.args = {
  items: 5,
  className: "",
};
