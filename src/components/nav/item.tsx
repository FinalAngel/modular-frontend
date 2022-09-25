import React from "react";

import "./item.scss";

interface Props {
  active?: boolean;
  children?: React.ReactNode;
}

const Item: React.FC<Props> = ({ active, children }) => {
  return (
    <li className={`nav__item${active ? " nav__item--active" : ""}`}>
      {children}
    </li>
  );
};

export default Item;
