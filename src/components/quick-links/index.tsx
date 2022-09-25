import React from "react";

export interface Props {
  items: string[];
}

const QuickLinks: React.FC<Props> = ({ items }) => (
  <div className="quick-links">
    <h3 className="title title--h3">Quick Links</h3>
    <ul className="nav quick-links__nav">
      {items.map((item) => (
        <li key={item} className="nav__item">
          <a href="./#" className="nav__anchor">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLinks;
