import React from "react";

const Teaser = ({ title, children, ...rest }) => (
  <div {...rest}>
    <h3>{title}</h3>
    {children}
  </div>
);

export default Teaser;
