import React from "react";

interface Props {
  type: "h1" | "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<Props> = ({ type, className, children }) => {
  const Component = type;

  return (
    <Component
      className={`text text--${type}
        ${className ? ` ${className}` : ""}`}
    >
      {children}
    </Component>
  );
};

export default Text;
