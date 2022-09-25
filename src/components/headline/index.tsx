import React from "react";

import "./headline.scss";

const Headline: React.FC = () => {
  return (
    <section className="headline">
      <img
        src="https://dummyimage.com/1024x300/cccccc/999999.jpg"
        className="headline__image"
        alt=""
      />
      <h2 className="title title--h2">Intro Copy Headline</h2>
      <p className="text">
        Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
        justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam vitae
        tortor.
      </p>
    </section>
  );
};

export default Headline;
