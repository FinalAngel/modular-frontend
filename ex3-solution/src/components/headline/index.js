import React from "react";

const Headline = ({ title, description, image }) => (
  <section className="headline">
    <img src={image} alt="" className="headline__img" />
    <h2 className="heading heading__h2 headline__title">{title}</h2>
    <p className="headline__description">{description}</p>
  </section>
);

export default Headline;
