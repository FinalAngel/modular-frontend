import React from "react";

import "./reset.css";
import "./base.css";
import "./layout.css";

import Meta from "../meta";
import Logo from "../logo";
import Navigation, { navigationItems } from "../navigation";

import QuickLinks from "../quick-links";
import Teaser from "../teaser";

// this file should be split into its own components ideally as well, e.g.:
// layout/container
// layout/header
// layout/footer
// layout/copyright
// to separate the logic and css => modular design

export const Container = ({ children }) => (
  <div className="container">{children}</div>
);

export const Header = () => (
  <header className="header">
    <Meta />
    <Logo />
    <Navigation items={navigationItems} />
  </header>
);

export const Footer = () => (
  <footer className="footer">
    <h2 className="heading heading__h2 heading--hidden">Footer</h2>
    <QuickLinks
      items={["Home", "Events", "Support", "Contact"]}
      className="footer-grid__alpha"
    />

    <Teaser title="Announcements / Promoted Content" className="footer-grid">
      <p>
        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
        gravida magna mi a libero. Suspendisse enim turpis, dictum sed, iaculis
        a, condimentum nec, nisi. Praesent egestas tristique nibh. Vestibulum
        suscipit nulla quis orci. Nunc nonummy metus.
      </p>
    </Teaser>

    <Teaser title="Coming Soon" className="footer-grid footer-grid__omega">
      <img src="https://dummyimage.com/150x60/ffffff/999999.jpg" alt="" />
    </Teaser>
  </footer>
);

export const Copyright = () => (
  <p className="copyright">&copy; {new Date().getFullYear()} Demo Site</p>
);
