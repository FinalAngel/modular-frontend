import React from "react";

import { Meta, MetaItem, MetaAnchor } from "components/meta";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Meta>
        <MetaItem>
          12 items in <MetaAnchor to={"./#"}>Cart</MetaAnchor>
        </MetaItem>
        <MetaItem>
          <MetaAnchor to={"./#"}>My Account</MetaAnchor>
        </MetaItem>
        <MetaItem>
          <form className="form form--inline" method="post">
            <input type="search" className="form__input" />{" "}
            <input type="submit" value="Search" className="form__submit" />
          </form>
        </MetaItem>
      </Meta>

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
