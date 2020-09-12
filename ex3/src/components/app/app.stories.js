import React from "react";

import App from "./";

export default {
  title: "App",
  component: App,
};

const Template = (args) => <App {...args} />;

export const Preview = Template.bind({});
