import React from "react";

const NavItem = ({ title }) => (
  <li className="nav__item nav__item--horizontal">
    <a href="#" className="nav__anchor">
      {title}
    </a>
  </li>
);

export default NavItem;
