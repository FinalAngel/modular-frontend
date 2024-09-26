import React from "react";

import "./header.scss";

interface Props {
  children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return <header className="header">{children}</header>;
};

export default Header;
