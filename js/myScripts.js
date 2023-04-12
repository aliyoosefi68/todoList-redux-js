import { addTodo, removeTodo, doTodo, getAllTodos } from "./Redux/action.js";

import {
  addTodoAction,
  removeTodoAction,
  doTodoAction,
  getAllTodosAction,
} from "./Redux/actionCreators.js";
window.removeTodoHandler = removeTodoHandler;
window.completeHandler = completeHandler;

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodos = document.querySelector(".filter-todo");

//Create Reduce todo list ---------------------------------------
const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case getAllTodos: {
      return state;
    }
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
      let newState = [...state];
      let removetodos = newState.filter((todo) => todo.id !== action.id);
      return removetodos;
    }

    case doTodo: {
      let newState = [...state];
      newState.some((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });

      return newState;
    }

    default: {
      return state;
    }
  }
};

//------------------make store-------------------
const store = Redux.createStore(todoListReducer);
console.log(store);

//------------------events--------------------------------
todoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTodoTitle = todoInput.value.trim();

  store.dispatch(addTodoAction(newTodoTitle));
  const todos = store.getState();
  shownTodos(todos);
  todoInput.value = "";
  console.log(todos);
});

function removeTodoHandler(todoId) {
  store.dispatch(removeTodoAction(todoId));
  const todos = store.getState();
  shownTodos(todos);
}

function completeHandler(todoId) {
  store.dispatch(doTodoAction(todoId));
  const todos = store.getState();
  shownTodos(todos);
}

filterTodos.addEventListener("change", (event) => {
  store.dispatch(getAllTodosAction());
  const allTodos = store.getState();
  if (event.target.value === "all") {
    shownTodos(allTodos);
  } else if (event.target.value === "completed") {
    let compTodos = allTodos.filter((todo) => todo.isCompleted);
    shownTodos(compTodos);
  } else if (event.target.value === "incomplete") {
    let inCompTodos = allTodos.filter((todo) => !todo.isCompleted);
    shownTodos(inCompTodos);
  }
});

const shownTodos = (todos) => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    todoList.insertAdjacentHTML(
      "beforeend",
      `
    <div class="todo ${todo.isCompleted && "completed"}">
      <li class="todo-item">${todo.title}</li>
      <button class="complete-btn" onclick=completeHandler("${todo.id}") >
                <i class="fas fa-check-circle"></i>
      </button>
      <button class="trash-btn" onclick = removeTodoHandler("${todo.id}")>
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `
    );
  });
};
