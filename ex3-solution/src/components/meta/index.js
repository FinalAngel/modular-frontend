import React from "react";

import "./meta.css";

const Meta = ({ cart = true, account = true, search = true }) => (
  <ul className="meta">
    {cart ? (
      <li className="meta-item">
        12 items in <a href="#">Cart</a>
      </li>
    ) : null}
    {account ? (
      <li className="meta-item">
        <a href="#">My Account</a>
      </li>
    ) : null}
    {search ? (
      <li className="meta-item">
        <form className="meta-form" method="post">
          <input type="search" /> <input type="submit" value="Search" />
        </form>
      </li>
    ) : null}
  </ul>
);

export default Meta;
