import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({ className, children }) => (
  <div
    className={`section
    ${className ? ` ${className}` : ""}`}
  >
    {children}
  </div>
);

export default Section;
