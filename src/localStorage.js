/* eslint-disable no-unused-vars */

const setLocalStorage = (todoTasks) => {
  localStorage.setItem('todos', JSON.stringify(todoTasks));
};

const getLocalStorage = (todoTasks) => {
  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return;

  todoTasks = data;
};

export { setLocalStorage, getLocalStorage };