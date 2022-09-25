import React from "react";

import { Form, Input } from "components/form";
import { Meta, MetaItem, MetaAnchor } from "components/meta";
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
      <Meta>
        <MetaItem>
          12 items in <MetaAnchor to={"./#"}>Cart</MetaAnchor>
        </MetaItem>
        <MetaItem>
          <MetaAnchor to={"./#"}>My Account</MetaAnchor>
        </MetaItem>
        <MetaItem>
          <Form inline>
            <Input type="text" /> <Input type="submit" value="Search" />
          </Form>
        </MetaItem>
      </Meta>

      <h1 className="logo">A Big Title</h1>

      <nav className="navigation">
        <h2 hidden>Navigation</h2>
        <Nav>
          {menuEntries.map((entry) => (
            <NavItem key={entry} active>
              <NavAnchor to="./#">{entry}</NavAnchor>
            </NavItem>
          ))}
        </Nav>
      </nav>
    </header>
  );
};

export default Header;
