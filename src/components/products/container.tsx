import React from "react";

import "./container.scss";

export interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <ul className="product">{children}</ul>;
};

export default Container;
