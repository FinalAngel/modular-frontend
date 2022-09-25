import React from "react";

import "./header.scss";

interface Props {
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
