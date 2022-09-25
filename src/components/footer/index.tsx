import React from "react";

import "./footer.scss";

interface Props {
  children?: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children }) => {
  return <footer className="footer">{children}</footer>;
};

export default Footer;
