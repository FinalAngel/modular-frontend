import React from "react";

import { Container, Header, Footer, Copyright } from "../../components/layout";

import Products from "../../components/products";
import ProductItem from "../../components/products/product-item";

import Headline from "../../components/headline";

const App = () => (
  <Container>
    <Header />

    <Headline
      title="Intro Copy Headline"
      description="Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
      justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam vitae tortor."
      image="https://dummyimage.com/1024x300/cccccc/999999.jpg"
    />

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
