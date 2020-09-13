import React from "react";

import Navigation, { navigationItems } from "./";

export default {
  title: "Organisms/Navigation",
  component: Navigation,
};

const Template = () => <Navigation items={navigationItems} />;

export const Example = Template.bind({});
Example.args = {
  items: ["Home", "Event", "Accessoires", "Apparel", "Feautred Items"],
};
