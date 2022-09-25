import React from "react";

interface Props {
  type: "h1" | "h2";
  children?: React.ReactNode;
}

const Text: React.FC<Props> = ({ type, children }) => {
  const Component = type;

  return <Component className={`text text--${type}`}>{children}</Component>;
};

export default Text;
