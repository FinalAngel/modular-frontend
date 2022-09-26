import React from "react";

import QuickLinks, { Props } from "./";

export default {
  title: "Molecules/Quick Links",
  component: QuickLinks,
};

const quickLinksFixture = ["Home", "Events", "Support", "Contact"];

export const Standard = (args: Props) => <QuickLinks {...args} />;
Standard.args = {
  items: quickLinksFixture,
};
