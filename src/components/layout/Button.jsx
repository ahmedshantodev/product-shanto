import React from "react";

const Button = ({ className, text, icon, iconAlignment }) => {
  return (
    <button className={className}>
      {iconAlignment == "left" && icon}
      {text}
      {iconAlignment == "right" && icon}
    </button>
  );
};

export default Button;
