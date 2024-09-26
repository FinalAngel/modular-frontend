import React from "react";
import classNames from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Section = ({ className, children }: Props) => (
  <div className={classNames("section", className)}>{children}</div>
);

export default Section;
