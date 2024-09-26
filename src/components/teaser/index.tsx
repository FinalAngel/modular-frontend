import React from "react";

export interface Props {
  title: string;
  children?: React.ReactNode;
}

const Teaser = ({ title, children }: Props) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);

export default Teaser;
