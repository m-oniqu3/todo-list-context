export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};
/**
 * if the action is ADD_TODO it will return the previous states plus the action.payload
 * if the action is to DELETE_TODO then remove the item based on its id
 * it the action is to COMPLETE_TODO then return the opposite of its current value
 */

const todoReducer = (allTodos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        {
          todo_item: action.payload.item,
          id: action.payload.id,
          completed: action.payload.complete,
        },
        ...allTodos,
      ];

    case ACTIONS.DELETE_TODO:
      return allTodos.filter(
        (currentTodo) => currentTodo.id !== action.payload.id
      );

    case ACTIONS.COMPLETE_TODO:
      return allTodos.map((currentTodo) => {
        if (currentTodo.id === action.payload.id) {
          console.log(currentTodo, action.payload);
          return {
            ...currentTodo,
            completed: !currentTodo.completed,
          };
        }
        return currentTodo;
      });

    default:
      return allTodos;
  }
};

export default todoReducer;
