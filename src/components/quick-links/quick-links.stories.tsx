import QuickLinks, { Props } from "./";

export default {
  title: "Molecules/Quick Links",
  component: QuickLinks,
};

export const Standard = (args: Props) => <QuickLinks {...args} />;
Standard.args = {
  items: ["Home", "Events", "Support", "Contact"],
};
