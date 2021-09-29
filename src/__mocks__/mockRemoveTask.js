import { localStorage, changeTodosTasks, todosTasks } from './myLocalStorage';

const removeTask = (parentLi) => {
  const taskFromLi = todosTasks.find((task) => task.index === +parentLi.id);

  const newTodos = todosTasks.filter((task) => task.index !== taskFromLi.index);

  newTodos.forEach((todo, index) => {
    todo.index = index + 1;
  });

  changeTodosTasks(newTodos);

  const ul = parentLi.parentNode;

  ul.removeChild(parentLi);

  localStorage.setItem('todos', JSON.stringify(todosTasks));
};

export { removeTask };