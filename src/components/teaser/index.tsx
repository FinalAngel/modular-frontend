import React from "react";

export interface Props {
  title: string;
  children?: React.ReactNode;
}

const Teaser: React.FC<Props> = ({ title, children }) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);

export default Teaser;
