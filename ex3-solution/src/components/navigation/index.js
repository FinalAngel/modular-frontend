import React from "react";

import Nav from "./nav";
import NavItem from "./nav-item";

import "./navigation.scss";

export const navigationItems = [
  "Home",
  "Event",
  "Accessoires",
  "Apparel",
  "Feautred Items",
];

// Items are required and need to be provided when refereming
// the component. Adding "items = navigationItems"
// could introduce unwanted behaviour
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
