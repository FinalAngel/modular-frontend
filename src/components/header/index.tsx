import React from "react";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="meta">
        <li className="meta__item">
          12 items in{" "}
          <a href="./#" className="meta__anchor">
            Cart
          </a>
        </li>
        <li className="meta__item">
          <a href="./#" className="meta__anchor">
            My Account
          </a>
        </li>
        <li className="meta__item">
          <form className="form form--inline" method="post">
            <input type="search" className="form__input" />{" "}
            <input type="submit" value="Search" className="form__submit" />
          </form>
        </li>
      </ul>

      <h1 className="logo">A Big Title</h1>

      <nav className="navigation">
        <h2 hidden>Navigation</h2>
        <ul className="nav header__nav">
          <li className="nav__item nav__item--active">
            <a href="./#" className="nav__anchor">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="./#" className="nav__anchor">
              Event
            </a>
          </li>
          <li className="nav__item">
            <a href="./#" className="nav__anchor">
              Accessoires
            </a>
          </li>
          <li className="nav__item">
            <a href="./#" className="nav__anchor">
              Apparel
            </a>
          </li>
          <li className="nav__item">
            <a href="./#" className="nav__anchor">
              Featured Items
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
