import React, { useContext, useState } from "react";
import { TodoContexts } from "../contexts/TodoContexts";
import { ACTIONS } from "../reducers/todoReducer";
const Form = () => {
  const { dispatch } = useContext(TodoContexts);
  const [item, setItem] = useState("");

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
    </form>
  );
};

export default Form;
