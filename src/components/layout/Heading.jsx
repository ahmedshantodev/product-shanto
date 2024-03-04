import React from "react";

const Heading = (props) => {
  return props.as ? (
    <props.as className={props.className}>{props.text}</props.as>
  ) : (
    <h2 className={props.className}>{props.text}</h2>
  );
};

export default Heading;
