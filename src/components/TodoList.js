import React, { useContext } from "react";
import styled from "./TodoList.module.css";
import { TodoContexts } from "../contexts/TodoContexts";
import { ACTIONS } from "../reducers/todoReducer";

const TodoList = () => {
  //destructure the state and the dispatch function from the context object
  const { state, dispatch } = useContext(TodoContexts);

  // dispatch the DELETE_TODO action with the current task id as payload
  const handleDelete = (task) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: task.id } });
  };

  // dispatch the COMPLETE_TODO action with the current task id as payload
  const handleComplete = (task) => {
    dispatch({
      type: ACTIONS.COMPLETE_TODO,
      payload: {
        id: task.id,
      },
    });
  };

  /**checks if the task is completed and applies approcite styling
   * styling - lowered opacity & line through
   * calls functions to dispatch appropriate actions
   */
  const list = state.map((task) => {
    return (
      <ul className={styled.list} key={task.id}>
        <section
          style={{ opacity: task.completed && "0.5" }}
          className={styled.listgroup}
        >
          <li style={{ textDecoration: task.completed && "line-through" }}>
            {task.todo_item}
          </li>

          <div className={styled.btnGroup}>
            <div onClick={() => handleDelete(task)}>
              <i class="fa-solid fa-lg fa-trash"></i>
            </div>
            <div onClick={() => handleComplete(task)}>
              <i class="fa-solid fa-lg fa-circle-check"></i>
            </div>
          </div>
        </section>
      </ul>
    );
  });
  return <div className={styled.listContainer}>{list}</div>;
};

export default TodoList;
