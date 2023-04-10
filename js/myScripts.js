import {
  addTodo,
  removeTodo,
  doTodo,
  filterAllTodos,
  filterCompletedTodos,
  filterUnCompletedTodos,
} from "./Redux/action.js";

//create todolist Reducer
const todolistReducer = (state = [], action) => {
  switch (action.type) {
    case addTodo: {
      return state;
    }
    case removeTodo: {
      return state;
    }

    case doTodo: {
      return state;
    }
    case filterAllTodos: {
      return state;
    }
    case filterCompletedTodos: {
      return state;
    }
    case filterUnCompletedTodos: {
      return state;
    }

    default: {
      return state;
    }
  }
};

//create Store
const store = Redux.createStore(todolistReducer);

console.log(store);
