import React from "react";
import ReactDOM from "react-dom/client";

import Container from "components/container";
import Copyright from "components/copyright";
import Footer from "components/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Container>
      <Footer />
      <Copyright />
    </Container>
  </React.StrictMode>
);
