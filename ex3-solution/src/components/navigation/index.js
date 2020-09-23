import React from "react";

import Nav from "./nav";
import NavItem from "./nav-item";

import "./navigation.scss";

export const navigationItems = [
  "Home",
  "Event",
  "Accessoires",
  "Apparel",
  "Featured Items",
];

const Navigation = ({ items }) => (
  <nav className="navigation">
    <h2 className="heading heading__h2 heading--hidden">Navigation</h2>
    <Nav>
      {items.map((item) => (
        <NavItem key={item} title={item} />
      ))}
    </Nav>
  </nav>
);

export default Navigation;
