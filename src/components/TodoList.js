import React, { useContext } from "react";
import { TodoContexts } from "../contexts/TodoContexts";
import { ACTIONS } from "../reducers/todoReducer";

const TodoList = () => {
  //destructure the state and the dispatch function from the context object
  const { state, dispatch } = useContext(TodoContexts);

  // dispatch the DELETE_TODO action when the user clicks on the button
  const handleDelete = (task) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: task.id } });
  };

  // dispatch the COMPLETE_TODO action when the user clicks on the button
  const handleComplete = (task) => {
    dispatch({
      type: ACTIONS.COMPLETE_TODO,
      payload: {
        id: task.id,
      },
    });
  };

  /**checks if the task is completed
   * calls functions to dispatch appropriate actions
   */
  const list = state.map((task) => {
    return (
      <ul key={task.id}>
        <li style={{ backgroundColor: task.completed && "lightgreen" }}>
          {task.todo_item}
        </li>
        <button onClick={() => handleDelete(task)}>Delete</button>
        <button onClick={() => handleComplete(task)}>Complete</button>
      </ul>
    );
  });
  return <div>{list}</div>;
};

export default TodoList;
