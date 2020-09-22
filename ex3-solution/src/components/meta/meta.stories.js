import React from "react";

import Meta from "./";

export default {
  title: "Organisms/Meta",
  component: Meta,
};

const Template = (args) => <Meta {...args} />;

export const Example = Template.bind({});
Example.args = {
  cart: true,
  account: true,
  search: true,
};
