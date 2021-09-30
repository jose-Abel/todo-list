import { todosTasks, localStorage } from './myLocalStorage';
import statusUpdate from '../statusUpdate';

const checkingBoxesAndLine = () => {
  const checkboxes = document.querySelectorAll('.input-checkbox');
  const allLi = document.querySelectorAll('.todoitem');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function checkboxHandler() {
      statusUpdate(todosTasks, this);

      localStorage.removeItem('todos');

      localStorage.setItem('todos', JSON.stringify(todosTasks));
    });
  });

  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return;

  todosTasks = data;

  if (todosTasks.length > 0) {
    todosTasks.forEach((task) => {
      if (task.completed) {
        const liLineThrough = Array.from(allLi).find((li) => +li.id === task.index);
        liLineThrough.children[1].classList.add('line-through');
      }
    });

    checkboxes.forEach((checkbox) => {
      if (checkbox.nextElementSibling.classList.contains('line-through')) {
        checkbox.checked = true;
      }
    });
  }

  localStorage.setItem('todos', JSON.stringify(todosTasks));
};
  
export {checkingBoxesAndLine}