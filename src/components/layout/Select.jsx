import React from "react";

const Select = ({ name, id, className, children , onChange }) => {
  return (
    <div>
      <select onChange={onChange} name={name} id={id} className={className}>
        {children}
      </select>
    </div>
  );
};

export default Select;
