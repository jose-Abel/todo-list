let todosTasks = [];

const setLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todosTasks));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return;

  todosTasks = data;
};

export { setLocalStorage, getLocalStorage, todosTasks }