/* eslint-disable import/no-mutable-exports */

let todosTasks = [];

const setLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todosTasks));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return;

  todosTasks = data;
};

const removeItem = () => {
  localStorage.removeItem('todos');
};

const changeTodosTasks = (newTodos) => {
  todosTasks = newTodos;
};

export {
  setLocalStorage, getLocalStorage, removeItem, todosTasks, changeTodosTasks,
};