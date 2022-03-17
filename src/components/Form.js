import React, { useContext, useState } from "react";
import styled from "./Form.module.css";
import { TodoContexts } from "../contexts/TodoContexts";
import { ACTIONS } from "../reducers/todoReducer";

const Form = () => {
  //destructured the dispatch function from context
  const { dispatch } = useContext(TodoContexts);
  const [item, setItem] = useState("");

  /**
   * on submit, dispatch the action with the type and payload
   * reset the state to an empty string
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { item, id: Date.now(), complete: false },
    });
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <input
        className={styled.field}
        type="text"
        placeholder="Add a task...."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </form>
  );
};

export default Form;
