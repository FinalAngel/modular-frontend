import React from "react";

import Header from "components/header";
import Logo from "components/logo";

import { Form, Input } from "components/form";
import { Nav, NavItem, NavAnchor } from "components/nav";

const menuEntries = [
  "Home",
  "Event",
  "Accessoires",
  "Apparel",
  "Featured Items",
];

const HeaderLayout: React.FC = () => {
  return (
    <Header>
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

      <Logo />

      <Nav>
        {menuEntries.map((entry) => (
          <NavItem key={entry} active>
            <NavAnchor to={"./#"}>{entry}</NavAnchor>
          </NavItem>
        ))}
      </Nav>
    </Header>
  );
};

export default HeaderLayout;
