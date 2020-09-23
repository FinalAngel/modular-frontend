import React from "react";

import "./meta.css";

const Meta = ({ cart = true, account = true, search = true } = {}) => (
  <ul className="meta">
    {cart ? (
      <li className="meta__item">
        12 items in <a href="#">Cart</a>
      </li>
    ) : null}
    {account ? (
      <li className="meta__item">
        <a href="#" className="nav__anchor">
          My Account
        </a>
      </li>
    ) : null}
    {search ? (
      <li className="meta__item">
        <form className="form meta__form" method="post">
          <input type="search" className="form__input" />{" "}
          <input type="submit" className="form__button" value="Search" />
        </form>
      </li>
    ) : null}
  </ul>
);

export default Meta;
