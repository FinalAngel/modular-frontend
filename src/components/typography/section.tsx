import React from "react";
import classNames from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({ className, children }) => (
  <div className={classNames("section", className)}>{children}</div>
);

export default Section;
