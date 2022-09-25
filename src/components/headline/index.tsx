import React from "react";

import "./headline.scss";

interface Props {
  image: string;
  children?: React.ReactNode;
}

const Headline: React.FC<Props> = ({ image, children }) => {
  return (
    <section className="headline">
      <img
        src="https://dummyimage.com/1024x300/cccccc/999999.jpg"
        className="headline__image"
        alt=""
      />
      {children}
    </section>
  );
};

export default Headline;
