import React from "react";

import { Section } from "components/typography";

import "./headline.scss";

export interface Props {
  image: string;
  children?: React.ReactNode;
}

const Headline: React.FC<Props> = ({ image, children }) => {
  return (
    <Section className="headline">
      <img
        src="https://dummyimage.com/1024x300/cccccc/999999.jpg"
        className="headline__image"
        alt=""
      />
      {children}
    </Section>
  );
};

export default Headline;
