import React from "react";
import classes from "./AppWrapper.module.css";
const AppWrapper = (props) => {
  return (
    <div className={`${classes.app} ${props.className}`}>{props.children}</div>
  );
};
export default AppWrapper;
