import React from "react";
import classNames from "clsx";

import "./item.scss";

interface Props {
  alpha?: boolean;
  omega?: boolean;
  children?: React.ReactNode;
}

const Item = ({ alpha, omega, children }: Props) => {
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
