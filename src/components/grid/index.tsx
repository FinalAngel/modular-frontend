import React from "react";

import "./grid.scss";

interface Props {
  children?: React.ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className="grid">{children}</div>;
};

export { Grid };
export { default as GridItem } from "./item";
