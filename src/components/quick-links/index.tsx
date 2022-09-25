import React from "react";

export interface Props {
  items: string[];
}

const QuickLinks: React.FC<Props> = ({ items }) => (
  <>
    <h3>Quick Links</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>
          <a href="./#">{item}</a>
        </li>
      ))}
    </ul>
  </>
);

export default QuickLinks;
