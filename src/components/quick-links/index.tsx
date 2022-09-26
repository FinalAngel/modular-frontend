import React from "react";

import { Nav, NavItem, NavAnchor } from "components/nav";
import { Title } from "components/typography";

export interface Props {
  items: string[];
}

const QuickLinks: React.FC<Props> = ({ items }) => (
  <div className="quick-links">
    <Title type="h3">Quick Links</Title>
    <Nav list>
      {items.map((item) => (
        <NavItem key={item}>
          <NavAnchor to={"./#"}>{item}</NavAnchor>
        </NavItem>
      ))}
    </Nav>
  </div>
);

export default QuickLinks;
