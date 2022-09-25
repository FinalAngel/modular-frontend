import React from "react";

import "./nav.scss";

interface Props {
  flex?: boolean;
  list?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Nav: React.FC<Props> = ({ flex, list, className, children }) => {
  const styles = `nav
    ${flex ? ` nav--flex` : ""}
    ${list ? ` nav--list` : ""}
    ${className ? ` ${className}` : ""}`;

  return <ul className={styles}>{children}</ul>;
};

export { Nav };
export { default as NavItem } from "./item";
export { default as NavAnchor } from "./anchor";
