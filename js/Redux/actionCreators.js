import {
  addTodo,
  removeTodo,
  doTodo,
  filterAllTodos,
  filterCompTodos,
  filterInCompTodos,
} from "./action.js";

const addTodoAction = (title) => {
  return {
    type: addTodo,
    title,
  };
};
const removeTodoAction = (id) => {
  return {
    type: removeTodo,
    id,
  };
};
const doTodoAction = (id) => {
  return {
    type: doTodo,
    id,
  };
};

export { addTodoAction, removeTodoAction, doTodoAction };
