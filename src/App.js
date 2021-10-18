import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import classes from "./components/InputForm.module.css";
import AppWrapper from "./components/Wrappers/AppWrapper";
import ListWrapper from "./components/Wrappers/ListWrapper";
function App() {
  const [toDoList, setToDoList] = useState([]);

  //Create new item
  const addItemToList = (text) => {
    setToDoList((prevItems) => {
      return [...prevItems, { itemText: text, id: Math.random() * 1000 }];
    });
  };
  return (
    <div>
      <h2 className={classes.heading}>To Do App</h2>
      <AppWrapper>
        <InputForm onInput={addItemToList} />
        <ListWrapper>
          <ToDoList list={toDoList} setToDoList={setToDoList} />
        </ListWrapper>
      </AppWrapper>
    </div>
  );
}

export default App;
