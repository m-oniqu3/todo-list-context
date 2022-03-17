import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

//created context
export const TodoContexts = createContext();

const TodoContextsProvider = ({ children }) => {
  //called the reducer with the initial state
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    //passed the state and the dispatch functions as values
    <TodoContexts.Provider value={{ state, dispatch }}>
      {children}
    </TodoContexts.Provider>
  );
};

export default TodoContextsProvider;
