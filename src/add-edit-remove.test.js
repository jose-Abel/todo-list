import { JSDOM } from 'jsdom';
import { addTask } from './add-edit-remove';
import { removeTask } from './__mocks__/mockRemoveTask';
import { todosTasks, localStorage } from './__mocks__/myLocalStorage';

describe('addTask function', () => {
  // Arrange
  const todosTasks = [];

  test('Returns an object ', () => {
    // Act
    const result = addTask(todosTasks, 'Learning Jest');

    // Assert
    expect(typeof result).toEqual('object');
  });

  test('The description property of the returned object is equal to the value pass as a second argument', () => {
    // Act
    const result = addTask(todosTasks, 'Learning Jest');

    // Assert
    expect(result.description).toEqual('Learning Jest');
  });

  test('The completed property of the returned object is equal to false', () => {
    // Act
    const result = addTask(todosTasks, 'Learning Jest');

    // Assert
    expect(result.completed).toEqual(false);
  });

  test('The index property of the returned object is equal to the length of the array pass as a first argument plus one more', () => {
    // Act
    const result = addTask(todosTasks, 'Learning Jest');

    // Assert
    expect(result.index).toEqual(todosTasks.length + 1);
  });
});

describe('Removetask function', () => {
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