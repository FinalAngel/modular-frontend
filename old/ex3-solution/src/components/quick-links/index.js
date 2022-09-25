import React from "react";

import "./quick-links.css";

const QuickLinks = ({ items, className, ...rest }) => (
  <div className={`quick-links ${className || ""}`} {...rest}>
    <h3 className="heading heading__h3 quick-links__title">Quick Links</h3>
    <ul className="nav quick-links__nav">
      {items.map((item) => (
        <li key={item} className="nav__item">
          <a href="#" className="nav__anchor">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLinks;
