import React from "react";

import "./form.scss";

interface Props {
  inline?: boolean;
  children?: React.ReactNode;
}

const Form: React.FC<Props> = ({ inline, children }) => {
  return (
    <form className={`form${inline ? " form--inline" : ""}`} method="post">
      {children}
    </form>
  );
};

export { Form };
export { default as Input } from "./input";
