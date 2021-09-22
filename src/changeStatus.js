/* eslint-disable func-names */

import { setLocalStorage, getLocalStorage } from './localStorage.js';

const changeStatus = (todoTasks) => {
  const checkboxes = document.querySelectorAll('.input-checkbox');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      const checkedTask = todoTasks.find((task) => task.index === +this.parentNode.id);
      checkedTask.completed = !checkedTask.completed;
      this.nextElementSibling.classList.toggle('line-through');

      localStorage.removeItem('todos');
      setLocalStorage(todoTasks);
      getLocalStorage(todoTasks);
    });
  });
};

export default changeStatus;