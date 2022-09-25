import React from "react";

import { Container, Header, Footer, Copyright } from "../layout";

import { Products, ProductsItem } from "../products";

import Headline from "../headline";

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
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
    </Products>

    <Footer />

    <Copyright />
  </Container>
);

export default App;
