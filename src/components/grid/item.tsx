import React from "react";

import "./item.scss";

interface Props {
  alpha?: boolean;
  omega?: boolean;
  children?: React.ReactNode;
}

const Item: React.FC<Props> = ({ alpha, omega, children }) => {
  const style = `grid__item
    ${alpha ? ` grid__item--alpha` : ""}
    ${omega ? ` grid__item--omega` : ""}`;
  return <div className={style}>{children}</div>;
};

export default Item;
