import React, { useContext } from "react";
import styled from "./TodoList.module.css";
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
      <ul className={styled.list} key={task.id}>
        <section className={styled.listgroup}>
          <li style={{ backgroundColor: task.completed && "lightgreen" }}>
            {task.todo_item}
          </li>

          <div className={styled.btnGroup}>
            <div onClick={() => handleDelete(task)}>
              <i class="fa-solid fa-lg fa-trash"></i>
            </div>
            <div onClick={() => handleComplete(task)}>
              <i class="fa-solid fa-lg fa-square-check"></i>
            </div>
          </div>
        </section>
      </ul>
    );
  });
  return <div>{list}</div>;
};

export default TodoList;
