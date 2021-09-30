import statusUpdate from './statusUpdate.js';
import {
  addTask, editTask, addDeleteIcon, removeAllCompletedTasks,
} from './add-edit-remove.js';
import {
  setLocalStorage, getLocalStorage, removeItem, todosTasks,
} from './myLocalStorage.js';
import './style.css';

const createAllLiElement = (todosTasks) => {
  const placeholder = document.getElementById('todolist-placeholder');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  const liArray = [];

  todosTasks.forEach((task) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');

    span.innerHTML = task.description;
    li.id = task.index;
    li.classList.add('todoitem');
    span.classList.add('description');

    input.type = 'checkbox';
    input.classList.add('input-checkbox');

    if (task.completed) span.classList.add('line-through');

    li.appendChild(input);
    li.appendChild(span);

    liArray.push(li);
  });

  button.classList.add('button');
  button.innerHTML = 'Clear all completed';

  button.addEventListener('click', () => {
    removeAllCompletedTasks();
  });

  const sortedLi = liArray.sort((a, b) => a.id - b.id);

  sortedLi.forEach((li) => {
    ul.appendChild(li);
  });

  placeholder.appendChild(ul);
  placeholder.appendChild(button);
};

const deleteUlFromDOM = () => {
  const placeholder = document.getElementById('todolist-placeholder');
  const ul = document.querySelector('ul');
  const button = document.querySelector('.button');
  placeholder.removeChild(ul);
  placeholder.removeChild(button);
};

const checkingBoxesAndLine = () => {
  const checkboxes = document.querySelectorAll('.input-checkbox');
  const allLi = document.querySelectorAll('.todoitem');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function checkboxHandler() {
      statusUpdate(todosTasks, this);

      removeItem();

      setLocalStorage();
    });
  });

  getLocalStorage();

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

  setLocalStorage();
};

document.addEventListener('DOMContentLoaded', () => {
  const addInput = document.getElementById('add-input');
  createAllLiElement(todosTasks);

  addInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      if (addInput.value) {
        const newTask = addTask(todosTasks, addInput.value);
        todosTasks.push(newTask);

        setLocalStorage();
        deleteUlFromDOM();
        createAllLiElement(todosTasks);
        checkingBoxesAndLine();
        addInput.value = '';

        const allSpan = document.querySelectorAll('.description');

        allSpan.forEach((span) => {
          span.addEventListener('click', () => {
            addDeleteIcon(span);
            editTask(span);
          });
        });
      }
    }
  });

  getLocalStorage();
  deleteUlFromDOM();
  createAllLiElement(todosTasks);

  const allSpan = document.querySelectorAll('.description');

  allSpan.forEach((span) => {
    span.addEventListener('click', () => {
      addDeleteIcon(span);

      editTask(span);
    });
  });

  checkingBoxesAndLine();
});
