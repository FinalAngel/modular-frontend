import React from "react";

interface Props {
  active?: boolean;
  children?: React.ReactNode;
}

const Item: React.FC<Props> = ({ active, children }) => {
  return (
    <li className={`meta__item${active ? " meta__item--active" : ""}`}>
      {children}
    </li>
  );
};

export default Item;
