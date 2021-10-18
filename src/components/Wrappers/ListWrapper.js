import React from "react";

import classes from "./ListWrapper.module.css";

const ListWrapper = (props) => {
  return (
    <div className={`${classes.listContainer} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default ListWrapper;
