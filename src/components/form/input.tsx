import React from "react";

interface Props {
  type: "text" | "submit";
  value?: string;
}

const Input: React.FC<Props> = ({ type, value }) => {
  return <input type={type} className={`input__${type}`} value={value} />;
};

export default Input;
