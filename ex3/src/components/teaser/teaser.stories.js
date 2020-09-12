import React from "react";

import Teaser from "./";

export default {
  title: "Components/Teaser",
  component: Teaser,
};

const Template = (args) => <Teaser {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Teaser Title",
  children: "Teaser Content",
  className: "",
};
