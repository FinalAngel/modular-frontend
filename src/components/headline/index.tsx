import React from "react";

import { Section } from "components/typography";

import "./headline.scss";

export interface Props {
  image?: string;
  children?: React.ReactNode;
}

const Headline = ({
  image = "https://dummyimage.com/1024x300/cccccc/999999.jpg",
  children,
}: Props) => {
  return (
    <Section className="headline">
      <img src={image} className="headline__image" alt="" />
      {children}
    </Section>
  );
};

export default Headline;
