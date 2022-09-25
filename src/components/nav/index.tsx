import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Nav: React.FC<Props> = ({ children }) => {
  return <ul className="nav">{children}</ul>;
};

export { Nav };
export { default as NavItem } from "./item";
export { default as NavAnchor } from "./anchor";
