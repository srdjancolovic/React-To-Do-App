import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classes.button}
    >
      Add Item
    </button>
  );
};
export default Button;
