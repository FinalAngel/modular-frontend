import React from "react";

import "./meta.css";

const Meta = () => (
  <ul className="meta">
    <li className="meta-item">
      12 items in <a href="#">Cart</a>
    </li>
    <li className="meta-item">
      <a href="#">My Account</a>
    </li>
    <li className="meta-item">
      <form className="meta-form" method="post">
        <input type="search" /> <input type="submit" value="Search" />
      </form>
    </li>
  </ul>
);

export default Meta;
