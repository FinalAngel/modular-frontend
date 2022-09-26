import React from "react";

import "./title.scss";

interface Props {
  type: "h1" | "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
}

const Title: React.FC<Props> = ({ type, className, children }) => {
  const Component = type;

  return (
    <Component
      className={`title title--${type}
        ${className ? ` ${className}` : ""}`}
    >
      {children}
    </Component>
  );
};

export default Title;
