import React from "react";

import Headline from "./";

export default {
  title: "Molecules/Headline",
  component: Headline,
};

const Template = (args) => <Headline {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Headline title",
  description: `
    Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
    justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam vitae tortor.`,
  image: "https://dummyimage.com/1024x300/cccccc/999999.jpg",
};
