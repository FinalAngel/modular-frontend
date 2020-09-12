import React from "react";

import QuickLinks from "./";

export default {
  title: "Components/Quick Links",
  component: QuickLinks,
};

const Template = (args) => <QuickLinks {...args} />;

export const Example = Template.bind({});
Example.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  className: "",
};
