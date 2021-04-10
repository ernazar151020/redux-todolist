export const addTodo = (message) => {
  return {
    type: "ADD_TODO",
    message,
    id: Math.random(),
    alert: "",
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};
export const check = (id) => {
  return {
    type: "CHECK",
    id,
  };
};
export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};
