import React, { useContext, useState } from "react";
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
    dispatch({ type: ACTIONS.ADD_TODO, payload: { item, id: Date.now() } });
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
