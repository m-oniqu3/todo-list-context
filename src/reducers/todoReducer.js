export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
};
/**
 * if the action is ADD_TODO it will return the previous states plus the action.payload
 */
const todoReducer = (allTodos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...allTodos,
        { todo_item: action.payload.item, id: action.payload.id },
      ];
    default:
      return allTodos;
  }
};

export default todoReducer;
