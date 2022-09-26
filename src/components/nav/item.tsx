import React from "react";
import classNames from "clsx";

import "./item.scss";

interface Props {
  active?: boolean;
  children?: React.ReactNode;
}

const Item: React.FC<Props> = ({ active, children }) => {
  return (
    <li
      className={classNames("nav__item", {
        "nav__item--active": active,
      })}
    >
      {children}
    </li>
  );
};

export default Item;
