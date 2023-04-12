import { addTodo, removeTodo, doTodo, getAllTodos } from "./action.js";

const addTodoAction = (title) => {
  return {
    type: addTodo,
    title,
  };
};

const getAllTodosAction = () => {
  return {
    type: getAllTodos,
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

export { addTodoAction, removeTodoAction, doTodoAction, getAllTodosAction };
