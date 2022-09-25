import React from "react";

import * as Layout from "./";

export default {
  title: "Organisms/Layout",
};

export const Header = () => (
  <Layout.Container>
    <Layout.Header />
  </Layout.Container>
);
export const Footer = () => (
  <Layout.Container>
    <Layout.Footer />
  </Layout.Container>
);
export const Copyright = () => (
  <Layout.Container>
    <Layout.Copyright />
  </Layout.Container>
);
