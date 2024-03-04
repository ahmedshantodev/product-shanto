import React from "react";

const Input = ({ type, id, placeholder, className, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className}
      onChange={onchange}
    />
  );
};

export default Input;
