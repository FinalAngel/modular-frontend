import React from "react";

import { Title } from "components/typography";

export interface Props {
  title: string;
  children?: React.ReactNode;
}

const Teaser = ({ title, children }: Props) => (
  <div className="teaser">
    <Title type="h3">{title}</Title>
    {children}
  </div>
);

export default Teaser;
