import { getLocalStorage } from './localStorage.js';

import changeStatus from './changeStatus.js';
import './style.css';

const todoTasks = [
  {
    description: 'Study React Native',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to the supermarket',
    completed: false,
    index: 3,
  },
  {
    description: 'Do my Microverse tasks',
    completed: false,
    index: 1,
  },
];

const renderListItems = (listTaks) => {
  const liArray = [];

  listTaks.forEach((task) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const input = document.createElement('input');

    input.type = 'checkbox';
    input.name = 'checkbox';
    span.innerHTML = task.description;

    input.classList.add('input-checkbox');
    li.classList.add('todoitem');
    li.id = task.index;

    if (task.completed) span.classList.add('line-through');

    li.appendChild(input);
    li.appendChild(span);

    liArray.push(li);
  });

  return liArray;
};

document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('todolist-placeholder');
  const ul = document.createElement('ul');
  const button = document.createElement('button');

  button.classList.add('button');
  button.innerHTML = 'Clear all completed';

  const sortedLi = renderListItems(todoTasks).sort((a, b) => a.id - b.id);

  sortedLi.forEach((li) => {
    ul.appendChild(li);
  });

  placeholder.appendChild(ul);
  placeholder.appendChild(button);

  const checkboxes = document.querySelectorAll('.input-checkbox');

  changeStatus(todoTasks);

  getLocalStorage(todoTasks);

  const allLi = document.querySelectorAll('.todoitem');

  todoTasks.forEach((task) => {
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
});
