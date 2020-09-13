import React from "react";

const Headline = ({ title, description, image }) => (
  <section>
    <img src={image} alt="" />
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
);

export default Headline;
