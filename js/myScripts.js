import {
  addTodo,
  removeTodo,
  doTodo,
  filterAllTodos,
  filterCompTodos,
  filterInCompTodos,
} from "./Redux/action.js";

import { addTodoAction } from "./Redux/actionCreators.js";

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");

//Create Reduce todo list ---------------------------------------
const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case addTodo: {
      let newState = [...state];
      let newTodoObject = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: false,
      };
      newState.push(newTodoObject);
      return newState;
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
    case filterCompTodos: {
      return state;
    }
    case filterInCompTodos: {
      return state;
    }
    default: {
      return state;
    }
  }
};

//------------------make store-------------------
const store = Redux.createStore(todoListReducer);
console.log(store);

//------------------
todoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTodoTitle = todoInput.value.trim();

  store.dispatch(addTodoAction(newTodoTitle));
  const todos = store.getState();
  todoInput.value = "";
  console.log(todos);
});
