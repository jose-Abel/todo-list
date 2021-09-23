import statusUpdate from './statusUpdate.js';
import './style.css';

let todoTasks = [
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

const setLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todoTasks));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return;

  todoTasks = data;
};

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
  const listRendered = renderListItems(todoTasks);

  button.classList.add('button');
  button.innerHTML = 'Clear all completed';

  placeholder.appendChild(ul);
  placeholder.appendChild(button);

  const sortedLi = listRendered.sort((a, b) => a.id - b.id);

  sortedLi.forEach((li) => {
    ul.appendChild(li);
  });

  const checkboxes = document.querySelectorAll('.input-checkbox');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function checkboxHandler() {
      statusUpdate(todoTasks, this);

      setLocalStorage();
      getLocalStorage();
    });
  });

  const allLi = document.querySelectorAll('.todoitem');

  getLocalStorage();

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

  setLocalStorage();
});
