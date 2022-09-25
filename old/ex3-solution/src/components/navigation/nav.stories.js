import React from "react";

import Nav from "./nav";
import NavItem from "./nav-item";

export default {
  title: "Molecules/Navigation",
  component: Nav,
};

export const Example = () => (
  <Nav>
    <NavItem title="Element 1" />
    <NavItem title="Element 2" />
    <NavItem title="Element 3" />
  </Nav>
);
