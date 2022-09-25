import React from "react";

import "./headline.scss";

const Headline: React.FC = () => {
  return (
    <section>
      <img src="https://dummyimage.com/1024x300/cccccc/999999.jpg" alt="" />
      <h2>Intro Copy Headline</h2>
      <p>
        Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
        justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam vitae
        tortor.
      </p>
    </section>
  );
};

export default Headline;
