import React from "react";
import ReactDOM from "react-dom/client";

import Container from "components/container";
import Copyright from "components/copyright";
import Footer from "components/footer";
import Header from "components/header";
import Headline from "components/headline";
import Products from "components/products";

import { Form, Input } from "components/form";
import { Nav, NavItem, NavAnchor } from "components/nav";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const menuEntries = [
  "Home",
  "Event",
  "Accessoires",
  "Apparel",
  "Featured Items",
];

root.render(
  <React.StrictMode>
    <Container>
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
      </Header>
      <Headline />
      <Products />
      <Footer />
      <Copyright />
    </Container>
  </React.StrictMode>
);
