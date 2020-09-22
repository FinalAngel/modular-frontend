import React from "react";

import { Container, Header, Footer, Copyright } from "../../components/layout";

import Products from "../../components/products";
import ProductItem from "../../components/products/product-item";

import Headline from "../../components/headline";

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
