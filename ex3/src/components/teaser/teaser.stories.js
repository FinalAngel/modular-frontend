import React from "react";

import Teaser from "./";

export default {
  title: "Components/Teaser",
  component: Teaser,
};

const Template = (args) => <Teaser {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Teaser Title",
  children: "Teaser Content",
  className: "",
};
