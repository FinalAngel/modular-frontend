import React from "react";

import { Nav, NavItem, NavAnchor } from "components/nav";

export interface Props {
  items: string[];
}

const QuickLinks: React.FC<Props> = ({ items }) => (
  <div className="quick-links">
    <h3 className="title title--h3">Quick Links</h3>
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
