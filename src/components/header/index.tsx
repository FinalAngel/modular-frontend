import React from "react";

import { Form, Input } from "components/form";
import { Nav, NavItem, NavAnchor } from "components/nav";

import "./header.scss";

const menuEntries = [
  "Home",
  "Event",
  "Accessoires",
  "Apparel",
  "Featured Items",
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <Nav flex className="header__nav">
        <NavItem>
          12 items in <NavAnchor to={"./#"}>Cart</NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor to={"./#"}>My Account</NavAnchor>
        </NavItem>
        <NavItem>
          <Form inline>
            <Input type="text" /> <Input type="submit" value="Search" />
          </Form>
        </NavItem>
      </Nav>

      <h1 className="logo">A Big Title</h1>

      <nav className="navigation">
        <h2 hidden>Navigation</h2>
        <Nav>
          {menuEntries.map((entry) => (
            <NavItem key={entry} active>
              <NavAnchor to={"./#"}>{entry}</NavAnchor>
            </NavItem>
          ))}
        </Nav>
      </nav>
    </header>
  );
};

export default Header;
