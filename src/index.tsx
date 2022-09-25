import React from "react";
import ReactDOM from "react-dom/client";

import Container from "components/container";
import Copyright from "components/copyright";
import Footer from "components/footer";
import Header from "components/header";
import Headline from "components/headline";
import Logo from "components/logo";
import Products from "components/products";
import QuickLinks from "components/quick-links";
import Teaser from "components/teaser";

import { Form, Input } from "components/form";
import { Nav, NavItem, NavAnchor } from "components/nav";
import { Grid, GridItem } from "components/grid";
import { Title, Text } from "components/typography";

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

const products = Array.from({ length: 4 }, (index) => ({
  id: `produt-${index}`,
  title: "Item Title",
  image: "https://dummyimage.com/300x300/cccccc/999999.jpg",
  category: "Item Category",
  price: "88.00",
}));

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

        <Logo />

        <Nav>
          {menuEntries.map((entry) => (
            <NavItem key={entry} active>
              <NavAnchor to={"./#"}>{entry}</NavAnchor>
            </NavItem>
          ))}
        </Nav>
      </Header>
      <Headline image="https://dummyimage.com/1024x300/cccccc/999999.jpg">
        <Title type="h2">Intro Copy Headline</Title>
        <Text>
          Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam
          vitae tortor.
        </Text>
      </Headline>
      <Products title="Products" items={products} />
      <Footer>
        <Grid>
          <GridItem alpha>
            <QuickLinks items={["Home", "Events", "Support", "Contact"]} />
          </GridItem>

          <GridItem>
            <Teaser title="Announcements / Promoted Content">
              <Text>
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc, quis gravida magna mi a libero. Suspendisse enim turpis,
                dictum sed, iaculis a, condimentum nec, nisi. Praesent egestas
                tristique nibh. Vestibulum suscipit nulla quis orci. Nunc
                nonummy metus.
              </Text>
            </Teaser>
          </GridItem>

          <GridItem omega>
            <Teaser title="Coming Soon">
              <img
                src="https://dummyimage.com/150x60/ffffff/999999.jpg"
                alt=""
                className="footer__logo"
              />
            </Teaser>
          </GridItem>
        </Grid>
      </Footer>
      <Copyright />
    </Container>
  </React.StrictMode>
);
