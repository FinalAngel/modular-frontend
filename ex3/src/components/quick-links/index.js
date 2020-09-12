import React from "react";

const QuickLinks = ({ items, ...rest }) => (
  <div {...rest}>
    <h3>Quick Links</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLinks;
