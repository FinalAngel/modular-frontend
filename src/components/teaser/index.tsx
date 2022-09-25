import React from "react";

export interface Props {
  title: string;
  children?: React.ReactNode;
}

const Teaser: React.FC<Props> = ({ title, children }) => (
  <div className="teaser">
    <h3 className="title title--h3">{title}</h3>
    {children}
  </div>
);

export default Teaser;
