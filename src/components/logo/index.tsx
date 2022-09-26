import React from "react";

import { Title } from "components/typography";

import "./logo.scss";

const Logo: React.FC = () => {
  return (
    <Title type="h1" className="logo">
      A Big Title
    </Title>
  );
};

export default Logo;
