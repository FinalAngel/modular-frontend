import React from "react";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="meta">
        <li className="meta-item">
          12 items in <a href="./#">Cart</a>
        </li>
        <li className="meta-item">
          <a href="./#">My Account</a>
        </li>
        <li className="meta-item">
          <form className="meta-form" method="post">
            <input type="search" /> <input type="submit" value="Search" />
          </form>
        </li>
      </ul>

      <h1 className="logo">A Big Title</h1>

      <nav className="navigation">
        <h2 hidden>Navigation</h2>
        <ul className="nav">
          <li className="nav-item">
            <a href="./#">Home</a>
          </li>
          <li className="nav-item">
            <a href="./#">Event</a>
          </li>
          <li className="nav-item">
            <a href="./#">Accessoires</a>
          </li>
          <li className="nav-item">
            <a href="./#">Apparel</a>
          </li>
          <li className="nav-item">
            <a href="./#">Featured Items</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
