import React from "react";

import { Products, ProductsItem } from "./";

export default {
  title: "Organisms/Products",
  component: Products,
};

const Template = (args) => (
  <Products>
    {[...Array(args.items)].map(() => (
      <ProductsItem />
    ))}
  </Products>
);

export const Items = Template.bind({});
Items.args = {
  items: 5,
  className: "",
};
