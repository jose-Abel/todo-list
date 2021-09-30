import { JSDOM } from 'jsdom';
import { addTask } from './add-edit-remove';
import { removeTask } from './__mocks__/mockRemoveTask';
import { LocalStorageMock, todosTasks, localStorage } from './__mocks__/myLocalStorage';
import {editTask, removeDeleteIcon, changeInputToSpan} from './add-edit-remove';

describe('addTask function', () => {
  // Arrange
  const todosTasks = [];
  // Act
  const result = addTask(todosTasks, 'Learning Jest');

  test('Returns an object ', () => {
    // Assert
    expect(typeof result).toEqual('object');
  });

  test('The description property of the returned object is equal to the value pass as a second argument', () => {
    // Assert
    expect(result.description).toEqual('Learning Jest');
  });

  test('The completed property of the returned object is equal to false', () => {
    // Assert
    expect(result.completed).toEqual(false);
  });

  test('The index property of the returned object is equal to the length of the array pass as a first argument plus one more', () => {
    // Assert
    expect(result.index).toEqual(todosTasks.length + 1);
  });
});

describe('removeTask function', () => {
  //Arrange
  todosTasks.push({description: 'Do the laundry', completed: false, index: 1}, {description: 'Create mocking test', completed: true, index: 2});
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;

  document.body.innerHTML =
  '<ul>' +
    `<li id=${todosTasks[0].index}>${todosTasks[0].description}</li>` +
    `<li id=${todosTasks[1].index}>${todosTasks[1].description}</li>` +
  '</ul>'
  const parentLi = document.getElementById(`${todosTasks[1].index}`);
  removeTask(parentLi);
  
  //Act
  test('Remove one task from the list', () => {
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(1);
  });

  test('Remove the element from the array', () => {
    expect(todosTasks.length).toBe(1);
  });

  test('Check if localStorage updates', () => {
    const itemDescription = JSON.parse(localStorage.getItem('todos'))[0].description;
    expect(itemDescription).toEqual(todosTasks[0].description);
  })

  test('Check if the removed item left local storage', () => {
    const newTasks = JSON.parse(localStorage.getItem('todos'));
    expect(todosTasks).toEqual(newTasks);
  })
})

describe('editTask function', () => {
  //Arrange
  const localStorage2 = new LocalStorageMock();

  const todosTasks2 = [];
  todosTasks2.push({description: 'Do the laundry', completed: false, index: 1}, {description: 'Create mocking test', completed: true, index: 2});
  const dom2 = new JSDOM();
  global.document2 = dom2.window.document;
  global.window2 = dom2.window;
  localStorage2.setItem('todos', JSON.stringify(todosTasks2));

  document2.body.innerHTML =
  '<ul>' +
    `<li id=${todosTasks2[0].index}><input> <span class="description">${todosTasks2[0].description}</span> <span class="delete-icon"></span></li>` +
    `<li id=${todosTasks2[1].index}><input> <span class="description">${todosTasks2[1].description}</span> <span class="delete-icon"></span></li>` +
  '</ul>'

  const firstLi = document2.getElementById(todosTasks2[0].index);

  const firstSpan = firstLi.querySelector('.description');

  const setLocalStorage = jest.fn();

  setLocalStorage.mockImplementation(() => localStorage2.setItem('todos', JSON.stringify(todosTasks2)));

  let taskFromLi;

  if (firstLi) {
    taskFromLi = todosTasks2.find((task) => task.index === +firstLi.id);
  }

  firstSpan.innerHTML = 'Something new';

  editTask(firstSpan);

  const inputElement = document2.querySelector('.input-description');

  test('the value of the input changed by the inner HTML of the span', ()=>{
    // Assert
    expect(inputElement.value).toBe('Something new');

  });

  test('the value in the inner HTML of the span for the first todo changed when enter is pressed', ()=>{
    // Act
    inputElement.blur();

    global['MouseEvent'] = window.MouseEvent;
    let event = new MouseEvent('click');
    document2.dispatchEvent(event);

    // global['KeyboardEvent'] = window.Event;
    // let event = new KeyboardEvent('keyup', {code: 'Enter'});
    // document2.dispatchEvent(event);

    // Assert
    expect(taskFromLi.description).toBe(inputElement.value);

  });
});