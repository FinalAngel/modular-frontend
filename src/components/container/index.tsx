import React from "react";

import "./container.scss";

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
