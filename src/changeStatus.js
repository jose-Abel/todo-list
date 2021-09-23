// import { setLocalStorage } from './localStorage.js';

const checkboxHandler = (todoTasks, checkbox) => {
  const checkedTask = todoTasks.find((task) => {
    if(task.index === +checkbox.target.parentNode.id) {
      console.log(`task.index ${task.index} checkbox.target.parentNode.id ${+checkbox.target.parentNode.id}`)
      return task.index === +checkbox.target.parentNode.id;
    }
  });
  if(checkedTask.completed) {
    checkedTask.completed = false;
  } else {
    checkedTask.completed = true;
  }
  checkbox.target.nextElementSibling.classList.toggle('line-through');
  getLocalStorage();
  setLocalStorage();
}

const changeStatus = (todoTasks) => {
  const checkboxes = document.querySelectorAll('.input-checkbox');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', checkboxHandler.bind(this, todoTasks));
  });
};

export default changeStatus;