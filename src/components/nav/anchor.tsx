import React from "react";

interface Props {
  to: string;
  children?: React.ReactNode;
}

const Anchor = ({ to, children }: Props) => {
  return (
    <a href={to} className="nav__anchor">
      {children}
    </a>
  );
};

export default Anchor;
