import statusUpdate from './statusUpdate.js';
import { addTask, editTask, removeTask } from './add-remove.js';
import './style.css';

let todosTasks = [];

const setLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todosTasks));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return;

  todosTasks = data;
};

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

    input.type = 'checkbox';
    input.classList.add('input-checkbox');

    if (task.completed) span.classList.add('line-through');

    li.appendChild(input);
    li.appendChild(span);

    liArray.push(li);
  });

  button.classList.add('button');
  button.innerHTML = 'Clear all completed';

  const sortedLi = liArray.sort((a, b) => a.id - b.id);

  sortedLi.forEach((li) => {
    ul.appendChild(li);
  });

  placeholder.appendChild(ul);
  placeholder.appendChild(button);
};

const deleteUlFromDOM = () => {
  const placeholder = document.getElementById('todolist-placeholder');
  const allUl = document.querySelectorAll("ul");
  const button = document.querySelector('.button');
  allUl.forEach((ul) => {
    ul.innerHTML = '';
  });
  placeholder.removeChild(button);
}

const checkingBoxesAndLine = () => {
  const checkboxes = document.querySelectorAll('.input-checkbox');
  const allLi = document.querySelectorAll('.todoitem');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function checkboxHandler() {
      statusUpdate(todosTasks, this);

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
}


document.addEventListener('DOMContentLoaded', () => {
  const addInput = document.getElementById('add-input');
  //--------------------------------------------------------------------------
  createAllLiElement(todosTasks);
  //-------------------------------------------------------------------------

  addInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      if(addInput.value) {
        const newTask = addTask(todosTasks, addInput.value);
        todosTasks.push(newTask);
        setLocalStorage();
        deleteUlFromDOM();
        createAllLiElement(todosTasks);
        checkingBoxesAndLine();
      }
    }
  });

  getLocalStorage();
  deleteUlFromDOM();
  createAllLiElement(todosTasks);
  checkingBoxesAndLine();

});
