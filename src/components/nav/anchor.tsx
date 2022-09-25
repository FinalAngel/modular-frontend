import React from "react";

interface Props {
  to: string;
  children?: React.ReactNode;
}

const Anchor: React.FC<Props> = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

export default Anchor;
