import changeStatus from './todo-status';
import './style.css';

const todoTasks = [
  {
    description: 'Study React Native',
    completed: true,
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
    input.name = "checkbox";
    span.innerHTML = task.description;

    input.classList.add('input-checkbox');
    li.classList.add('todoitem');
    li.id = task.index;

    if(task.completed) span.classList.add("line-through");

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

  const checkboxes = document.querySelectorAll(".input-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        const checkedTask = todoTasks.find((task) => console.log(task.index))
        console.log()
        // console.log(checkedTask)
        // changeStatus(checkedTask);
        // console.log(this.parentNode.id);
      }
    });
  });
});
