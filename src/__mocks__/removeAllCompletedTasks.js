import { localStorage, changeTodosTasks, todosTasks } from './myLocalStorage';

const removeAllCompletedTasks = () => {
  const newTodos = todosTasks.filter((task) => !task.completed);
  const allDeletedTodos = todosTasks.filter((task) => task.completed);
  const allLi = document.querySelectorAll('.todoitem');
  const ul = document.querySelector('ul');

  const liToDelete = [];

  allLi.forEach((li) => {
    allDeletedTodos.forEach((deleted) => {
      if (deleted.index === +li.id) {
        liToDelete.push(li);
      }
    });
  });

  newTodos.forEach((todo, index) => {
    todo.index = index + 1;
  });

  changeTodosTasks(newTodos);

  if (!allLi) {
    const ulParent = ul.parentNode;
    ulParent.removeChild(ul);
  }

  if (liToDelete) {
    liToDelete.forEach((li) => {
      ul.removeChild(li);
    });
  }

  localStorage.setItem('todos', JSON.stringify(todosTasks));
};

export {removeAllCompletedTasks}