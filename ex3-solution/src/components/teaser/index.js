import React from "react";

const Teaser = ({ title, children, ...rest }) => (
  <div className="teaser" {...rest}>
    <h3 className="heading heading__h3 teaser__title">{title}</h3>
    <div className="teaser__body">{children}</div>
  </div>
);

export default Teaser;
