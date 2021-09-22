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
    span.innerHTML = task.description;

    input.classList.add('input-checkbox');
    li.classList.add('todoitem');
    li.id = task.index;

    li.appendChild(input);
    li.appendChild(span);

    liArray.push(li);
  });

  return liArray;
};

