import React from "react";

import Nav from "./nav";
import NavItem from "./nav-item";

import "./navigation.scss";

const items = ["Home", "Event", "Accessoires", "Apparel", "Featured Items"];

const Navigation = () => (
  <nav className="navigation">
    <h2 hidden>Navigation</h2>
    <Nav>
      {items.map((item) => (
        <NavItem key={item} title={item} />
      ))}
    </Nav>
  </nav>
);

export default Navigation;
