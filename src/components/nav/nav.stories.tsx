import { Nav, NavItem, NavAnchor } from "./";

export default {
  title: "Molecules/Nav",
  component: Nav,
};

export const Standard = () => (
  <Nav>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
  </Nav>
);

export const Variants = () => (
  <Nav>
    <NavItem>Nav without anchor</NavItem>
    <NavItem active>
      <NavAnchor to={"./#"}>Active state</NavAnchor>
    </NavItem>
  </Nav>
);

export const List = () => (
  <Nav list>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
  </Nav>
);

export const Flex = () => (
  <Nav flex>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
    <NavItem>
      <NavAnchor to={"./#"}>Nav entry</NavAnchor>
    </NavItem>
  </Nav>
);
