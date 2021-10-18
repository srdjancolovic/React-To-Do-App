import React from "react";
import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <div>
      <h2
        className={
          props.list.length === 0
            ? ` ${classes.hintMessage}`
            : ` ${classes.hintMessageHide}`
        }
      >
        Nothing to do!
      </h2>
      {props.list.map((listItem) => (
        <ToDoItem
          text={listItem.itemText}
          setToDoList={props.setToDoList}
          list={props.list}
          toDoId={listItem}
          key={listItem.id}
        />
      ))}
    </div>
  );
};
export default ToDoList;
