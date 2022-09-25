import React from "react";

import "./meta.scss";

interface Props {
  children?: React.ReactNode;
}

const Meta: React.FC<Props> = ({ children }) => {
  return <ul className="meta">{children}</ul>;
};

export { Meta };
export { default as MetaItem } from "./item";
export { default as MetaAnchor } from "./anchor";
