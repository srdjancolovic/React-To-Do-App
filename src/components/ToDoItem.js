import React from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  const deleteItem = function () {
    props.setToDoList(props.list.filter((el) => el.id !== props.toDoId.id));
  };

  return (
    <div className={classes.listItem}>
      <p>{props.text} </p>
      <button onClick={deleteItem}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default ToDoItem;
