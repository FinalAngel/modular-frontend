import React from "react";
import classNames from "clsx";

import "./nav.scss";

interface Props {
  flex?: boolean;
  list?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Nav: React.FC<Props> = ({ flex, list, className, children }) => {
  return (
    <ul
      className={classNames(
        "nav",
        {
          "nav--flex": flex,
          "nav--list": list,
        },
        className
      )}
    >
      {children}
    </ul>
  );
};

export { Nav };
export { default as NavItem } from "./item";
export { default as NavAnchor } from "./anchor";
