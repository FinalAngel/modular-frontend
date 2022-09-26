import React from "react";

import App, { AppHeader, AppFooter } from "app";

export default {
  title: "Templates/App",
};

export const Home = () => <App />;
export const Header = () => <AppHeader />;
export const Footer = () => <AppFooter />;
