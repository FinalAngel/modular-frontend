import React from "react";

import App from "./";

export default {
  title: "App/Preview",
  component: App,
};

const Tpl = () => <App />;

export const Template = Tpl.bind({});
