import React from "react";

import { Container, Header, Footer, Copyright } from "../layout";

import Products from "../products";
import ProductItem from "../products/product-item";

import Headline from "../headline";

const App = () => (
  <Container>
    <Header />

    <Headline />

    <Products>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Products>

    <Footer />

    <Copyright />
  </Container>
);

export default App;
