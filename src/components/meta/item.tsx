import React from "react";

import "./item.scss";

interface Props {
  children?: React.ReactNode;
}

const Item: React.FC<Props> = ({ children }) => {
  return <li className="meta__item">{children}</li>;
};

export default Item;
