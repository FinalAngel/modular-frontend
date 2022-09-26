import React from "react";
import classNames from "clsx";

import "./item.scss";

interface Props {
  alpha?: boolean;
  omega?: boolean;
  children?: React.ReactNode;
}

const Item: React.FC<Props> = ({ alpha, omega, children }) => {
  return (
    <div
      className={classNames("grid__item", {
        "grid__item--alpha": alpha,
        "grid__item--omega": omega,
      })}
    >
      {children}
    </div>
  );
};

export default Item;
