import { addTask, editTask } from './add-edit-remove';

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