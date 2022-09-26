import React from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type: "text" | "submit";
  value?: string;
}

const Input: React.FC<Props> = ({ type, value, ...rest }) => {
  return (
    <input type={type} className={`input__${type}`} value={value} {...rest} />
  );
};

export default Input;
