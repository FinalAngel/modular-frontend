import React from "react";
import classNames from "clsx";

import "./form.scss";

interface Props {
  inline?: boolean;
  children?: React.ReactNode;
}

const Form = ({ inline, children }: Props) => {
  return (
    <form
      className={classNames("form", {
        "form--inline": inline,
      })}
      method="post"
    >
      {children}
    </form>
  );
};

export { Form };
export { default as Input } from "./input";
