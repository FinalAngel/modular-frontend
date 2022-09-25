import React from "react";
import ReactDOM from "react-dom/client";

import Container from "components/container";
import Copyright from "components/copyright";
import Footer from "components/footer";
import Header from "components/header";
import Headline from "components/headline";
import Products from "components/products";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Container>
      <Header />
      <Headline />
      <Products />
      <Footer />
      <Copyright />
    </Container>
  </React.StrictMode>
);
