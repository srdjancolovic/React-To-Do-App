import React, { useState } from "react";
import classes from "./InputForm.module.css";
import Button from "./Button";

const InputForm = (props) => {
  const [inputValue, setinputValue] = useState("");
  const [validClass, setValidClass] = useState(true);

  const collectInputData = (e) => {
    e.preventDefault();
    //Do not add anything if input field is empty
    if (inputValue.trim().length === 0) {
      setValidClass(false);
      return;
    }

    //Pass data via props to App.js
    props.onInput(inputValue);
    setinputValue("");
  };

  //Take data from input and set it to be value of inputValue
  const updateinputValue = (e) => {
    setinputValue(e.target.value);
    if (inputValue.trim().length === 0) {
      //Using state to manipulate warning message
      setValidClass(true);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={collectInputData} className={classes.form}>
        <div
          className={`${classes.inputField} ${!validClass && classes.warning}`}
        >
          <input
            value={inputValue}
            onChange={updateinputValue}
            placeholder={!validClass ? "Please input text!" : ""}
          />
        </div>
        <Button type="submit"></Button>
      </form>
    </div>
  );
};
export default InputForm;
