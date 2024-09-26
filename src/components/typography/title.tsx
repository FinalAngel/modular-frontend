import React from "react";
import classNames from "clsx";

import "./title.scss";

interface Props {
  type: "h1" | "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
}

const Title = ({ type, className, children }: Props) => {
  const Component = type;

  return (
    <Component className={classNames("title", `title--${type}`, className)}>
      {children}
    </Component>
  );
};

export default Title;