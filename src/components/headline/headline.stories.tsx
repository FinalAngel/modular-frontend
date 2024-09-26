import Headline, { Props } from "./";

export default {
  title: "Molecules/Headline",
  component: Headline,
};

export const Standard = (args: Props) => (
  <Headline {...args}>
    <p>Some dummy content inside the headline.</p>
  </Headline>
);
Standard.args = {
  title: "Some headline title",
};
